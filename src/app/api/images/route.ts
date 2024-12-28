import { NextResponse } from "next/server"
import { getSignedUrl } from "@aws-sdk/cloudfront-signer"
import { v4 as uuid } from "uuid"
import { PutObjectCommand } from "@aws-sdk/client-s3"
import prisma from "@/lib/prisma"
import { resizeImage } from "@/utils/resizeImage"
import { getS3Client } from "@/lib/s3"

export const GET = async () => {
  try {
    const images = await prisma.image.findMany()

    if (
      !process.env.CLOUDFRONT_URL ||
      !process.env.CLOUDFRONT_KEYPAIR_ID ||
      !process.env.CLOUDFRONT_PRIVATE_KEY
    ) {
      throw new Error("CloudFront environment variables are not set")
    }

    const signedImages = images.map((image) => ({
      ...image,
      url: getSignedUrl({
        url: `${process.env.CLOUDFRONT_URL}/${image.name}`,
        keyPairId: process.env.CLOUDFRONT_KEYPAIR_ID as string,
        privateKey: process.env.CLOUDFRONT_PRIVATE_KEY as string,
        dateLessThan: new Date(Date.now() + 60 * 60 * 24 * 1000).toISOString(),
      }),
    }))

    return NextResponse.json({ images: signedImages })
  } catch (err) {
    throw new Error("Error fetching images", err.message)
  }
}

export const POST = async (req: any) => {
  const formData = await req.formData()
  const file = formData.get("file")
  const buffer = Buffer.from(await file.arrayBuffer())

  const filename = `${uuid()}-${file.name}`
  const resizedImage = await resizeImage(buffer)

  try {
    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: filename,
      Body: resizedImage,
      ContentType: file.mimetype,
    })

    await getS3Client().send(command)

    const imageData = await prisma.image.create({
      data: {
        name: filename,
        url: `${process.env.CLOUDFRONT_URL}/${filename}`,
      },
    })

    return NextResponse.json({ imageData })
  } catch (err) {
    throw new Error(err)
  }
}

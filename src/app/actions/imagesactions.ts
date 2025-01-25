"use server"

import prisma from "@/lib/prisma"
import { getS3Client } from "@/lib/s3"
import { resizeImage } from "@/utils/resizeImage"
import { DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3"
import { v4 as uuid } from "uuid"

export const postImageAction = async (formData: any) => {
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

    return { imageData }
  } catch (err) {
    throw new Error(err)
  }
}

export const deleteImageAction = async (id: string) => {
  try {
    const image = await prisma.image.findUnique({
      where: { id },
    })
    if (!image) {
      throw new Error(`Image with id ${id} not found`)
    }
    const deletedImage = await prisma.image.delete({
      where: { id },
    })
    const command = new DeleteObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: deletedImage.name,
    })
    await getS3Client().send(command)
    return { message: "item deleted" }
  } catch (err) {
    throw new Error(err)
  }
}

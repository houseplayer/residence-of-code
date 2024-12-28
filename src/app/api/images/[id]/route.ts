import prisma from "@/lib/prisma"
import { getS3Client } from "@/lib/s3"
import { DeleteObjectCommand } from "@aws-sdk/client-s3"
import { NextRequest, NextResponse } from "next/server"

export const DELETE = async (req: NextRequest) => {
  try {
    const { pathname } = new URL(req.url)
    const parts = pathname.split("/")
    const id = parts[parts.length - 1]

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
    return NextResponse.json({ message: "item deleted" })
  } catch (err) {
    throw new Error(err)
  }
}

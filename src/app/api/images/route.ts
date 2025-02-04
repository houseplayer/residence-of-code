import { NextResponse } from "next/server"
import { getSignedUrl } from "@aws-sdk/cloudfront-signer"
import prisma from "@/lib/prisma"
import {} from "@/lib/s3"

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

		const privateKey = process.env.CLOUDFRONT_PRIVATE_KEY?.replace(/\\n/g, "\n")

		const signedImages = images.map((image) => ({
			...image,
			url: getSignedUrl({
				url: `${process.env.CLOUDFRONT_URL}/${image.name}`,
				keyPairId: process.env.CLOUDFRONT_KEYPAIR_ID as string,
				privateKey,
				dateLessThan: new Date(Date.now() + 60 * 60 * 24 * 1000).toISOString(),
			}),
		}))

		return NextResponse.json({ images: signedImages })
	} catch (err) {
		throw new Error(err)
	}
}

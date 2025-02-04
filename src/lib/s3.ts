import { S3Client } from "@aws-sdk/client-s3"

let s3: S3Client | null = null

export const getS3Client = (): S3Client => {
	if (!s3) {
		s3 = new S3Client({
			region: process.env.S3_BUCKET_REGION,
			credentials: {
				accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
				secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
			},
		})
	}
	return s3
}

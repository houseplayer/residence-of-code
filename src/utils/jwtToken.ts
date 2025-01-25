import * as jose from "jose"

export const generateToken = async (payload: any, expire: number | string | Date) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET)
  const alg = process.env.JWT_ALGORITHM as string

  const jwt = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime(expire)
    .sign(secret)

  return jwt
}

export const validateToken = async (token: string | null) => {
  if (!token) {
    throw new Error("user not authenticated")
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET)
  await jose.jwtVerify("token", secret)
}

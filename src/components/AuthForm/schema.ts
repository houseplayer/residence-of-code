import { z } from "zod"
import { emailRegex } from "@/utils/regex"

export const authFormSchema = z.object({
  email: z.string().regex(emailRegex, "enter a valid email"),
  password: z.string().min(1, "enter your password"),
})
export type AuthFormSchema = z.infer<typeof authFormSchema>

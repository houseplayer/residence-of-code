"use client"

import AuthForm from "../../components/AuthForm"
import { signupAction } from "../actions/authActions"
import { AuthFormSchema } from "../../components/AuthForm/schema"
import { routes } from "@/utils/enums"
import { useRouter } from "next/navigation"
import { useUser } from "@/lib/zustand"

const Signup = () => {
  const router = useRouter()
  const { user } = useUser()

  if (user) {
    router.push(routes.blog)
  }

  const handleSignup = async (formData: AuthFormSchema) => {
    const response = await signupAction(formData)
    console.log("response: ", response)
  }

  return <AuthForm onSubmit={handleSignup} label="Signup" />
}

export default Signup

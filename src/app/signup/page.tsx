"use client"

import AuthForm from "@/components/AuthForm"
import { AuthFormSchema } from "@/components/AuthForm/schema"
import { signupAction } from "@/actions/authActions"
import { routes } from "@/utils/enums"
import { useUser } from "@/lib/zustand"
import { useRouter } from "next/navigation"

const Signup = () => {
	const router = useRouter()
	const { user } = useUser()

	if (user) {
		router.push(routes.blog)
	}

	const handleSignup = async (formData: AuthFormSchema) => {
		await signupAction(formData)
	}

	return <AuthForm onSubmit={handleSignup} label="Signup" />
}

export default Signup

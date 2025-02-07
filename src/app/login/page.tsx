"use client"

import AuthForm from "@/components/AuthForm"
import { loginAction } from "@/actions/authActions"
import { AuthFormSchema } from "@/components/AuthForm/schema"
import { useToken, useUser } from "@/lib/zustand"
import { routes } from "@/utils/enums"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

const Login = () => {
	const router = useRouter()
	const { setUser } = useUser()
	const { setToken } = useToken()

	const handleLogin = async (formData: AuthFormSchema) => {
		const { data, message, error } = await loginAction(formData)

		if (data) {
			const { email, roles, token } = data
			setToken(token)
			setUser(email, roles)
			toast.success(message)
			router.push(routes.blog)
		} else {
			toast.error(error)
		}
	}

	return <AuthForm onSubmit={handleLogin} label="Login" />
}

export default Login

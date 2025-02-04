"use client"

import Input from "@/components/Input"
import Button from "@/components/Button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { authFormSchema, AuthFormSchema } from "./schema"

interface Props {
	onSubmit: (formData: AuthFormSchema) => Promise<void>
	label: string
}

const AuthForm = ({ onSubmit, label }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<AuthFormSchema>({
		resolver: zodResolver(authFormSchema),
		mode: "onSubmit",
		reValidateMode: "onChange",
	})

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex justify-center flex-col w-72 my-4 mx-auto"
		>
			<h1 className="mx-auto font-semibold">{label}</h1>
			<Input {...register("email")} error={errors.email?.message} placeholder="email" />
			<Input
				{...register("password")}
				error={errors.password?.message}
				placeholder="password"
				type="password"
				className="mt-2"
			/>
			<Button label={label} className="mt-2" disabled={isSubmitting} />
		</form>
	)
}

export default AuthForm

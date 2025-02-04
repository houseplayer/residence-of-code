"use server"

import { validateData } from "@/utils/validateData"
import { generateToken } from "@/utils/jwtToken"
import { authFormSchema, AuthFormSchema } from "../../components/AuthForm/schema"
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"

export const loginAction = async (formData: AuthFormSchema) => {
	try {
		validateData(formData, authFormSchema)
		const { email, password } = formData

		const user = await prisma.user.findUnique({
			where: {
				email,
			},
			select: {
				email: true,
				password: true,
				roles: { select: { name: true } },
			},
		})

		if (!user) {
			throw new Error("user with this email doesn't exist")
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.password)

		if (!isPasswordCorrect) {
			throw new Error("incorrect password")
		}

		const payload = {
			email: user.email,
			roles: user.roles.map((role) => role.name),
		}

		const jwt = await generateToken(payload, "5m")

		return {
			data: { ...payload, token: jwt },
			message: "login successful",
			error: null,
		}
	} catch (error) {
		return {
			data: null,
			error: error.message as string,
		}
	}
}

export const signupAction = async (formData: AuthFormSchema) => {
	try {
		validateData(formData, authFormSchema)
		const { email, password } = formData

		const hashedPassword = await bcrypt.hash(password, 10)

		await prisma.user.create({
			data: {
				email,
				password: hashedPassword,
				roles: {
					connect: [{ name: "user" }],
				},
			},
		})

		return { success: true, message: "user created" }
	} catch (error) {
		if (String(error.message).includes("Unique constraint failed on the fields: (`email`)")) {
			return { success: false, message: "user with this email already exist" }
		}
		return { success: false, message: error.message }
	}
}

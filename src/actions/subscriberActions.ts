"use server"

import {
	subscriberFormSchema,
	SubscriberFormSchema,
} from "@/components/Subscribers/AddSubscriberForm/schema"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { validateData } from "@/utils/validateData"
import { validateToken } from "@/utils/jwtToken"

export const addSubscriberAction = async (formData: SubscriberFormSchema, token: string | null) => {
	try {
		await validateToken(token)
		validateData(formData, subscriberFormSchema)
		const { email, name } = formData
		await prisma.subscriber.create({ data: { email, name } })
		return { success: true, message: "subscriber added" }
	} catch (error) {
		if (String(error.message).includes("Unique constraint failed on the fields: (`email`)")) {
			return { success: false, message: "subscriber with this email already exist" }
		}
		return { success: false, message: error.message }
	} finally {
		revalidatePath("/")
	}
}

export const deleteSubscriberAction = async (id: string, token: string | null) => {
	try {
		await validateToken(token)
		await prisma.subscriber.delete({ where: { id: id } })
		return { success: true, message: "subscriber deleted" }
	} catch (error) {
		return {
			success: false,
			message: "Delete subscriber failed. Please try again",
			error: error.message,
		}
	} finally {
		revalidatePath("/")
	}
}

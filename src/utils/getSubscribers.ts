import { Subscriber } from "@/types"
import prisma from "@/lib/prisma"

export const getSubscribers = async () => {
	const subscribers: Subscriber[] = await prisma.subscriber.findMany({
		orderBy: { createdAt: "desc" },
	})

	return subscribers
}

export const getSubscribersEmails = async () => {
	const subscribers: Subscriber[] = await getSubscribers()
	const subscribersString = subscribers.map((subscriber) => subscriber.email).join(",")

	return subscribersString
}

"use client"

import EmailForm from "@/components/EmailForm"
import SubscribersList from "@/components/Subscribers/SubscribersList"
import { useUser } from "@/lib/zustand"
import { Subscriber } from "@/types"
import { checkPermission } from "@/utils/checkPermission"
import { routes, userRole } from "@/utils/enums"
import { redirect } from "next/navigation"

interface Props {
	subscribers: Subscriber[]
}

const Admin = ({ subscribers }: Props) => {
	const { user } = useUser()

	if (!checkPermission(user, userRole.admin)) {
		redirect(routes.login)
	}

	return (
		<>
			<EmailForm className="w-72" />
			<SubscribersList subscribers={subscribers} />
		</>
	)
}

export default Admin

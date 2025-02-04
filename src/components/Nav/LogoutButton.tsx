"use client"

import { useUser } from "@/lib/zustand"
import Button from "../Button"
import { useRouter } from "next/navigation"

const LogoutButton = () => {
	const { removeUser } = useUser()
	const router = useRouter()

	const handleLogout = () => {
		router.push("/")
		removeUser()
	}

	return <Button onClick={handleLogout} className="ml-2 mr-4" label="Logout" />
}

export default LogoutButton

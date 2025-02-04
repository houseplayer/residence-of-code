"use client"

import { User } from "@/types"
import { routes } from "@/utils/enums"
import { getUserInitials } from "@/utils/getuserInitials"
import Link from "next/link"

interface Props {
	user: User
}

const UserIcon = ({ user }: Props) => {
	return (
		<Link
			href={routes.user}
			className="w-[40px] h-[40px] bg-orange-500 text-white rounded-full inline-flex justify-center items-center overflow-hidden"
		>
			{getUserInitials(user.email)}
		</Link>
	)
}

export default UserIcon

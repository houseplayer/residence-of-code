"use client"

import { useUser } from "@/lib/zustand"

const UserInfo = () => {
	const { user } = useUser()

	return (
		user && (
			<div className="flex justify-center flex-col w-max m-auto mt-4 border-1 px-3 py-2">
				<h1 className="uppercase font-bold"> {user.email}</h1>
				{user.roles.map((role) => (
					<p key={role}>{role}</p>
				))}
			</div>
		)
	)
}

export default UserInfo

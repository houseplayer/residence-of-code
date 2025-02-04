"use client"

import Link from "next/link"
import CustomLink from "../Link"
import { usePathname } from "next/navigation"
import { routes, userRole } from "@/utils/enums"
import { checkPermission } from "@/utils/checkPermission"
import UserIcon from "../UserInfo/UserIcon"
import { useUser } from "@/lib/zustand"
import LogoutButton from "./LogoutButton"

const Nav = () => {
	const { user } = useUser()
	const currentPath = usePathname()

	const authRoutes = (
		<div className="flex items-center h-[40px]">
			{user ? (
				<LogoutButton />
			) : (
				<>
					<CustomLink href={routes.login} className="mx-2">
						Log in
					</CustomLink>
					<CustomLink href={routes.signup} className="mx-2">
						Sign Up
					</CustomLink>
				</>
			)}
		</div>
	)

	const publicRoutes = (
		<div>
			<Link
				href={routes.home}
				className={currentPath === routes.home ? "border-slate-700 border-b-1 mx-2" : "mx-2"}
			>
				Home
			</Link>
			<Link
				href={routes.blog}
				className={currentPath.includes(routes.blog) ? "border-slate-700 border-b-1 mx-2" : "mx-2"}
			>
				Blog
			</Link>
			<Link
				href={routes.images}
				className={
					currentPath.includes(routes.images) ? "border-slate-700 border-b-1 mx-2" : "mx-2"
				}
			>
				Images
			</Link>
		</div>
	)

	const adminRoutes = checkPermission(user, userRole.admin) && (
		<div>
			<Link
				href={routes.admin}
				className={currentPath === routes.admin ? "border-slate-700 border-b-1 mx-2" : "mx-2"}
			>
				Admin
			</Link>
		</div>
	)

	return (
		<div className="px-3 py-4 border-b-1 border-black bg-slate-200">
			<div className={`flex items-center ${user ? "justify-between" : "justify-center"}`}>
				{authRoutes}
				<div>{user && <UserIcon user={user} />}</div>
			</div>
			<div className="flex items-center justify-center flex-wrap mt-2">
				{publicRoutes}
				{adminRoutes}
			</div>
		</div>
	)
}

export default Nav

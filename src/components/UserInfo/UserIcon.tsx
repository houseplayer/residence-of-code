"use client"

import { routes } from "@/utils/enums"
import { getUserInitials } from "@/utils/getuserInitials"
import { UserProfile } from "@auth0/nextjs-auth0/client"
import Link from "next/link"

interface Props {
  user: UserProfile
}

const UserIcon = ({ user }: Props) => {
  return (
    <Link
      href={routes.user}
      className="w-[40px] h-[40px] text-white rounded-full inline-flex justify-center items-center overflow-hidden"
    >
      <img src={user.picture || undefined} alt={user.name || undefined} />
    </Link>
  )
}

export default UserIcon

"use client"

import { useUser } from "@auth0/nextjs-auth0/client"

const UserInfo = () => {
  const { user } = useUser()

  return (
    user && (
      <div className="flex justify-center flex-col w-72 m-auto mt-4 border-1 px-3 py-2">
        <p> {user.name}</p>
        <p> {user.nickname}</p>
        <p> {user.updated_at}</p>
      </div>
    )
  )
}

export default UserInfo

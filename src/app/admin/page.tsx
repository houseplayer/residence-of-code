import EmailForm from "@/components/EmailForm"
import SubscribersList from "@/components/Subscribers/SubscribersList"
import { getSubscribers } from "@/utils/getSubscribers"
import { routes, userRole } from "@/utils/enums"
import { redirect } from "next/navigation"
import { checkPermission } from "@/utils/checkPermission"
import { getSession } from "@auth0/nextjs-auth0"

const AdminPage = async () => {
  const session = await getSession()

  if (!checkPermission(session?.user, userRole.admin)) {
    redirect(routes.home)
  }

  const subscribers = await getSubscribers()

  return (
    <>
      <EmailForm className="w-72" />
      <SubscribersList subscribers={subscribers} />
    </>
  )
}

export default AdminPage

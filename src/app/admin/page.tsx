import { getSubscribers } from "@/utils/getSubscribers"
import Admin from "./Admin"

const AdminPage = async () => {
  const subscribers = await getSubscribers()

  return (
    <>
      <Admin subscribers={subscribers} />
    </>
  )
}

export default AdminPage

import { getSubscribers } from "@/utils/getSubscribers"
import AddSubscriberForm from "@/components/Subscribers/AddSubscriberForm"

const HomePage = async () => {
	const subscribers = await getSubscribers()

	return (
		<>
			<AddSubscriberForm subscribers={subscribers} />
		</>
	)
}

export default HomePage

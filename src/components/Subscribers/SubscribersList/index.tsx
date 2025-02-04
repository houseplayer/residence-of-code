"use client"

import { Subscriber } from "@/types"
import SubscribersListItem from "./SubscribersListItem"
import useOptimistic from "@/hooks/useOptimistic"

export interface Props {
	subscribers: Subscriber[]
}

const SubscribersList = ({ subscribers }: Props) => {
	const { optimisticData, setOptimisticData } = useOptimistic({
		data: subscribers,
	})

	if (!subscribers.length) return

	return (
		<div className="mb-4">
			<h1 className="text-center font-semibold">Subscribers</h1>
			<div className="items-center py-1 border-b-1 border-black hidden sm:flex">
				<p className="basis-1/3">created</p>
				<p className="basis-1/3">email</p>
				<p className="basis-1/3">name</p>
				<p className="basis-1/12"></p>
			</div>
			{optimisticData?.map((listElement: Record<string, any>) => (
				<SubscribersListItem
					key={listElement.id}
					listElement={listElement}
					setOptimisticData={setOptimisticData}
				/>
			))}
		</div>
	)
}

export default SubscribersList

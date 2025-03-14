import { Action } from "@/types"
import { experimental_useOptimistic } from "react"

interface Props {
	data: Record<string, any>[]
}

const useOptimistic = ({ data }: Props) => {
	const [optimisticData, setOptimisticData] = experimental_useOptimistic(
		data,
		(state, { action, item }: { action: Action; item: Record<string, any> }) => {
			switch (action) {
				case "ADD":
					return [item, ...state]
				case "DELETE":
					return state.filter(({ id }) => id !== item.id)
				default:
					return state
			}
		},
	)
	return { optimisticData, setOptimisticData }
}

export default useOptimistic

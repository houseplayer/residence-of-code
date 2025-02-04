import { FaTrashAlt } from "react-icons/fa"
import { KeyedMutator } from "swr"
import { deleteImageAction } from "../actions/imagesactions"

interface Props {
	id: string
	mutate: KeyedMutator<any>
}

const DeleteButton = ({ id, mutate }: Props) => {
	const handleDelete = async (id: string) => {
		await deleteImageAction(id)
		mutate()
	}

	return (
		<button onClick={() => handleDelete(id)}>
			<FaTrashAlt />
		</button>
	)
}

export default DeleteButton

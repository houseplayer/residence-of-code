import { FaTrashAlt } from "react-icons/fa"
import { KeyedMutator } from "swr"

interface Props {
  id: string
  mutate: KeyedMutator<any>
}

const DeleteButton = ({ id, mutate }: Props) => {
  const handleDelete = async (id: string) => {
    await fetch(`api/images/${id}`, {
      method: "DELETE",
    })
    mutate()
  }

  return (
    <button onClick={() => handleDelete(id)}>
      <FaTrashAlt />
    </button>
  )
}

export default DeleteButton

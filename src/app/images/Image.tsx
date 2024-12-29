import { KeyedMutator } from "swr"
import DeleteButton from "./DeleteButton"

interface Props {
  url: string
  id: string
  mutate: KeyedMutator<any>
}

const Image = ({ url, id, mutate }: Props) => {
  return (
    <div className="flex flex-col items-center mb-12">
      <img
        className="w-[300px] h-[420px] mb-2 border-2 border-black"
        src={url}
        alt="downloaded image"
      />
      <DeleteButton id={id} mutate={mutate} />
    </div>
  )
}

export default Image

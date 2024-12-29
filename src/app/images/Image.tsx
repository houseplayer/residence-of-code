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
        className="w-[260px] h-[347px] border-2 border-black mb-2"
        src={url}
        alt="downloaded image"
      />
      <DeleteButton id={id} mutate={mutate} />
    </div>
  )
}

export default Image

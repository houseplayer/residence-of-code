import { KeyedMutator } from "swr"
import DeleteButton from "./DeleteButton"
import { FaTrashAlt } from "react-icons/fa"

export interface Image {
  name: string
  id: string
  url: string
  createdAt: string
  updatedAt: string
}

interface Props {
  data: { images: Image[] }
  isLoading: boolean
  mutate: KeyedMutator<any>
}

const Images = ({ data, isLoading, mutate }: Props) => {
  if (isLoading)
    return (
      <div className="flex flex-col items-center">
        <div className="flex flex-col mx-2 items-center justify-center w-[300px] h-[420px] border-2 border-black mb-2">
          Loading ...
        </div>
        <FaTrashAlt className="mb-12" />
      </div>
    )

  const { images } = data

  const sortedImages = images.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1))

  return (
    <>
      {sortedImages.map(({ name, id, url }) => {
        return (
          <div className="flex flex-col items-center mb-12" key={name}>
            <img
              className="w-[300px] h-[420px] mb-2 border-2 border-black"
              src={url}
              alt="downloaded image"
            />
            <DeleteButton id={id} mutate={mutate} />
          </div>
        )
      })}
    </>
  )
}

export default Images

import { KeyedMutator } from "swr"
import DeleteButton from "./DeleteButton"

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
  if (isLoading) return <p>Loading...</p>

  const { images } = data

  const sortedImages = images.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1))

  return (
    <div className="flex flex-col items-center">
      {sortedImages.map(({ name, id, url }) => {
        return (
          <div className="flex flex-col mx-2 mb-12 items-center max-w-[300px]" key={name}>
            <img className="mb-2 border-2 border-black" src={url} alt="downloaded image" />
            <DeleteButton id={id} mutate={mutate} />
          </div>
        )
      })}
    </div>
  )
}

export default Images

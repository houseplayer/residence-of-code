import { KeyedMutator } from "swr"
import DeleteButton from "./DeleteButton"

interface Props {
  images: any
  isLoading: boolean
  mutate: KeyedMutator<any>
}

const Images = ({ images, isLoading, mutate }: Props) => {
  if (isLoading) return <p>Loading...</p>

  return (
    <div className="flex flex-col items-center">
      {images.images.map((image: any) => {
        return (
          <div
            className="flex flex-col mx-2 mb-12 items-center max-w-[480px] max-h-[640px]"
            key={image.name}
          >
            <img className="mb-2 border-2 border-black" src={image.url} alt="downloaded image" />
            <DeleteButton id={image.id} mutate={mutate} />
          </div>
        )
      })}
    </div>
  )
}

export default Images

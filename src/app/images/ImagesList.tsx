import ImageSkeleton from "./ImageSkeleton"
import Image from "./Image"
import { KeyedMutator } from "swr"

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

const ImagesList = ({ data, isLoading, mutate }: Props) => {
  if (isLoading) return <ImageSkeleton />

  const { images } = data

  const sortedImages = images.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1))

  return (
    <>
      {sortedImages.map(({ name, id, url }) => {
        return <Image key={name} id={id} url={url} mutate={mutate} />
      })}
    </>
  )
}

export default ImagesList

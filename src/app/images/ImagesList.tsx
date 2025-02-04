import Image from "./Image"
import { KeyedMutator } from "swr"
import Loader from "@/components/Loader"

export interface Image {
	name: string
	id: string
	url: string
	createdAt: string
	updatedAt: string
}

interface Props {
	images: Image[]
	isLoading: boolean
	mutate: KeyedMutator<any>
}

const ImagesList = ({ images, isLoading, mutate }: Props) => {
	if (isLoading) return <Loader />

	return (
		<>
			{images.map(({ name, id, url }) => {
				return <Image key={name} id={id} url={url} mutate={mutate} />
			})}
		</>
	)
}

export default ImagesList

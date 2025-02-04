"use client"

import useSWR from "swr"
import FileUploader from "./FileUploader"
import Images from "./ImagesList"
import { useState } from "react"
import Pagination from "@/components/Pagination"
import { Image } from "./ImagesList"

const Page = () => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json())
	const { data, isLoading, mutate } = useSWR("/api/images", fetcher)

	const [currentPage, setCurrentPage] = useState(1)

	const handlePageChange = (page: number) => {
		setCurrentPage(page)
	}

	const images: Image[] = data?.images || []
	const totalItems = images.length
	const itemsPerPage = 2
	const imagesChunk = images
		.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
		.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

	return (
		<>
			<Pagination
				totalItems={totalItems}
				itemsPerPage={itemsPerPage}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
			<FileUploader mutate={mutate} />
			<Images images={imagesChunk} isLoading={isLoading} mutate={mutate} />
			<Pagination
				totalItems={totalItems}
				itemsPerPage={itemsPerPage}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</>
	)
}

export default Page

"use client"

import useSWR from "swr"
import FileUploader from "./FileUploader"
import Images from "./Images"

const Page = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data: images, isLoading, mutate } = useSWR("/api/images", fetcher)

  return (
    <>
      <FileUploader mutate={mutate} />
      <Images images={images} isLoading={isLoading} mutate={mutate} />
    </>
  )
}

export default Page

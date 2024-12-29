"use client"

import useSWR from "swr"
import FileUploader from "./FileUploader"
import Images from "./ImagesList"

const Page = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, isLoading, mutate } = useSWR("/api/images", fetcher)

  return (
    <>
      <FileUploader mutate={mutate} />
      <Images data={data} isLoading={isLoading} mutate={mutate} />
    </>
  )
}

export default Page

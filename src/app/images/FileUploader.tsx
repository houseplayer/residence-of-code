import Button from "@/components/Button"
import React, { useRef, useState } from "react"
import { KeyedMutator } from "swr"

interface Props {
  mutate: KeyedMutator<any>
}

const ImageUploader = ({ mutate }: Props) => {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const formRef = useRef<HTMLFormElement>(null)

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0])
  }

  const handleUpload = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (!file) {
      setErrorMessage("Please select a file first.")
      return
    }

    setUploading(true)
    setErrorMessage("")

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("api/images", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to upload file.")
      }

      formRef.current?.reset()
      setFile(null)
      mutate()
      await response.json()
    } catch (error) {
      console.error("Upload error:", error)
      setErrorMessage("An error occurred while uploading the file.")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="flex flex-col items-center my-8 mx-auto">
      <form ref={formRef} className="flex flex-col items-center">
        <input
          className="mb-2 w-[210px]"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <Button
          onClick={handleUpload}
          disabled={uploading}
          label={uploading ? "Uploading..." : "Upload"}
        />
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  )
}

export default ImageUploader

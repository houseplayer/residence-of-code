import { FaTrashAlt } from "react-icons/fa"

const ImageSkeleton = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col mx-2 items-center justify-center w-[300px] h-[420px] border-2 border-black mb-2">
        Loading ...
      </div>
      <FaTrashAlt className="mb-12" />
    </div>
  )
}

export default ImageSkeleton

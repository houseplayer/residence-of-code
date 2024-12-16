import { Toaster } from "react-hot-toast"

const Toast = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        duration: 3000,
      }}
    />
  )
}

export default Toast

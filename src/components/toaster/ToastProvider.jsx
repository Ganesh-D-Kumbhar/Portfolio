import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      style={{
        top: "80px", // Position below navbar
        zIndex: "909090"
      }}
    />
  )
}

export default ToastProvider

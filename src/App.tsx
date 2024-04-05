import { RouterProvider } from "react-router-dom"
import router from "./routes/router"
import { useAppSelector } from "./store/hooks"

function App() {
    const { isAuthenticated } = useAppSelector((state) => state.auth)
    return (
      <RouterProvider router={router(isAuthenticated)} />
    )
}

export default App
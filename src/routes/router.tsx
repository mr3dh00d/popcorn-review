import Feed from "@/pages/Feed";
import Login from "@/pages/Account/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Feed />
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router;
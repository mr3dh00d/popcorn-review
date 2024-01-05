import Feed from "@/pages/Feed";
import Login from "@/pages/Account/Login";
import Register from "@/pages/Account/Register";
import Reviews from "@/pages/Reviews/Reviews";
import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

const router = createBrowserRouter([
    {
        path: routes.base,
        element: <Feed />
    },
    {
        path: routes.login,
        element: <Login />
    },
    {
        path: routes.register,
        element: <Register />
    },
    {
        path: routes.reviews.base,
        children: [
            {
                index: true,
                element: <Reviews.Index />
            },
            {
                path: routes.reviews.create,
                element: <Reviews.Create />
            },
            {
                path: routes.reviews.edit,
                element: <Reviews.Edit />
            },
            {
                path: routes.reviews.view,
                element: <Reviews.View />
            },
        ]
    },
])

export default router;
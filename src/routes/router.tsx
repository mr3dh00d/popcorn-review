import Feed from "@/pages/Feed"
import Login from "@/pages/Account/Login"
import Register from "@/pages/Account/Register"
import Reviews from "@/pages/Reviews/Reviews"
import { Navigate, createBrowserRouter } from "react-router-dom"
import { routes } from "./routes"

const router = (isAuthenticated : boolean) => {
    return createBrowserRouter([
        {
            path: routes.base,
            element: isAuthenticated ? <Navigate to={routes.feed}/> : <Navigate to={routes.login}/>
        },
        {
            path: routes.feed,
            element: isAuthenticated ? <Feed /> : <Navigate to={routes.login} />
        },
        {
            path: routes.login,
            element: !isAuthenticated ? <Login /> : <Navigate to={routes.feed} />
        },
        {
            path: routes.register,
            element: !isAuthenticated ? <Register /> : <Navigate to={routes.feed} />
        },
        {
            path: routes.reviews.base,
            element: isAuthenticated ? null : <Navigate to={routes.login} />,
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
}

export default router
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import NotFoundPage from "../Shared/NotFoundPage";
import AllBooks from "../pages/Allbook/AllBooks";
import SingleBook from "../components/SingleBook";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element:<Home/>,
            },
            {
                path: "/all-books",
                element: <AllBooks />,
            },
            {
                path: "/payments",
                element: <h1>All Payment History</h1>,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register/>,
            },
            {
                path: "/wishlist",
                element: <h1>Wishlist page</h1>,
            },
            {
                path: "/books/:id",
                element: <SingleBook />,
            }
        ],
    }
])
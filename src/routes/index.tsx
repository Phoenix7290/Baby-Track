import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from '../views/Home';
import Settings from '../views/Settings';
import DashBoard from "../views/DashBoard";
import NotFound from '../views/NotFound';
import SignIn from "../views/SingIn";
import SignUp from "../views/SignUp";
import PrivateRoute  from "./private";
import { AuthProvider } from '../context/Auth';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/signin",
        element: <PrivateRoute element={<SignIn />} />,
    },
    {
        path: "/signup",
        element: <PrivateRoute element={<SignUp />} />,
    },
    {
        path: "/settings",
        element: <Settings />,
    },
    {
        path: "/dashboard",
        element: <DashBoard />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

const routes = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    );
}

export default routes;
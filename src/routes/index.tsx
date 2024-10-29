import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from '../views/Home';
import Settings from '../views/Settings';
// import DashBoard from "../views/DashBoard";
import NotFound from '../views/NotFound';
import SignIn from "../views/SingIn";
import SignUp from "../views/SignUp";
import PrivateRoute  from "./private";
import { AuthProvider } from '../context/Auth';

const router = createBrowserRouter([
    {
        path: "/Baby-Track/",
        element: <Home />,
    },
    {
        path: "/Baby-Track/signin",
        element: <PrivateRoute element={<SignIn />} />,
    },
    {
        path: "/Baby-Track/signup",
        element: <PrivateRoute element={<SignUp />} />,
    },
    {
        path: "/Baby-Track/settings",
        element: <Settings />,
    },
    // {
    //     path: "/Baby-Track/dashboard",
    //     element: <DashBoard />,
    // },
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
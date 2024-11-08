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
import Form from "../views/Form";
import PrivateRoute from "./private";
import { AuthProvider } from '../context/Auth';

const router = createBrowserRouter([
    {
        path: "/Baby-Track/",
        element: <PrivateRoute element={<Home />} />, 
    },
    {
        path: "/Baby-Track/signin",
        element: <SignIn />, 
    },
    {
        path: "/Baby-Track/signup",
        element: <SignUp />, 
    },
    {
        path: "/Baby-Track/settings",
        element: <PrivateRoute element={<Settings />} />, 
    },
    {
        path: "/Baby-Track/dashboard",
        element: <PrivateRoute element={<DashBoard />} />, 
    },
    {
        path: "/Baby-Track/form",
        element: <PrivateRoute element={<Form />} />, 
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

const Routes = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default Routes;
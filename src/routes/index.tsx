import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import {
    Home,
    SignIn,
    SignUp,
    Settings,
    DashBoard,
    NotFound,
} from "../views";
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
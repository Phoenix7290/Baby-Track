import { useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../../context/Auth";

interface PrivateRouteProps {
    element: JSX.Element;
}

const PrivateRoute = ({ element }: PrivateRouteProps) => {
    const authContext = useContext(AuthContext);
    const location = useLocation();

    if (!authContext) {
        throw new Error('PrivateRoute must be used within an AuthProvider');
    }

    const { user } = authContext;

    if (!user) {
        return <Navigate to="/Baby-Track/signin" state={{ from: location }} />;
    }

    return element;
};

export default PrivateRoute;
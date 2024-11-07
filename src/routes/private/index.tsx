import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth/useAuth';
import { ReactElement } from 'react';

interface PrivateRouteProps {
    element: ReactElement;
}

const PrivateRoute = ({ element }: PrivateRouteProps) => {
    const { user } = useAuth();

    return user ? element : <Navigate to="/Baby-Track/signin" />;
};

export default PrivateRoute;

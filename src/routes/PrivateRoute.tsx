import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../hooks/hooks';

import ROUTES from './routes';

interface PrivateRouteProps {
    children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
    const { hasAuthenticated } = useAppSelector(
        (state) => state.authentication
    );

    // Redirects the user to the auth page if they are not currently logged in.
    if (!hasAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    // TODO: Make sure only user can only see their own statement pages

    // If logged in, the user is proceeds to the requested page.
    return children;
}

import { Navigate } from 'react-router-dom';

import ROUTES from './routes';

interface PrivateRouteProps {
    children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
    const authUser = true;

    // Redirects the user to the auth page if they are not currently logged in.
    if (!authUser) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    // TODO: Make sure only user can only see their own statement pages

    // If logged in, the user is proceeds to the requested page.
    return children;
}

import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
    const authUser = false;

    // Redirects the user to the auth page if they are not currently logged in.
    if (!authUser) {
        return <Navigate to="/auth" replace />;
    }

    // If logged in, the user is proceeds to the requested page.
    return children;
}

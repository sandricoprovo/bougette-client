import { Navigate } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { useEffect, useRef } from 'react';

import { updateAuthState } from './redux/slices/authenticationSlice';
import { useAppSelector, useAppDispatch } from './hooks/hooks';
import { VERIFY_TOKEN } from './apollo/queries';
import ROUTES from './routes/routes';

interface PrivateWrapperProps {
    children: JSX.Element;
}

export default function PrivateWrapper({ children }: PrivateWrapperProps) {
    // Checks in memory authentication from previous sign up or login.
    const { hasAuthenticated } = useAppSelector(
        (state) => state.authentication
    );
    const dispatch = useAppDispatch();
    const didAttemptVerification = useRef(false);

    // Verifies the cookie token.
    const [
        verifyToken,
        {
            loading,
            data: { verifyToken: { success: isValidToken } } = {
                verifyToken: { success: false },
            },
        },
    ] = useLazyQuery<{
        verifyToken: { success: boolean };
    }>(VERIFY_TOKEN, {
        fetchPolicy: 'network-only',
    });

    useEffect(() => {
        if (loading) return;

        if (!hasAuthenticated && !isValidToken) {
            // Performs a verification check on the auth token.
            didAttemptVerification.current = true;
            verifyToken();
        } else if (isValidToken) {
            // Updates auth state variable in store.
            const isVerified = didAttemptVerification.current && isValidToken;
            dispatch(updateAuthState(isVerified));
        }
    }, [loading, isValidToken]);

    // Renders a temp loading screen while the auth check runs.
    if (loading || (!hasAuthenticated && !didAttemptVerification.current)) {
        return <h1>Loading...</h1>;
    }

    return hasAuthenticated || isValidToken ? (
        children
    ) : (
        <Navigate to={ROUTES.LOGIN} replace />
    );
}

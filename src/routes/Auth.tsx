import styled from 'styled-components';
import { useLocation } from 'react-router';

import LoginForm from '../components/Forms/LogInForm';
import SignUpForm from '../components/Forms/SignUpForm';

import ROUTES from './routes';

const Container = styled.div``;

export default function Auth() {
    const location = useLocation();

    return (
        <Container>
            {location.pathname === ROUTES.LOGIN ? (
                <LoginForm />
            ) : (
                <SignUpForm />
            )}
        </Container>
    );
}

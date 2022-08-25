import styled from 'styled-components';

import SignInForm from '../components/Forms/SignIn/SignInForm';

const Container = styled.div``;

export default function Auth() {
    return (
        <Container>
            <SignInForm />
        </Container>
    );
}

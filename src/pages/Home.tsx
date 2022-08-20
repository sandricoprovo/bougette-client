import styled from 'styled-components';

import Hero from '../components/Hero';
import GetStarted from '../components/HomePage/GetStarted';
import { HeaderFont, Text } from '../components/Typography';
import { CTAButton, ButtonContainer, LogInButton } from '../components/Buttons';

const Container = styled.div`
    display: grid;
    align-items: flex-end;
`;

export default function Home() {
    return (
        <Container>
            <Hero>
                <HeaderFont tag="h2">
                    Welcome to <br /> Bougette
                </HeaderFont>
                <Text>
                    Here you store your money flows so you always know what
                    needs to go where.
                </Text>
            </Hero>
            <GetStarted>
                <ButtonContainer>
                    <CTAButton>Get Started</CTAButton>
                    <LogInButton>Log In</LogInButton>
                </ButtonContainer>
            </GetStarted>
        </Container>
    );
}

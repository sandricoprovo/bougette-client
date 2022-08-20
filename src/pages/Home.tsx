import styled from 'styled-components';

import Hero from '../components/Hero';
import GetStarted from '../components/HomePage/GetStarted';
import ButtonContainer from '../components/Buttons/Container';

const Container = styled.div`
    display: grid;
    align-items: flex-end;
`;

export default function Home() {
    return (
        <Container>
            <Hero>
                <h1>Welcome to Bougette</h1>
                <p>
                    Here you store your money flows so you always know what
                    needs to go where.
                </p>
            </Hero>
            <GetStarted>
                <ButtonContainer>
                    <button type="button">Get Started</button>
                    <button type="button">Log In</button>
                </ButtonContainer>
            </GetStarted>
        </Container>
    );
}

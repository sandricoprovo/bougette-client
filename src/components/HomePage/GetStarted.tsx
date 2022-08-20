import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 2rem;
`;

interface GetStartedProps {
    children: ReactNode;
}

export default function GetStarted({ children }: GetStartedProps) {
    return (
        <Container>
            <h2>Want to get worry free money tracking? Get started below.</h2>
            {children}
        </Container>
    );
}

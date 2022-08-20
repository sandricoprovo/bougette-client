import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
`;

interface HeroProps {
    children: ReactNode;
}

export default function Hero({ children }: HeroProps) {
    return <Container>{children}</Container>;
}

import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
`;

interface HeroProps {
    children: ReactNode;
}

export default function Hero({ children }: HeroProps) {
    return <Container>{children}</Container>;
}

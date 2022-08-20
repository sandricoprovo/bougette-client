import { ReactNode } from 'react';
import styled from 'styled-components';

import { HeaderFont } from '../Typography';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 2rem;
    font-family: var(--font-display);

    & > h2 {
        font-size: var(--font-size-lg);
    }
`;

interface GetStartedProps {
    children: ReactNode;
}

export default function GetStarted({ children }: GetStartedProps) {
    return (
        <Container>
            <HeaderFont tag="h5">
                Want to get worry free money tracking? Get started below.
            </HeaderFont>
            {children}
        </Container>
    );
}

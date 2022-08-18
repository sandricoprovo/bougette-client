import { ReactNode } from 'react';
import styled from 'styled-components';

const LayoutStyled = styled.main`
    border: 2px solid blue;
    min-height: 100vh;
    max-width: var(--max-page-width);

    display: grid;
    grid-template-rows: auto 1fr auto;
`;

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;

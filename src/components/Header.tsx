import { ReactNode } from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    border: 2px solid red;
`;

interface HeaderProps {
    children: ReactNode;
}

function Header({ children }: HeaderProps) {
    return <HeaderStyled>{children}</HeaderStyled>;
}

export default Header;

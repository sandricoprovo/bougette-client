import { ReactNode } from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
    border: 2px solid red;
`;

interface FooterProps {
    children: ReactNode;
}

function Footer({ children }: FooterProps) {
    return <FooterStyled>{children}</FooterStyled>;
}

export default Footer;

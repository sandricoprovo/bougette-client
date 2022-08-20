import { ReactNode } from 'react';
import styled from 'styled-components';

const TextStyled = styled.p`
    font-family: var(--font-body);
    font-size: var(--font-size-body);
    line-height: var(--font-body-lh);
`;

interface TextProps {
    children: ReactNode;
}

export default function Text({ children }: TextProps) {
    return <TextStyled>{children}</TextStyled>;
}

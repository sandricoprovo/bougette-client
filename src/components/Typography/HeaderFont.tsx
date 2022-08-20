import { ReactNode } from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    font-family: var(--font-display);
    font-size: var(--font-size-xxxl);
`;
const H2 = styled.h2`
    font-family: var(--font-display);
    font-size: var(--font-size-xxl);
`;
const H3 = styled.h3`
    font-family: var(--font-display);
    font-size: var(--font-size-xl);
`;
const H4 = styled.h4`
    font-family: var(--font-display);
    font-size: var(--font-size-lg);
`;
const H5 = styled.h5`
    font-family: var(--font-display);
    font-size: var(--font-size-med);
`;

interface HeaderProps {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    children: ReactNode;
}

interface HeaderMap {
    [key: string]: JSX.Element;
}

export default function HeaderFont({ tag, children }: HeaderProps) {
    const selectedHeader: HeaderMap = {
        h1: <H1>{children}</H1>,
        h2: <H2>{children}</H2>,
        h3: <H3>{children}</H3>,
        h4: <H4>{children}</H4>,
        h5: <H5>{children}</H5>,
    };

    return selectedHeader[`${tag}`];
}

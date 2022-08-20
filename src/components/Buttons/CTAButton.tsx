import { ReactNode } from 'react';
import styled from 'styled-components';

import BaseButton from './BaseButton';

const CTAButtonStyled = styled(BaseButton)`
    font-family: var(--font-body);
`;

interface CTAButtonProps {
    children: ReactNode;
}

export default function CTAButton({ children }: CTAButtonProps) {
    return <CTAButtonStyled type="button">{children}</CTAButtonStyled>;
}

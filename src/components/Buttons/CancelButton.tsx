import { ReactNode } from 'react';
import styled from 'styled-components';

import BaseButton from './BaseButton';

const CancelButtonStyled = styled(BaseButton)`
    font-family: var(--font-body);
    background-color: transparent;
`;

interface CancelButtonProps {
    children: ReactNode;
}

export default function CancelButton({ children }: CancelButtonProps) {
    return <CancelButtonStyled type="button">{children}</CancelButtonStyled>;
}

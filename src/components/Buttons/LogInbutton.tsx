import { ReactNode } from 'react';
import styled from 'styled-components';

import BaseButton from './BaseButton';

const LogInButtonStyled = styled(BaseButton)`
    font-family: var(--font-body);
`;

interface LogInButtonProps {
    children: ReactNode;
}

export default function LogInButton({ children }: LogInButtonProps) {
    return <LogInButtonStyled type="button">{children}</LogInButtonStyled>;
}

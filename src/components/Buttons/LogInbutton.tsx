import { ReactNode } from 'react';
import styled from 'styled-components';

import BaseButton from './BaseButton';

const LogInButtonStyled = styled(BaseButton)`
    font-family: var(--font-body);
`;

interface LogInButtonProps {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
}

export default function LogInButton({ children, type }: LogInButtonProps) {
    return (
        <LogInButtonStyled type={type ?? 'button'}>
            {children}
        </LogInButtonStyled>
    );
}

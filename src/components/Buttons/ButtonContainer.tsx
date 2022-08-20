import { ReactNode } from 'react';
import styled from 'styled-components';

const ButtonContainerStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

interface ButtonContainerProps {
    children: ReactNode;
}

export default function ButtonContainer({ children }: ButtonContainerProps) {
    return <ButtonContainerStyled>{children}</ButtonContainerStyled>;
}

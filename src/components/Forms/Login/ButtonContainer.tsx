import React from 'react';
import styled from 'styled-components';

const ButtonContainerStyled = styled.div`
    padding: 1rem 0;
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
`;

interface ButtonContainerProps {
    children: React.ReactNode;
}

export default function ButtonContainer({ children }: ButtonContainerProps) {
    return <ButtonContainerStyled>{children}</ButtonContainerStyled>;
}

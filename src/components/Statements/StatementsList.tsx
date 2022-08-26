import { ReactNode } from 'react';
import styled from 'styled-components';

const StatementsListStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
`;

interface StatementsListProps {
    children: ReactNode;
}

export default function StatementsList({ children }: StatementsListProps) {
    return <StatementsListStyled>{children}</StatementsListStyled>;
}

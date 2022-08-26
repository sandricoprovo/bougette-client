import { ReactNode } from 'react';
import styled from 'styled-components';

const LineItemListStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;

    & > div:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 1rem;
    }
`;

interface LineItemListProps {
    title: string;
    children: ReactNode;
}

export default function LineItemList({ title, children }: LineItemListProps) {
    return (
        <LineItemListStyled>
            <p>{title}</p>
            <div>{children}</div>
        </LineItemListStyled>
    );
}

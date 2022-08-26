import styled from 'styled-components';

const LineItemStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

interface LineItemProps {
    label: string;
    amount: number;
    type: string;
    isRecurring: boolean;
    depositDate?: number;
    withdrawDate?: number;
}

export default function LineItem({
    label,
    amount,
    type,
    isRecurring,
    depositDate,
    withdrawDate,
}: LineItemProps) {
    return (
        <LineItemStyled>
            <div>
                <h1>{label}</h1>
                <p>{type}</p>
                <p>{!isRecurring ? 'Non-Recurring' : 'Recurring'}</p>
            </div>
            <div>
                <p>{amount}</p>
                <p>Next On: {depositDate ?? withdrawDate ?? 'N/A'}</p>
            </div>
        </LineItemStyled>
    );
}

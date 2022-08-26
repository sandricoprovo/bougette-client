import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.5rem;

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

interface StatementHeaderProps {
    name: string;
    balance: number;
    totalIncome: number;
    totalExpenses: number;
}

export default function StatementHeader({
    name,
    balance = 0,
    totalExpenses = 0,
    totalIncome = 0,
}: StatementHeaderProps) {
    return (
        <Container>
            <h1>{name}</h1>
            <p>Balance: {balance}</p>
            <div>
                <p>Total Income: {totalIncome} </p>
                <p>Total Expenses: {totalExpenses} </p>
            </div>
        </Container>
    );
}

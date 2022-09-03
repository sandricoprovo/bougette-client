import styled from 'styled-components';

const Container = styled.div`
    border-bottom: 1px solid black;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;

    & > div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    & > div:nth-of-type(2) {
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
    createdOn: string;
}

export default function StatementHeader({
    name,
    balance = 0,
    totalExpenses = 0,
    totalIncome = 0,
    createdOn,
}: StatementHeaderProps) {
    return (
        <Container>
            <div>
                <h1>{name}</h1>
                <p>Created On: {createdOn}</p>
            </div>
            <p>Balance: {balance}</p>
            <div>
                <p>Total Income: {totalIncome} </p>
                <p>Total Expenses: {totalExpenses} </p>
            </div>
        </Container>
    );
}

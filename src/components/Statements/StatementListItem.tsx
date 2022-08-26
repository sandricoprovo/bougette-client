import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import ROUTES from '../../routes/routes';

const StatementsListItemStyled = styled.div`
    border: 2px solid black;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;

    & > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 0.5rem;
    }

    & > div:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
`;

interface StatementsListItemProps {
    label: string;
    statementId: string;
    createdOn: string;
    numOfIncomes: number;
    numOfExpenses: number;
    remainder: number;
}

export default function StatementsListItem({
    createdOn,
    numOfExpenses,
    numOfIncomes,
    label,
    statementId,
    remainder,
}: StatementsListItemProps) {
    const navigate = useNavigate();

    function handleStatementSelection() {
        // TODO: Use passed statementId as query param to single statement page
        navigate(`${ROUTES.STATEMENTS}/${statementId}`);
    }

    return (
        <StatementsListItemStyled onClick={handleStatementSelection}>
            <div>
                <h1>{label}</h1>
                <p>Remainder: {remainder}</p>
            </div>
            <div>
                <p>{numOfIncomes} Incomes</p>
                <p>{numOfExpenses} Expenses</p>
                <p>Created On: {createdOn}</p>
            </div>
        </StatementsListItemStyled>
    );
}

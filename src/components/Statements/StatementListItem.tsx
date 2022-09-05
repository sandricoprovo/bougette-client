import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';

import ROUTES from '../../routes/routes';
import { DeleteRecord } from '../Buttons';
import { DELETE_STATEMENT } from '../../apollo/mutations';
import { GET_STATEMENTS } from '../../apollo/queries';

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

    & > div:nth-child(1) > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
    const [deleteStatement, { data }] = useMutation<{
        deleteStatement: { succeeded: boolean };
    }>(DELETE_STATEMENT, {
        variables: { statementId },
        refetchQueries: [GET_STATEMENTS],
    });

    function handleStatementSelection() {
        // TODO: Use passed statementId as query param to single statement page
        navigate(`${ROUTES.STATEMENTS}/${statementId}`);
    }

    async function handleDeleteStatement() {
        try {
            // TODO: Show confirmation
            // TODO: Delete
            await deleteStatement();
        } catch (err) {
            // TODO: Notify user of error
            console.log(err);
        }
    }

    useEffect(() => {
        console.log(data?.deleteStatement.succeeded);
        // TODO: Show success modal
    }, [data]);

    return (
        <StatementsListItemStyled onClick={handleStatementSelection}>
            <div>
                <div>
                    <h1>{label}</h1>
                    <DeleteRecord onDeleteHandler={handleDeleteStatement} />
                </div>

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

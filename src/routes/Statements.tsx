import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import StatementsList from '../components/Statements/StatementsList';
import StatementsListItem from '../components/Statements/StatementListItem';
import { GET_STATEMENTS } from '../apollo/queries';
import { Statement } from '../types/Statement';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { toggleAddStatement } from '../redux/slices/uiSlice';
import CreateStatement from '../components/Features/CreateStatement';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & > div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default function Statements() {
    const {
        loading,
        data: { allStatements } = { allStatements: [] },
        error,
    } = useQuery<{ allStatements: Statement[] }>(GET_STATEMENTS);

    const { showAddStatementModal } = useAppSelector((state) => state.ui);
    const dispatch = useAppDispatch();

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error...</h1>;

    // TODO: Add empty list component.

    function toggleAddStatementForm() {
        dispatch(toggleAddStatement());
    }

    return (
        <Container>
            <div>
                <h1>Statements</h1>
                <button type="button" onClick={toggleAddStatementForm}>
                    Create Statement
                </button>
            </div>
            {showAddStatementModal && (
                <CreateStatement
                    toggleAddStatementForm={toggleAddStatementForm}
                />
            )}
            <StatementsList>
                {allStatements &&
                    allStatements.map((statement) => {
                        const { label, createdOn, expenses, incomes, id } =
                            statement;

                        // TODO: Reduce income & expense amounts to determine unallocated

                        return (
                            <StatementsListItem
                                key={id}
                                statementId={id}
                                label={label}
                                createdOn={createdOn}
                                remainder={0}
                                numOfExpenses={expenses.length ?? 0}
                                numOfIncomes={incomes.length ?? 0}
                            />
                        );
                    })}
            </StatementsList>
        </Container>
    );
}

import styled from 'styled-components';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';

import StatementHeader from '../components/Statements/StatementHeader';
import LineItem from '../components/Statements/LineItem';
import LineItemList from '../components/Statements/LineItemList';
import { GET_STATEMENT } from '../apollo/queries';
import { Statement as IStatement } from '../types/Statement';
import StatementEditor from '../components/Features/StatementEditor';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import {
    toggleStatementEditor,
    toggleLineItemCreator,
} from '../redux/slices/uiSlice';
import LineItemCreator from '../components/Features/LineItemCreator';

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
`;

export default function Statement() {
    const { showStatementEditor, lineItemCreator } = useAppSelector(
        (state) => state.ui
    );
    const dispatch = useAppDispatch();
    // Grabs statementId from url via react router.
    const { statementId } = useParams();
    const {
        loading,
        data: { getStatement: statement } = { getStatement: {} as IStatement },
        error,
    } = useQuery<{ getStatement: IStatement }>(GET_STATEMENT, {
        variables: { statementId },
    });

    function editStatement() {
        dispatch(toggleStatementEditor());
    }

    function createIncome() {
        dispatch(toggleLineItemCreator('income'));
    }

    function createExpense() {
        dispatch(toggleLineItemCreator('expense'));
    }

    function closeLineItemEditor() {
        dispatch(toggleLineItemCreator('expense'));
    }

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error...</h1>;

    const { createdOn, expenses, incomes, label: statementLabel } = statement;

    // TODO: Show something on empty screen if no incomes or expenses

    return (
        <Container>
            <StatementHeader
                name={statementLabel}
                createdOn={createdOn}
                balance={0}
                totalExpenses={0}
                totalIncome={0}
                showStatementEditor={editStatement}
            />
            {showStatementEditor && (
                <StatementEditor
                    statement={statement}
                    closeEditorHandler={editStatement}
                />
            )}
            {lineItemCreator.show && (
                <LineItemCreator
                    lineItemType={lineItemCreator.type}
                    closeEditorHandler={closeLineItemEditor}
                />
            )}
            <LineItemList title="Incomes">
                {incomes &&
                    incomes.map((income) => {
                        const {
                            label,
                            amount,
                            type,
                            isRecurring,
                            depositDate,
                            id,
                        } = income;

                        return (
                            <LineItem
                                key={id}
                                label={label}
                                amount={amount}
                                type={type}
                                isRecurring={isRecurring}
                                depositDate={depositDate}
                            />
                        );
                    })}
                <button type="button" onClick={createIncome}>
                    +
                </button>
            </LineItemList>
            <LineItemList title="Expenses">
                {expenses &&
                    expenses.map((expense) => {
                        const {
                            label,
                            amount,
                            type,
                            isRecurring,
                            withdrawDate,
                            id,
                        } = expense;

                        return (
                            <LineItem
                                key={id}
                                label={label}
                                amount={amount}
                                type={type}
                                isRecurring={isRecurring}
                                withdrawDate={withdrawDate}
                            />
                        );
                    })}
                <button type="button" onClick={createExpense}>
                    +
                </button>
            </LineItemList>
        </Container>
    );
}

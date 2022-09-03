import styled from 'styled-components';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';

import StatementHeader from '../components/Statements/StatementHeader';
import LineItem from '../components/Statements/LineItem';
import LineItemList from '../components/Statements/LineItemList';
import { GET_STATEMENT } from '../apollo/queries';
import { Statement as IStatement } from '../types/Statement';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
`;

export default function Statement() {
    // Grabs statementId from url via react router.
    const { statementId } = useParams();
    const {
        loading,
        data: { getStatement: statement } = { getStatement: {} as IStatement },
        error,
    } = useQuery<{ getStatement: IStatement }>(GET_STATEMENT, {
        variables: { statementId },
    });

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error...</h1>;

    const { createdOn, expenses, incomes, label: statementLabel } = statement;

    return (
        <Container>
            <StatementHeader
                name={statementLabel}
                createdOn={createdOn}
                balance={0}
                totalExpenses={0}
                totalIncome={0}
            />
            <LineItemList title="Money In">
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
            </LineItemList>
            <LineItemList title="Money Out">
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
            </LineItemList>
        </Container>
    );
}

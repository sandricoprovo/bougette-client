import styled from 'styled-components';
// import { useParams } from 'react-router';

import { mockStatement } from '../mock/mockStatement';
import StatementHeader from '../components/Statements/StatementHeader';
import LineItem from '../components/Statements/LineItem';
import LineItemList from '../components/Statements/LineItemList';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
`;

export default function Statement() {
    // TODO: Make graphql call to fetch statement
    // const { statementId } = useParams();

    return (
        <Container>
            <StatementHeader
                name="Statement Name"
                balance={0}
                totalExpenses={0}
                totalIncome={0}
            />
            <LineItemList title="Money In">
                {mockStatement.incomes.map((income) => {
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
                {mockStatement.expenses.map((expense) => {
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

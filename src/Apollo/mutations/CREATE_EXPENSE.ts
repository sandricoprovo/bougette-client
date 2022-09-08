import { gql } from '@apollo/client';

export const CREATE_EXPENSE = gql`
    mutation AddExpenses($statementId: String, $expenses: [ExpenseInput]) {
        addExpenses(statementId: $statementId, expenses: $expenses) {
            succeeded
        }
    }
`;

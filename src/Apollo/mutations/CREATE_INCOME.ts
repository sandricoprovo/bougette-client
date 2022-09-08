import { gql } from '@apollo/client';

export const CREATE_INCOME = gql`
    mutation AddIncomes($statementId: String, $incomes: [IncomeInput]) {
        addIncomes(statementId: $statementId, incomes: $incomes) {
            succeeded
        }
    }
`;

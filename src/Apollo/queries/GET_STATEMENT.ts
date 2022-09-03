import { gql } from '@apollo/client';

export const GET_STATEMENT = gql`
    query GetStatement($statementId: String) {
        getStatement(statementId: $statementId) {
            id
            label
            createdOn
            userId
            incomes {
                id
                label
                amount
                type
                depositDate
                isRecurring
                statementId
            }
            expenses {
                id
                label
                amount
                type
                withdrawDate
                isRecurring
                statementId
            }
        }
    }
`;

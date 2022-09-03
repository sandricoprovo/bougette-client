import { gql } from '@apollo/client';

export const GET_STATEMENTS = gql`
    query Statements {
        allStatements {
            id
            label
            userId
            createdOn
            incomes {
                label
                id
                amount
                statementId
                type
                depositDate
                isRecurring
            }
            expenses {
                id
                label
                amount
                statementId
                type
                withdrawDate
                isRecurring
            }
        }
    }
`;

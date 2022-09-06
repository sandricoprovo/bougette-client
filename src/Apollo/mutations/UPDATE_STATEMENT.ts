import { gql } from '@apollo/client';

export const UPDATE_STATEMENT = gql`
    mutation UpdateStatement($statementId: String, $updates: StatementInput) {
        updateStatement(statementId: $statementId, updates: $updates) {
            id
            label
        }
    }
`;

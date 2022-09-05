import { gql } from '@apollo/client';

export const DELETE_STATEMENT = gql`
    mutation DeleteStatement($statementId: String) {
        deleteStatement(statementId: $statementId) {
            succeeded
        }
    }
`;

import { gql } from '@apollo/client';

export const CREATE_STATEMENT = gql`
    mutation CreateStatement($label: String) {
        createStatement(label: $label) {
            id
            label
        }
    }
`;

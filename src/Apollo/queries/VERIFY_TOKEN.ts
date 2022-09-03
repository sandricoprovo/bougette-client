import { gql } from '@apollo/client';

export const VERIFY_TOKEN = gql`
    query VerifyToken($authToken: String) {
        verifyToken(authToken: $authToken) {
            success
        }
    }
`;

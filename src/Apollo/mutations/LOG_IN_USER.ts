import { gql } from '@apollo/client';

export const LOG_IN_USER = gql`
    mutation LoginUser($email: String, $password: String) {
        loginUser(email: $email, password: $password) {
            success
        }
    }
`;

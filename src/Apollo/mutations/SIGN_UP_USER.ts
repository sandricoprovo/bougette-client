import { gql } from '@apollo/client';

export const SIGN_UP_USER = gql`
    mutation SignUpUser($userInfo: UserInput) {
        signUpUser(userInfo: $userInfo) {
            success
        }
    }
`;

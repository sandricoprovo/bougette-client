import styled from 'styled-components';

const Container = styled.div``;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
const FormLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 1rem;
`;
// const FormInput;

export default function SignInForm() {
    return (
        <Container>
            <h1>Auth Page</h1>
            <Form>
                <FormLabel htmlFor="email">
                    Email
                    <input name="email" placeholder="Enter email" />
                </FormLabel>
                <FormLabel htmlFor="password">
                    Password
                    <input name="password" placeholder="Enter password" />
                </FormLabel>
                <div>
                    <button type="submit">Sign In</button>
                    <button type="button">Cancel</button>
                </div>
            </Form>
        </Container>
    );
}

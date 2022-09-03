import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useAppDispatch } from '../../hooks/hooks';
import { updateAuthState } from '../../redux/slices/authenticationSlice';
import { SignUpInput } from '../../types/SignUpInput';
import { SIGN_UP_USER } from '../../apollo/mutations';
import { LogInButton, CancelButton } from '../Buttons';
import { HeaderFont } from '../Typography';
import ROUTES from '../../routes/routes';

import Input from './Controls/Input';

const Container = styled.div`
    height: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    & > form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
`;

export default function SignUpForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpInput>();

    const [
        createNewUser,
        { loading, data = { signUpUser: { success: false } } },
    ] = useMutation<{
        signUpUser: { success: boolean };
    }>(SIGN_UP_USER);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    // Handles submitting form inputs to backend to create user account.
    function onSubmit(formInputs: SignUpInput) {
        // TODO: Sanitize imports
        createNewUser({ variables: { userInfo: formInputs } });
    }

    useEffect(() => {
        if (loading || !data) return;
        if (!data.signUpUser.success) return;
        // Navigates if user creation was successful.
        navigate(ROUTES.STATEMENTS);
        // Updates the login state in memory
        dispatch(updateAuthState(data.signUpUser.success));
    }, [data, loading]);

    return (
        <Container>
            <HeaderFont tag="h2">Sign Up Below</HeaderFont>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="First Name"
                    name="firstName"
                    placeholder="Enter first name"
                    register={register('firstName', { required: true })}
                    type="text"
                    error={errors.firstName}
                />
                <Input
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter Last name"
                    register={register('lastName', { required: true })}
                    type="text"
                    error={errors.lastName}
                />
                <Input
                    label="Email"
                    name="email"
                    placeholder="Enter Email"
                    register={register('email', { required: true })}
                    type="email"
                    error={errors.email}
                />
                <Input
                    label="Password"
                    name="password"
                    placeholder="Enter password"
                    register={register('password', { required: true })}
                    type="password"
                    error={errors.password}
                />
                <div>
                    <LogInButton type="submit">Log In</LogInButton>
                    <CancelButton>Cancel</CancelButton>
                </div>
            </form>
            {/* TODO: Add link to create account page */}
        </Container>
    );
}

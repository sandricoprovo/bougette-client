import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useAppDispatch } from '../../hooks/hooks';
import { updateAuthState } from '../../redux/slices/authenticationSlice';
import { LOG_IN_USER } from '../../apollo/mutations';
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

interface LogInCredentials {
    email: string;
    password: string;
}

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LogInCredentials>();

    const [
        logInUser,
        {
            loading,
            data = {
                loginUser: { success: false },
            },
        },
    ] = useMutation<{
        loginUser: { success: boolean };
    }>(LOG_IN_USER);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function onSubmit(credentials: LogInCredentials) {
        logInUser({ variables: { ...credentials } });
    }

    useEffect(() => {
        if (loading || !data) return;
        if (!data?.loginUser?.success) return;
        // Navigates if user creation was successful.
        navigate(ROUTES.STATEMENTS);
        // Updates the login state in memory
        dispatch(updateAuthState(data.loginUser.success));
    }, [data, loading]);

    return (
        <Container>
            <HeaderFont tag="h2">Login Below</HeaderFont>
            <form onSubmit={handleSubmit(onSubmit)}>
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

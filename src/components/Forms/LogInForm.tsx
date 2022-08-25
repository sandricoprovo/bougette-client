import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { LogInButton, CancelButton } from '../Buttons';
import { HeaderFont } from '../Typography';

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

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit(data: any) {
        console.log(data);
    }

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

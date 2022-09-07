import styled from 'styled-components';

const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    & > input {
        width: 100%;
        padding: 0.75rem 1rem;
    }
`;

interface InputProps {
    label: string;
    name: string;
    placeholder: string;
    register: any;
    error: string;
    type?: string;
}

export default function Input({
    label,
    name,
    type,
    placeholder,
    register,
    error,
}: InputProps) {
    return (
        <FormLabel htmlFor={name}>
            {label}
            <input
                type={type ? type.toLowerCase() : null}
                placeholder={placeholder}
                {...register}
            />
            {error && <span>{error}</span>}
        </FormLabel>
    );
}

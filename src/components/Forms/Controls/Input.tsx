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
    type: string;
    placeholder: string;
    register: any;
    error: any;
}

export default function Input({
    label,
    type,
    placeholder,
    register,
    error,
}: InputProps) {
    return (
        <FormLabel htmlFor={label.toLowerCase()}>
            {label}
            <input
                type={type.toLowerCase()}
                placeholder={placeholder}
                {...register}
            />
            {error && <span>Your {label.toLowerCase()} is required.</span>}
        </FormLabel>
    );
}

import styled from 'styled-components';

const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    & > select {
        width: 100%;
        padding: 0.75rem 0;
    }
`;

interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps {
    label: string;
    name: string;
    register: any;
    error: string;
    options: SelectOption[];
}

export default function Select({
    label,
    name,
    register,
    error,
    options,
}: SelectProps) {
    return (
        <FormLabel htmlFor={name}>
            {label}
            <select {...register}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <span>{error}</span>}
        </FormLabel>
    );
}

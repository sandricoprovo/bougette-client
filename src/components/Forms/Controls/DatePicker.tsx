import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    & > label {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.5rem;
    }

    & > label > input {
        width: 100%;
        padding: 0.5rem 0;
    }
`;

interface DatePickerProps {
    label: string;
    register: any;
    error: string;
}

export default function DatePicker({
    label,
    register,
    error,
}: DatePickerProps) {
    return (
        <Container>
            <label htmlFor={label}>
                {label}
                <input name={label} type="date" {...register} />
            </label>
            {error && <span>{error}</span>}
        </Container>
    );
}

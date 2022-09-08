import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    & > div {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;
        gap: 0.5rem;
    }

    & > div > label {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.5rem;
    }

    & > div > label > input {
        width: inherit;
        padding: 0.5rem;
    }
`;

interface DayPickerProps {
    label: string;
    register: any;
    error: string;
}

export default function DayPicker({ label, register, error }: DayPickerProps) {
    return (
        <Container>
            <div>
                <label htmlFor={label}>
                    {label}
                    <input
                        name={label}
                        type="number"
                        min={1}
                        max={31}
                        {...register}
                    />
                </label>
                day of each month.
            </div>
            {error && <span>{error}</span>}
        </Container>
    );
}

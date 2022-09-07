import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    & > div,
    & > div > label {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    & > div {
        width: 100%;
        gap: 2rem;
    }

    & > div > label {
        gap: 0.5rem;
    }
`;

interface RadioListOption {
    label: string;
    value: boolean;
}

interface RadioListProps {
    label: string;
    register: any;
    error: string;
    options: RadioListOption[];
}

export default function RadioList({
    label,
    register,
    error,
    options,
}: RadioListProps) {
    return (
        <Container>
            {label}
            <div>
                {options.map((option) => {
                    const { label: optionLabel, value } = option;
                    return (
                        <label key={optionLabel} htmlFor={optionLabel}>
                            {optionLabel}
                            <input
                                name={optionLabel}
                                type="radio"
                                {...register}
                                value={value}
                            />
                        </label>
                    );
                })}
            </div>
            {error && <span>{error}</span>}
        </Container>
    );
}

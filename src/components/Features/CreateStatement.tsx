import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

import { CREATE_STATEMENT } from '../../apollo/mutations';
import { GET_STATEMENTS } from '../../apollo/queries';

const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
`;

const Label = styled.label`
    width: 72%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;

    & > input {
        width: 100%;
        padding: 0.5rem 0.5rem;
    }
`;

interface CreateStatementProps {
    toggleAddStatementForm: () => void;
}

interface CreateStatementFormInputs {
    label: string;
}

export default function CreateStatement({
    toggleAddStatementForm,
}: CreateStatementProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateStatementFormInputs>();

    const [createStatement, { error: mutationErrors, data }] = useMutation<{
        createStatement: { id: string; label: string };
    }>(CREATE_STATEMENT, {
        refetchQueries: [GET_STATEMENTS],
    });

    function onSubmitHandler(newStatementData: CreateStatementFormInputs) {
        // Checks for form errors.
        if (errors.label) return;
        // TODO: Sanitize inputs
        createStatement({ variables: { label: newStatementData.label } });
    }

    useEffect(() => {
        // Handles closing the input field if the mutation ran successfully.
        if (mutationErrors?.message || !data?.createStatement?.id) return;
        toggleAddStatementForm();
    }, [mutationErrors, data]);

    return (
        <Container method="POST" onSubmit={handleSubmit(onSubmitHandler)}>
            <div>
                <Label htmlFor="name">
                    Add label to create statement.
                    <input
                        placeholder="Enter label here."
                        {...register('label', { required: true })}
                    />
                </Label>
                <button type="submit">Create</button>
            </div>
            {errors.label && <span>This field is required.</span>}
        </Container>
    );
}

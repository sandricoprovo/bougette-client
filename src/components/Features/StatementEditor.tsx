import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';

import { UPDATE_STATEMENT } from '../../apollo/mutations';
import { Statement, StatementInput } from '../../types/Statement';
import { GET_STATEMENT } from '../../apollo/queries';

const Form = styled.form`
    border: 2px solid red;
    background-color: white;
    position: absolute;
    width: 88%;
    padding: 1rem;
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;

    & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    & > label {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 0.5rem;
    }

    & > label > input {
        padding: 0.5rem;
        width: 100%;
    }
`;

interface StatementEditorProps {
    statement: Statement;
    closeEditorHandler: () => void;
}

export default function StatementEditor({
    statement,
    closeEditorHandler,
}: StatementEditorProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<StatementInput>({
        defaultValues: {
            label: statement?.label,
        },
    });

    const [updateStatement, { data, error }] = useMutation<{
        updateStatement: { id: string; label: string };
    }>(UPDATE_STATEMENT, {
        refetchQueries: [GET_STATEMENT],
    });

    function onSubmitHandler(statementUpdates: StatementInput) {
        const { id, label } = statement;
        if (!statementUpdates || statementUpdates.label === label) return;

        // TODO: Notify user of error
        if (errors.label) return;

        updateStatement({
            variables: { statementId: id, updates: statementUpdates },
        });
        closeEditorHandler();
    }

    useEffect(() => {
        if (!error?.message) return;
        // TODO: Notify user update error
        console.log(error);
    }, [data, error]);

    return (
        <Form method="POST" onSubmit={handleSubmit(onSubmitHandler)}>
            <div>
                <h1>Editor</h1>
                <button type="button" onClick={closeEditorHandler}>
                    X
                </button>
            </div>
            <label htmlFor="label">
                Label
                <input
                    placeholder="Enter label here"
                    {...register('label', {
                        required: 'This field is required.',
                    })}
                />
                {errors.label && <span>{errors.label.message}</span>}
            </label>
            <button type="submit">Submit</button>
        </Form>
    );
}

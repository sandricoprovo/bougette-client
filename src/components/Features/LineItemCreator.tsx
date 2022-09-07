import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';

import { IncomeExpenseTypes } from '../../constants/IncomeExpenseTypes';
import Input from '../Forms/Controls/Input';
import Select from '../Forms/Controls/Select';
import RadioList from '../Forms/Controls/RadioList';

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

interface LineItemCreatorProps {
    lineItemType: string;
    closeEditorHandler: () => void;
}

export default function LineItemCreator({
    lineItemType,
    closeEditorHandler,
}: LineItemCreatorProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmitHandler(formInputs: any) {
        console.log(formInputs);
    }

    // Generates selection options for select input.
    const selectOptions = Object.values(IncomeExpenseTypes).map((type) => ({
        label: type,
        value: type.toLowerCase(),
    }));

    const radioOptions = [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
    ];

    // TODOS:
    // - Create radio button group
    // - Create date picker

    return (
        <Form method="POST" onSubmit={handleSubmit(onSubmitHandler)}>
            <div>
                <h1>Add Line Item</h1>
                <button type="button" onClick={closeEditorHandler}>
                    X
                </button>
            </div>
            <Input
                label="Label"
                name="label"
                placeholder="Enter label"
                register={register('label', {
                    required: 'A label is required.',
                })}
                error={errors?.label?.message as string}
            />
            <Input
                label="Amount"
                name="amount"
                type="number"
                placeholder="Enter amount"
                register={register('amount', {
                    required: 'An amount is required.',
                })}
                error={errors?.amount?.message as string}
            />
            <Select
                options={selectOptions}
                label="Type"
                name="type"
                register={register('type', {
                    required: 'A type is required.',
                })}
                error={errors?.amount?.message as string}
            />
            <RadioList
                label="Is Recurring?"
                error={errors?.isRecurring?.message as string}
                options={radioOptions}
                register={register('isRecurring', {
                    required: 'Please make a selection',
                })}
            />
            <button type="submit">Submit</button>
        </Form>
    );
}

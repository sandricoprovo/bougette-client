import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ApolloError, useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { useParams } from 'react-router';

import { IncomeExpenseTypes } from '../../constants/IncomeExpenseTypes';
import Input from '../Forms/Controls/Input';
import Select from '../Forms/Controls/Select';
import RadioList from '../Forms/Controls/RadioList';
import { IncomeFormInput, IncomeInput } from '../../types/Income';
import { ExpenseInput } from '../../types/Expense';
import { CREATE_INCOME } from '../../apollo/mutations';
import { GET_STATEMENT } from '../../apollo/queries';
import DayPicker from '../Forms/Controls/DayPicker';

const Form = styled.form`
    border: 2px solid red;
    background-color: white;
    position: absolute;
    width: 88%;
    padding: 1rem;
    position: absolute;
    top: 4%;
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
    const { statementId } = useParams();

    const [addIncome, { loading, data, error }] = useMutation<{
        addIncomes: { succeeded: boolean };
    }>(CREATE_INCOME, {
        refetchQueries: [GET_STATEMENT],
    });

    function incomeSubmitHandler(formInputs: IncomeFormInput) {
        const { depositDate, isRecurring, amount, ...rest } = formInputs;
        // Shapes the deposit date into a number for submission.
        const newIncome: IncomeInput = {
            ...rest,
            depositDate: parseInt(depositDate || '1'),
            amount: parseInt(amount || '0'),
            isRecurring: isRecurring === 'true',
        };

        console.log(statementId, newIncome);
        addIncome({
            variables: {
                statementId,
                incomes: [newIncome],
            },
        }).catch((err: ApolloError) => console.log(err));
    }

    function expenseSubmitHandler(formInputs: ExpenseInput) {}

    const submitHandler =
        lineItemType === 'income' ? incomeSubmitHandler : expenseSubmitHandler;

    // Generates selection options for select input.
    const selectOptions = Object.values(IncomeExpenseTypes).map((type) => ({
        label: type,
        value: type.toLowerCase(),
    }));

    const radioOptions = [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
    ];

    const dateType = lineItemType === 'income' ? 'depositDate' : 'withdrawDate';

    return (
        <Form onSubmit={handleSubmit(submitHandler)}>
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
            <DayPicker
                label="Occurrence Date"
                error={errors?.[dateType]?.message as string}
                register={register(dateType, {
                    required: 'Please pick a day of the month',
                })}
            />
            <button type="submit">Submit</button>
        </Form>
    );
}

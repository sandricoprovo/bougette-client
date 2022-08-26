import { Statement } from '../types/Statement';

const mockIncome = {
    id: '04823',
    label: 'Paycheck',
    amount: 3000,
    type: 'employment',
    depositDate: 93843094,
    isRecurring: true,
    statementId: '878979878',
};

const mockExpense = {
    id: '423984',
    label: 'Car Payment',
    amount: 200,
    type: 'bills',
    withdrawDate: 48209348,
    isRecurring: true,
    statementId: '878979878',
};

const mockStatement: Statement = {
    id: '1234',
    label: 'Monthly Budget',
    createdOn: '3782739287321',
    userId: '21902190',
    incomes: [mockIncome, mockIncome, mockIncome],
    expenses: [mockExpense, mockExpense, mockExpense],
};

export { mockStatement, mockIncome, mockExpense };

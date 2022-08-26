import { Income } from './Income';
import { Expense } from './Expense';

export interface Statement {
    id: string;
    label: string;
    createdOn: string;
    userId: string;
    incomes: Income[];
    expenses: Expense[];
}

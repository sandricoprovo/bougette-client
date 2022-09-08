export interface Expense {
    id: string;
    statementId: string;
    label: string;
    amount: number;
    type: string;
    isRecurring: boolean;
    withdrawDate: number;
}

export interface ExpenseFormInput {
    label?: string;
    amount?: string;
    type?: string;
    withdrawDate?: string;
    isRecurring?: string;
}

export interface ExpenseInput {
    label?: string;
    amount?: number;
    type?: string;
    withdrawDate?: number;
    isRecurring?: boolean;
}

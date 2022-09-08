export interface Expense {
    id: string;
    statementId: string;
    label: string;
    amount: number;
    type: string;
    isRecurring: boolean;
    withdrawDate: number;
}

export interface ExpenseInput {
    label?: string;
    amount?: number;
    type?: string;
    withdrawDate?: number;
    isRecurring?: boolean;
}

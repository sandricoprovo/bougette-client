export interface Income {
    id: string;
    statementId: string;
    label: string;
    amount: number;
    type: string;
    isRecurring: boolean;
    depositDate: number;
}

export interface IncomeInput {
    label?: string;
    amount?: number;
    type?: string;
    depositDate?: number;
    isRecurring?: boolean;
}

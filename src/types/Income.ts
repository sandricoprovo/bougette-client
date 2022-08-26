export interface Income {
    id: string;
    statementId: string;
    label: string;
    amount: number;
    type: string;
    isRecurring: boolean;
    depositDate: number;
}

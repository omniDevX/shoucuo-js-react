export type TransactionType = {
    id: number;
    amount: number;
    description: string;
    status: 'pending' | 'completed' | 'failed' | 'paid';
};

export type TransactionProps = {
  transaction: TransactionType;
};
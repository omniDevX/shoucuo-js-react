// src/data/array.ts
import type { TransactionType } from '../types/transaction';

// type Transaction = {
//     id: number;
//     amount: number;
//     description: string;
//     status: 'pending' | 'completed' | 'failed' |'paid';
// };


export const transactions_array: TransactionType[] = [
    { id: 1, description: "AWS Invoice", amount: 320, status: "paid" },
    { id: 2, description: "Stripe Fees", amount: 58, status: "pending" },
    { id: 3, description: "Cloud Storage", amount: 120, status: "paid" },
];


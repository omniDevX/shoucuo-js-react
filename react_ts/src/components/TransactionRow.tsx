import type { TransactionProps } from '../types/transaction';

export function TransactionRow({ transaction }: TransactionProps) {
    return (
        <div>
            {transaction.description} — ${transaction.amount} — {transaction.status}
        </div>
    );
}
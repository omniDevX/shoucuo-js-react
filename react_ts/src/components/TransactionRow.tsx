import type { TransactionProps } from '../types/transaction';

export function TransactionRow_noclick({ transaction }: TransactionProps) {
    return (
        <div>
            {transaction.description} — ${transaction.amount} — {transaction.status}
        </div>
    );
}



export function TransactionRow({ transaction, onMarkPaid }: TransactionProps) {
    return (
        <div onClick={() => onMarkPaid(transaction.id)}>
            {transaction.description} — ${transaction.amount} — {transaction.status}
        </div>
    );
}
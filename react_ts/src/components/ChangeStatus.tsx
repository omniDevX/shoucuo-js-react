// src/components/ArrayList.tsx
import { useState } from 'react';
import { transactions_array } from '../data/transaction_array';
import { TransactionRow } from './TransactionRow';
import type { TransactionType } from '../types/transaction';


export function ChangeStatus() {
    const [transactionsState, setTransactionsState] = useState<TransactionType[]>(transactions_array);

    const markAsPaid = (id: number) => {
        setTransactionsState((prev) =>
            prev.map((t) =>
                t.id === id ? { ...t, status: "paid" } : t
            )
        );
    };

    const pendingTotal = transactionsState
        .filter((t) => t.status === "paid")
        .reduce((sum, t) => sum + t.amount, 0);

    return (
        <>
            <h4>Transactions Pending -- Complete</h4>
            <h2>Pending Total: ${pendingTotal}</h2>

            {transactionsState.map((t) => (
                <TransactionRow
                    key={t.id}
                    transaction={t}
                    onMarkPaid={markAsPaid}
                />
            ))}
        </>
    );
}
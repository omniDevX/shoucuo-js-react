// src/components/ArrayList.tsx
import { useState } from 'react';
import { transactions_array } from '../data/transaction_array';
import { TransactionRow } from './TransactionRow';

export function ArrayListRowComponent() {
    const [filter, setFilter] = useState<"all" | "pending">("all");

    const filteredTransactions = transactions_array.filter(t => {
        if (filter === "pending") {
            return t.status === "pending";
        }
        return true;
    });

    return (
        <>
            <h3>Transactions Row Component</h3>
            <div>
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("pending")}>Pending</button>
            </div>

            {filteredTransactions.map((t) => (
                <TransactionRow key={t.id} transaction={t} />
            ))}
        </>
    );
}
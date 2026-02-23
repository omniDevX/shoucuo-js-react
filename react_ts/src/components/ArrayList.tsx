// src/components/ArrayList.tsx
import { useState } from 'react';
import { transactions_array } from '../data/transaction_array';

export function ArrayList() {
    const [filter, setFilter] = useState<"all" | "pending">("all");
    
    const filteredTransactions = transactions_array.filter(t => {
        if (filter === "pending") {
            return t.status === "pending";
        }
        return true;
    });

    return (
        <>
            <h3>Transactions from Array</h3>
            <div>
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("pending")}>Pending</button>
            </div>
            {filteredTransactions.map((t) => (
                <div key={t.id}>
                    {t.id} - {t.amount} - {t.description} - {t.status}
                </div>
            ))}
        </>
    );
}
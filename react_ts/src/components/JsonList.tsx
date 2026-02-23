// src/components/JsonList.tsx
import type { TransactionType } from '../types/transaction';
import transactions_json from '../data/transactions_json.json';

export function JsonList() {
    return (
        <>
            <h3>Transactions from JSON</h3>
            {(transactions_json as TransactionType[]).map((t) => (
                <div key={t.id}>
                    {t.id} - {t.amount} - {t.description} - {t.status}
                </div>
            ))}
        </>
    );
}
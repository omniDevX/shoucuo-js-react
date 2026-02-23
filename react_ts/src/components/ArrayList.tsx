// src/components/ArrayList.tsx
import { transactions_array } from '../data/transaction_array';

export function ArrayList() {
    return (
        <>
            <h3>Transactions from Array</h3>
            {transactions_array.map((t) => (
                <div key={t.id}>
                    {t.id} - {t.amount} - {t.description} - {t.status}
                </div>
            ))}
        </>
    );
}
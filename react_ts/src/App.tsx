import React from 'react';
import type { TransactionType } from './types/transaction';
import { transactions_array } from './data/transaction_array';

import transactions_json from './data/transactions_json.json';

// const transactions = transactions_json as TransactionType[];

function App() {
    return (
        <>
            <h3>Transactions from Array</h3>

            {transactions_array.map((t) => (
                <div key={t.id}>
                    {t.id} -  {t.amount}-   {t.description}-    {t.status}
                </div >
            ))}
            
            <h3>Transactions from JSON</h3>

            {(transactions_json as TransactionType[]).map((t) => (
                <div key={t.id}>
                    {t.id} - {t.amount} - {t.description} - {t.status}
                </div>
            ))}
        </>
    );
}

export default App;
// src/components/ArrayList.tsx
import { useState, useEffect } from 'react';
import { TransactionRow } from './TransactionRow';
import type { TransactionType } from '../types/transaction';


export function Rest() {
    const [transactionsState, setTransactionsState] = useState<TransactionType[]>([]);
    

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

    useEffect(() => {
        const loadInvoices = async () => {
            const res = await fetch("https://t4app.fastapicloud.dev/invoice");
            const data = await res.json();

            const normalized: TransactionType[] = data.map((item: TransactionType) => ({
                ...item,
                amount: Number(item.amount),
            }));

            setTransactionsState(normalized);
        };

        loadInvoices();
    }, []);

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


















    // useEffect(() => {
    //     fetch("https://t4app.fastapicloud.dev/invoice")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             // normalize API data
    //             const normalized: TransactionType[] = data.map((item: TransactionType) => ({
    //                 ...item,
    //                 amount: Number(item.amount),
    //             }));

    //             setTransactionsState(normalized);
    //         });
    // }, []);


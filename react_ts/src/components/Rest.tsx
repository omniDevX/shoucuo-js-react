// src/components/ArrayList.tsx
import { useState, useEffect, useMemo, useCallback } from 'react';
import { TransactionRow } from './TransactionRow';
import { config } from '../config';
import type { TransactionType } from '../types/transaction';

const API_URL = config.api.baseUrl;

export function Rest() {
    const [transactionsState, setTransactionsState] = useState<TransactionType[]>([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null);

    
    const markAsPaid = useCallback((id: number) => {
        setTransactionsState((prev) =>
            prev.map((t) =>
                t.id === id ? { ...t, status: "paid" } : t
            )
        );
    }, []);  // 空依赖，函数永远不会变// 2. 用 useCallback 缓存函数


    const pendingTotal = useMemo(() => {
        return transactionsState
            .filter((t) => t.status === "paid")
            .reduce((sum, t) => sum + t.amount, 0);
    }, [transactionsState]);  // 只有 transactionsState 变化时才重新计算// 1. 用 useMemo 缓存计算结果




    useEffect(() => {
        const loadInvoices = async () => {
            try {
                setLoading(true)
                const res = await fetch("https://t4app.fastapicloud.dev/invoice");

                if (!res.ok) { throw new Error(`failed: ${res.status}`) }

                const data = await res.json();

                const normalized: TransactionType[] = data.map((item: TransactionType) => ({
                    ...item,
                    amount: Number(item.amount),
                }));

                setTransactionsState(normalized);
            } catch (e) {
                setError(e instanceof Error ? e.message : "Unknown error")
            } finally {
                setLoading(false)
            }
        };

        loadInvoices();
    }, []);

    if (loading) {
        return <div style={{ padding: '20px' }}>⏳ Loading transactions...</div>;
    }

    if (error) {
        return (
            <div style={{ padding: '20px', color: 'red' }}>
                <p>what?: {error}</p>
                <button onClick={() => window.location.reload()}>
                    Retry
                </button>
            </div>
        );
    }

    if (transactionsState.length === 0) {
        return <div>No transactions</div>;
    }

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


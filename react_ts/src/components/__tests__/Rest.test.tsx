// src/components/__tests__/Rest.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { Rest } from '../Rest';
import { vi } from 'vitest';

describe('Rest Component', () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    test('displays loading state', () => {
        vi.mocked(fetch).mockImplementationOnce(() => new Promise(() => {}));
        render(<Rest />);
        expect(screen.getByText(/loading transactions/i)).toBeInTheDocument();
    });

    test('successfully loads data', async () => {
        const mockData = [
            { id: 1, amount: 100, status: 'pending', description: 'Test 1' },
        ];

        vi.mocked(fetch).mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        } as Response);

        render(<Rest />);

        await waitFor(() => {
            expect(screen.getByText(/Test 1/i)).toBeInTheDocument();
        });
    });
});
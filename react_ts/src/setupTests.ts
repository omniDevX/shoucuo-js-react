// src/setupTests.ts
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// 全局 mock fetch
globalThis.fetch = vi.fn();
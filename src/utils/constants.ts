export type EscrowStatus = 'Initialized' | 'Funded' | 'Disputed' | 'Resolved';

export interface Escrow {
    id: string;
title: string;
buyer: string;
seller: string;
arbiter: string;
token: string;
amount: number;
status: EscrowStatus;
}

export const STATUS_COLORS = {
Initialized: 'bg-slate-100 text-slate-700 border-slate-200',
Funded: 'bg-blue-50 text-blue-700 border-blue-200',
Disputed: 'bg-red-50 text-red-700 border-red-200',
Resolved: 'bg-emerald-50 text-emerald-700 border-emerald-200'
};
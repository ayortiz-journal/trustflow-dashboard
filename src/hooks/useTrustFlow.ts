import { useState } from 'react';
import { Escrow } from '@/utils/constants';

// Mocking the @trustflow/sdk
export const useTrustFlow = () => {
const [isLoading, setIsLoading] = useState(false);

// Mock Escrow Data
const fetchEscrows = async (): Promise<Escrow[]> => {
setIsLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setIsLoading(false);
    return [
      {
        id: '1', title: 'Q3 Software Audit', buyer: 'G_MY_WALLET...', seller: 'G_VENDOR...', arbiter: 'G_ARBITER...',
        token: 'USDC', amount: 15000, status: 'Funded'
      },
      {
        id: '2', title: 'Freight Shipment #88', buyer: 'G_CLIENT...', seller: 'G_MY_WALLET...', arbiter: 'G_ARBITER...',
        token: 'USDC', amount: 4200, status: 'Disputed'
      }
    ];
  };

  const executeAction = async (action: string, payload: any) => {
    // TODO: integrate Soroban transaction simulation before broadcasting
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1500)); // Simulate RPC wait
    setIsLoading(false);
    return "tx_hash_mock_123";
  };

  return { fetchEscrows, executeAction, isLoading };
};
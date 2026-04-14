import { useEffect, useState } from 'react';
import EscrowCard from './EscrowCard';
import { useTrustFlow } from '@/hooks/useTrustFlow';
import { Escrow } from '@/utils/constants';
import { useWallet } from '@/hooks/useWallet';

export default function EscrowList() {
  const { fetchEscrows, isLoading } = useTrustFlow();
  const { address } = useWallet();
  const [escrows, setEscrows] = useState<Escrow[]>([]);

  // TODO: implement pagination for the EscrowList component
  useEffect(() => {
    fetchEscrows().then(setEscrows);
  }, []);

  if (isLoading) return <div className="text-slate-500">Loading escrows...</div>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {escrows.map(e => (
        <EscrowCard key={e.id} escrow={e} userAddress={address} />
      ))}
      {escrows.length === 0 && <p className="text-slate-500">No active escrows found.</p>}
    </div>
  );
}
import { useState } from 'react';
import Head from 'next/head';
import EscrowList from '@/components/EscrowList';
import CreateEscrowModal from '@/components/CreateEscrowModal';
import { useWallet } from '@/hooks/useWallet';

export default function Dashboard() {
  const { address } = useWallet();
  const [showCreate, setShowCreate] = useState(false);

  if (!address) {
    return <div className="text-center py-20 font-medium text-slate-500">Please connect your Freighter wallet to view your escrows.</div>;
  }

  return (
    <>
      <Head><title>Dashboard | TrustFlow</title></Head>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-trustflow-navy">Active Agreements</h1>
        <button onClick={() => setShowCreate(true)} className="bg-trustflow-blue hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold shadow-sm transition">
          + New Escrow
        </button>
      </div>

      <EscrowList />
      {showCreate && <CreateEscrowModal onClose={() => setShowCreate(false)} />}
    </>
  );
}
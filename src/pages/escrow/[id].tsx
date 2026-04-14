import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';
import { useWallet } from '@/hooks/useWallet';
import ActionPanel from '@/components/ActionPanel';
import DisputeModal from '@/components/DisputeModal';
import { STATUS_COLORS } from '@/utils/constants';

export default function EscrowDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { address } = useWallet();
  const [isDisputing, setIsDisputing] = useState(false);

  // Mock fetching single escrow based on ID
  const escrow = {
    id: id as string, title: 'Q3 Software Audit', buyer: 'G_BUYER_ADDRESS', seller: 'G_SELLER_ADDRESS', arbiter: 'G_ARBITER_ADDRESS',
    token: 'USDC', amount: 15000, status: 'Funded' as any
  };

  return (
    <>
      <Head><title>Escrow #{id} | TrustFlow</title></Head>
      <div className="mb-6 flex items-center space-x-4">
        <button onClick={() => router.push('/dashboard')} className="text-slate-500 hover:text-trustflow-blue font-medium">← Back</button>
        <h1 className="text-2xl font-bold text-trustflow-navy">Escrow #{id}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Detail Panel */}
        <div className="col-span-2 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-3xl font-bold text-slate-900">{escrow.title}</h2>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${STATUS_COLORS[escrow.status]}`}>
              {escrow.status}
            </span>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
              <div><p className="text-xs text-slate-500 font-semibold uppercase">Amount</p><p className="text-xl font-bold">{escrow.amount} {escrow.token}</p></div>
              <div><p className="text-xs text-slate-500 font-semibold uppercase">Platform</p><p className="text-lg font-medium">Stellar (Soroban)</p></div>
            </div>

            <div className="space-y-4">
              <div><p className="text-xs text-slate-500 font-semibold uppercase">Buyer</p><p className="font-mono text-sm bg-slate-100 p-2 rounded truncate">{escrow.buyer}</p></div>
              <div><p className="text-xs text-slate-500 font-semibold uppercase">Seller</p><p className="font-mono text-sm bg-slate-100 p-2 rounded truncate">{escrow.seller}</p></div>
              <div><p className="text-xs text-slate-500 font-semibold uppercase">Arbiter</p><p className="font-mono text-sm bg-slate-100 p-2 rounded truncate">{escrow.arbiter}</p></div>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="col-span-1">
          <ActionPanel escrow={escrow} userAddress={address} onRaiseDispute={() => setIsDisputing(true)} />
        </div>
      </div>

      {isDisputing && <DisputeModal escrowId={id as string} onClose={() => setIsDisputing(false)} />}
    </>
  );
}
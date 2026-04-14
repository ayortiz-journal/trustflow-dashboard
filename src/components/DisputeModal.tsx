import { useState } from 'react';
import { useTrustFlow } from '@/hooks/useTrustFlow';

export default function DisputeModal({ escrowId, onClose }: { escrowId: string, onClose: () => void }) {
  const { executeAction, isLoading } = useTrustFlow();
  const [reason, setReason] = useState('');

  const handleSubmit = async () => {
    await executeAction('dispute', { escrowId, reason });
    alert('Dispute raised. Arbiter notified.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border border-slate-200">
        <h2 className="text-xl font-bold text-red-600 mb-4">Raise a Dispute</h2>
        <p className="text-sm text-slate-600 mb-6">This will freeze the escrow funds. The Arbiter will review the case.</p>

        <textarea
          className="w-full border border-slate-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 outline-none h-32 mb-6"
          placeholder="Explain the breach of terms..."
          onChange={e => setReason(e.target.value)}
        ></textarea>

        <div className="flex space-x-3">
          <button onClick={onClose} className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-md font-semibold hover:bg-slate-200 transition">Cancel</button>
          <button onClick={handleSubmit} disabled={isLoading || !reason} className="flex-1 bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition disabled:opacity-50">
            {isLoading ? 'Locking...' : 'Confirm Dispute'}
          </button>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { useTrustFlow } from '@/hooks/useTrustFlow';

export default function CreateEscrowModal({ onClose }: { onClose: () => void }) {
  const { executeAction, isLoading } = useTrustFlow();
  const [formData, setFormData] = useState({ title: '', seller: '', arbiter: '', amount: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: add form validation to prevent the Buyer, Seller, and Arbiter from being the same Stellar address
    await executeAction('initialize', formData);
    alert('Escrow Created successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg border border-slate-200">
        <h2 className="text-2xl font-bold text-trustflow-navy mb-6">Create Escrow Agreement</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Project / Invoice Title</label>
            <input required type="text" className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-trustflow-blue outline-none" onChange={e => setFormData({...formData, title: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Seller Public Key</label>
            <input required type="text" className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-trustflow-blue outline-none" placeholder="G..." onChange={e => setFormData({...formData, seller: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Arbiter Public Key</label>
            <input required type="text" className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-trustflow-blue outline-none" placeholder="G..." onChange={e => setFormData({...formData, arbiter: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Amount (USDC)</label>
            <input required type="number" className="w-full border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-trustflow-blue outline-none" placeholder="0.00" onChange={e => setFormData({...formData, amount: e.target.value})} />
          </div>

          <div className="flex space-x-3 mt-8">
            <button type="button" onClick={onClose} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-md font-semibold transition">Cancel</button>
            <button type="submit" disabled={isLoading} className="flex-1 bg-trustflow-blue hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition disabled:opacity-50">
              {isLoading ? 'Processing...' : 'Initialize'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
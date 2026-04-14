import { Escrow } from '@/utils/constants';
import { useTrustFlow } from '@/hooks/useTrustFlow';

interface Props {
  escrow: Escrow;
  userAddress: string | null;
  onRaiseDispute: () => void;
}

export default function ActionPanel({ escrow, userAddress, onRaiseDispute }: Props) {
  const { executeAction, isLoading } = useTrustFlow();

  const isBuyer = userAddress === escrow.buyer;
  const isSeller = userAddress === escrow.seller;
  const isArbiter = userAddress === escrow.arbiter;

  const handleAction = async (action: string) => {
    // TODO: add email/telegram webhook notifications for status changes
    await executeAction(action, { escrowId: escrow.id });
    alert(`Action ${action} executed.`);
  };

  if (escrow.status === 'Resolved') {
    return <div className="bg-emerald-50 text-emerald-700 p-4 rounded-lg font-medium">This escrow has been finalized and resolved.</div>;
  }

  return (
    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
      <h3 className="font-semibold text-lg mb-4">Required Actions</h3>
      <div className="flex flex-col space-y-3">

        {/* Buyer Actions */}
        {isBuyer && escrow.status === 'Initialized' && (
          <button onClick={() => handleAction('fund')} disabled={isLoading} className="bg-trustflow-blue text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            Fund Escrow ({escrow.amount} {escrow.token})
          </button>
        )}
        {isBuyer && escrow.status === 'Funded' && (
          <button onClick={() => handleAction('approve')} disabled={isLoading} className="bg-emerald-600 text-white py-3 rounded-md font-semibold hover:bg-emerald-700 transition">
            Approve Work & Release Funds
          </button>
        )}

        {/* Dispute Actions (Buyer or Seller) */}
        {(isBuyer || isSeller) && escrow.status === 'Funded' && (
          <button onClick={onRaiseDispute} className="bg-white border border-red-200 text-red-600 py-3 rounded-md font-semibold hover:bg-red-50 transition">
            Raise Dispute
          </button>
        )}

        {/* Arbiter Actions */}
        {isArbiter && escrow.status === 'Disputed' && (
          <div className="flex space-x-3">
            <button onClick={() => handleAction('resolve_seller')} disabled={isLoading} className="flex-1 bg-trustflow-blue text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
              Force Pay Seller
            </button>
            <button onClick={() => handleAction('resolve_buyer')} disabled={isLoading} className="flex-1 bg-slate-800 text-white py-3 rounded-md font-semibold hover:bg-slate-900 transition">
              Refund Buyer
            </button>
          </div>
        )}

        {/* No action state */}
        {((isSeller && escrow.status === 'Initialized') || (!isBuyer && !isSeller && !isArbiter)) && (
          <p className="text-slate-500 text-sm">Waiting for other parties to take action.</p>
        )}
      </div>
    </div>
  );
}
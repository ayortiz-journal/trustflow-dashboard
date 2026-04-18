import Link from 'next/link';
import { Escrow, STATUS_COLORS } from '@/utils/constants';
import { formatCurrency } from '@/utils/formatting';
import { ChevronRight } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';
import { getXlmFiatValue } from '../utils/pricing';

interface Props {
    escrow: Escrow;
    userAddress: string | null;
}

export default function EscrowCard({ escrow, userAddress }: Props) {
    const { showFiat } = useWallet();

  // Determine Role
  let role = 'Participant';
    if (userAddress === escrow.buyer) role = 'Buyer';
    if (userAddress === escrow.seller) role = 'Seller';
    if (userAddress === escrow.arbiter) role = 'Arbiter';

  return (
        <Link href={`/escrow/${escrow.id}`}>
                <div className="bg-white border border-trustflow-border rounded-xl p-6 hover:shadow-md hover:border-blue-300 transition cursor-pointer group">
                        <div className="flex justify-between items-start mb-4">
                                  <div>
                                              <h3 className="font-semibold text-lg text-trustflow-navy">{escrow.title}</h3>h3>
                                              <p className="text-sm text-slate-500">ID: #{escrow.id}</p>p>
                                  </div>div>
                                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${STATUS_COLORS[escrow.status]}`}>
                                    {escrow.status}
                                  </span>span>
                        </div>div>
                
                        <div className="flex justify-between items-end mt-6">
                                  <div>
                                              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Escrow Value</p>p>
                                              <p className="text-xl font-bold text-slate-900">
                                                {formatCurrency(escrow.amount, escrow.token)}
                                                {showFiat && ` ($${getXlmFiatValue(escrow.amount).toFixed(2)})`}
                                              </p>p>
                                  </div>div>
                                  <div className="flex items-center space-x-3">
                                              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded font-medium">
                                                            Role: {role}
                                              </span>span>
                                              <ChevronRight className="text-slate-400 group-hover:text-trustflow-blue transition" size={20} />
                                  </div>div>
                        </div>div>
                </div>div>
        </Link>Link>
      );
}
</div>

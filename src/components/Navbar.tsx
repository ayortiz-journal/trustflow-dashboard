import Link from 'next/link';
import { useWallet } from '@/hooks/useWallet';
import { truncateAddress } from '@/utils/formatting';
import { Briefcase } from 'lucide-react';

export default function Navbar() {
  const { address, network, connect, disconnect } = useWallet();

  return (
    <nav className="bg-white border-b border-trustflow-border px-8 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex items-center space-x-2 text-trustflow-navy font-bold text-xl tracking-tight">
          <Briefcase className="text-trustflow-blue" size={24} />
          <span>TrustFlow</span>
        </Link>
        <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-500">
          <Link href="/dashboard" className="hover:text-trustflow-blue transition">Dashboard</Link>
          <a href="#" className="hover:text-trustflow-blue transition">Arbiters</a>
          <a href="#" className="hover:text-trustflow-blue transition">Documentation</a>
        </div>
      </div>

      <div>
        {address ? (
          <div className="flex items-center space-x-4">
            <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500 border border-slate-200">
              {network}
            </span>
            <button onClick={disconnect} className="bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-md font-medium text-sm transition">
              {truncateAddress(address)}
            </button>
          </div>
        ) : (
          <button onClick={connect} className="bg-trustflow-blue hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium text-sm transition shadow-sm">
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
}
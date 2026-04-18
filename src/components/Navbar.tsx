import Link from 'next/link';
import { useWallet } from '@/hooks/useWallet';
import { truncateAddress } from '@/utils/formatting';
import { Briefcase } from 'lucide-react';

export default function Navbar() {
    const { address, network, connect, disconnect, showFiat, toggleShowFiat } = useWallet();

  return (
        <nav className="bg-white border-b border-trustflow-border px-8 py-4 flex justify-between items-center">
              <div className="flex items-center space-x-8">
                      <Link href="/" className="flex items-center space-x-2 text-trustflow-navy font-bold text-xl tracking-tight">
                                <Briefcase className="text-trustflow-blue" size={24} />
                                <span>TrustFlow</span>span>
                      </Link>Link>
                      <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-500">
                                <Link href="/dashboard" className="hover:text-trustflow-blue transition">Dashboard</Link>Link>
                                <a href="#" className="hover:text-trustflow-blue transition">Arbiters</a>a>
                                <a href="#" className="hover:text-trustflow-blue transition">Documentation</a>a>
                      </div>div>
              </div>div>
              
              <div className="flex items-center space-x-4">
                {address && (
                    <button 
                                  onClick={toggleShowFiat}
                                  className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition text-sm font-medium text-slate-600"
                                >
                                <span>Fiat View</span>span>
                                <div className={`w-8 h-4 rounded-full transition-colors relative ${showFiat ? 'bg-blue-600' : 'bg-slate-300'}`}>
                                              <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${showFiat ? 'left-4' : 'left-0.5'}`} />
                                </div>div>
                    </button>button>
                      )}
              
                {address ? (
                    <div className="flex items-center space-x-4">
                                <div className="text-right hidden sm:block">
                                              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{network}</p>p>
                                              <p className="text-sm font-mono font-bold text-slate-700">{truncateAddress(address)}</p>p>
                                </div>div>
                                <button 
                                                onClick={disconnect}
                                                className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 border border-slate-200 transition"
                                              >
                                              Disconnect
                                </button>button>
                    </div>div>
                  ) : (
                    <button 
                                  onClick={connect}
                                  className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-trustflow-blue hover:bg-blue-600 transition"
                                >
                                Connect Wallet
                    </button>button>
                      )}
              </div>div>
        </nav>nav>
      );
}
</nav>

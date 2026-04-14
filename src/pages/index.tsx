import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head><title>TrustFlow Protocol | B2B Escrow</title></Head>
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-trustflow-navy tracking-tight mb-6">
          Decentralized B2B Escrow. <br/>
          <span className="text-trustflow-blue">Secured by Stellar.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mb-10">
          TrustFlow allows businesses to lock capital into programmable milestone agreements, eliminating counterparty risk in cross-border trade.
        </p>
        <Link href="/dashboard" className="bg-trustflow-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition shadow-lg">
          Go to Dashboard
        </Link>
      </div>
    </>
  );
}
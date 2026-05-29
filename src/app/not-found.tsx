import Link from 'next/link';
import { Navbar } from '@/components/navbar';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] text-white min-h-[calc(100vh-73px)] flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <h1 className="font-display text-7xl md:text-8xl mb-6">Nothing here.</h1>
          <p className="text-[#a0a0a0] text-lg mb-12">
            Whatever you were looking for doesn't exist — or we moved it.
          </p>
          <Link
            href="/"
            className="inline-block border border-[#8B3A62] text-[#8B3A62] px-6 py-3 font-medium hover:bg-[#8B3A62] hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}

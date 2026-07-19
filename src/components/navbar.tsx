'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a] border-b border-[#1a1a1a]">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span className="font-display text-2xl text-white hover:text-[#8B3A62] transition-colors">
            unlovedproductions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/products" className="text-white hover:text-[#8B3A62] transition-colors text-sm font-medium">
            Products
          </Link>
          <Link href="/about" className="text-white hover:text-[#8B3A62] transition-colors text-sm font-medium">
            About
          </Link>
          <Link href="/faq" className="text-white hover:text-[#8B3A62] transition-colors text-sm font-medium">
            FAQ
          </Link>
          <Link href="/contact" className="text-white hover:text-[#8B3A62] transition-colors text-sm font-medium">
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <a
            href="/#products"
            className="border border-[#8B3A62] text-[#8B3A62] px-5 py-2 text-sm font-medium hover:bg-[#8B3A62] hover:text-white transition-colors"
          >
            See What We Build
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-[#8B3A62] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-[#0a0a0a] border-t border-[#1a1a1a]">
          <div className="flex flex-col items-center justify-center gap-8 py-12">
            <Link
              href="/products"
              className="text-white text-2xl font-display hover:text-[#8B3A62] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-white text-2xl font-display hover:text-[#8B3A62] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-white text-2xl font-display hover:text-[#8B3A62] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-white text-2xl font-display hover:text-[#8B3A62] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="/#products"
              className="border border-[#8B3A62] text-[#8B3A62] px-6 py-3 text-lg font-medium hover:bg-[#8B3A62] hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              See What We Build
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

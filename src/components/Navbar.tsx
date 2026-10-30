"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Important Dates", href: "#important-dates" },
  { name: "Tracks", href: "#tracks" },
  { name: "Registration", href: "#registration" },
  { name: "Paper Submission", href: "#paper-submission" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#1b1a3d]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#3b3970]/50"
          : "bg-[#252451] border-b border-[#3b3970]/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Title brand */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#48C7E8] rounded-md px-1 py-0.5"
            aria-label="AMATHE 2026 Home"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#C8102E] flex items-center justify-center text-white font-black text-xl tracking-tighter shadow-md shadow-[#C8102E]/30 group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white group-hover:text-[#F3E52B] transition-colors leading-none">
                AMATHE <span className="text-[#C8102E]">2026</span>
              </span>
              <span className="text-[10px] text-[#DAD9E8] font-medium tracking-tight uppercase hidden sm:block">
                3rd International Conference • PESITM
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#DAD9E8] hover:text-[#48C7E8] hover:bg-[#323168]/60 px-3 py-2 rounded-md text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#48C7E8]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button & Poster Link */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="/amathe_poster.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#DAD9E8] hover:text-[#F3E52B] border border-[#3b3970] hover:border-[#F3E52B]/40 px-3 py-2 rounded-md font-medium transition-colors"
              title="View original conference poster PDF"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Official Poster</span>
            </a>
            <a
              href="#paper-submission"
              className="inline-flex items-center gap-1.5 bg-[#C8102E] hover:bg-[#A50D25] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-md shadow-md shadow-[#C8102E]/25 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#48C7E8]"
            >
              <span>Submit Paper</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href="#paper-submission"
              className="bg-[#C8102E] text-white text-xs font-bold uppercase px-3 py-1.5 rounded-md shadow-sm sm:hidden"
            >
              Submit
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#DAD9E8] hover:text-white hover:bg-[#323168] focus:outline-none focus:ring-2 focus:ring-[#48C7E8]"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#1b1a3d] border-b border-[#3b3970] px-4 pt-3 pb-5 space-y-1 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-[#DAD9E8] hover:text-[#48C7E8] hover:bg-[#252451] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#3b3970]/60 flex flex-col gap-2">
            <a
              href="/amathe_poster.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center py-2.5 text-xs text-[#DAD9E8] hover:text-[#F3E52B] border border-[#3b3970] rounded-md font-medium"
            >
              <FileText className="w-4 h-4" />
              <span>View Official Poster (PDF)</span>
            </a>
            <a
              href="#paper-submission"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center py-2.5 text-sm font-bold uppercase tracking-wider bg-[#C8102E] hover:bg-[#A50D25] text-white rounded-md shadow"
            >
              <span>Submit Paper</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

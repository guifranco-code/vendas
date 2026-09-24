import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { FORMS_URL } from '../constants/assets';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0e13]/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="font-display text-lg sm:text-xl font-bold tracking-widest text-neutral-100 hover:text-amber-400 transition-colors uppercase"
        >
          Reserva Mooca
        </a>

        {/* Zone 2: 4-6 Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a
            href="#projeto"
            className="hover:text-amber-400 transition-colors py-1"
          >
            O Projeto
          </a>
          <a
            href="#plantas"
            className="hover:text-amber-400 transition-colors py-1"
          >
            Plantas
          </a>
          <a
            href="#lazer"
            className="hover:text-amber-400 transition-colors py-1"
          >
            Lazer & Rooftop
          </a>
          <a
            href="#localizacao"
            className="hover:text-amber-400 transition-colors py-1"
          >
            Localização
          </a>
          <a
            href="#simulador"
            className="hover:text-amber-400 transition-colors py-1"
          >
            Simulador
          </a>
        </nav>

        {/* Zone 3: Primary Action CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-neutral-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded transition-all duration-200 shadow-md hover:shadow-amber-400/20 whitespace-nowrap"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            className="lg:hidden p-2 text-neutral-300 hover:text-white rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1218] border-b border-neutral-800 px-6 py-5 shadow-2xl space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-neutral-200">
            <a
              href="#projeto"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 border-b border-neutral-800/60"
            >
              O Projeto
            </a>
            <a
              href="#plantas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 border-b border-neutral-800/60"
            >
              Plantas & Tipologias
            </a>
            <a
              href="#lazer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 border-b border-neutral-800/60"
            >
              Lazer de Resort & Rooftop
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 border-b border-neutral-800/60"
            >
              Localização na Mooca
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 border-b border-neutral-800/60"
            >
              Simulador de Condições
            </a>
          </div>

          <div className="pt-2">
            <a
              href={FORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-neutral-950 bg-amber-400 rounded hover:bg-amber-300"
            >
              <span>Tenho Interesse</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

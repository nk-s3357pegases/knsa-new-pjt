import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBudgetModal = () => {
    onOpenModal();
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black border border-white/20 flex items-center justify-center rounded-sm shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-white font-bold text-2xl leading-none font-sans">
              K
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white leading-none">
              KNSA HUB
            </span>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/ia-e-automacao"
            className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 text-white text-sm font-medium transition-all"
          >
            IA e Automação
          </a>
          <button
            type="button"
            onClick={handleOpenBudgetModal}
            className="px-5 py-2 rounded-full bg-white hover:bg-gray-200 text-black text-sm font-medium transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            Fazer Orçamento
          </button>
        </div>

        {/* Mobile button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="text-gray-300"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 border-b border-white/10 py-4 px-4 flex flex-col space-y-4 shadow-2xl">
          <a
            href="/ia-e-automacao"
            className="w-full py-3 rounded-lg border border-white/10 text-white font-medium text-center hover:bg-white/5"
          >
            IA e Automação
          </a>
          <button
            type="button"
            onClick={handleOpenBudgetModal}
            className="w-full py-3 rounded-lg bg-white text-black font-medium shadow-lg"
          >
            Fazer Orçamento
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

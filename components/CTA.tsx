import React from 'react';
import { Zap } from 'lucide-react';

interface CTAProps {
  onOpenModal?: () => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 bg-dark-900 relative" id="contato">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gray-800/20 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-dark-800 border border-white/5 p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-30" />

          <div className="w-14 h-14 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <Zap size={28} className="text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Solicite seu diagnóstico e receba o direcionamento com <br />
            <span className="text-brand-500">processo e previsibilidade.</span>
          </h2>
          <p className="text-base text-gray-400 mb-8 max-w-2xl mx-auto">
            A experiência de contato com a sua empresa pode ser o primeiro passo para o cliente
            viver, na prática, como uma operação bem planejada transforma o dia a dia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenModal}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-gray-200 text-black font-bold transition-all shadow-lg hover:shadow-white/20 flex items-center justify-center gap-2"
            >
              <Zap size={18} />
              Solicite o diagnóstico!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

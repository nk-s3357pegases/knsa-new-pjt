import React from 'react';
import { RefreshCw, LayoutTemplate, Link2, Sparkles } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-black" id="servicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4 text-xs font-semibold tracking-wider text-brand-500 uppercase">
            Serviços
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Soluções digitais <span className="text-brand-500">sob medida</span> <br /> para
            sua operação
          </h2>
          <p className="text-gray-400 text-lg">
            Nosso projeto é único, feito de modo artesanal. A Metodologia da KNSA vai além da
            prestação de serviço, somos seu parceiro de negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-dark-800 border border-white/5 hover:border-brand-500/20 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-brand-900/30 flex items-center justify-center mb-6 text-brand-400 group-hover:scale-110 transition-transform">
              <RefreshCw size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Automação de processos</h3>
            <p className="text-gray-400 leading-relaxed">
              Tarefas repetitivas rodando sozinhas. Disparos de mensagens, atualizações em
              planilhas ou CRM, notificações internas e relatórios automáticos.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-dark-800 border border-white/5 hover:border-brand-500/20 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-brand-900/30 flex items-center justify-center mb-6 text-brand-400 group-hover:scale-110 transition-transform">
              <LayoutTemplate size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Sistemas sob medida</h3>
            <p className="text-gray-400 leading-relaxed">
              Painéis, portais e plataformas internas. Cadastros, dashboards, trilhas de
              aprovação e área do cliente alinhados ao seu processo.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-dark-800 border border-white/5 hover:border-brand-500/20 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-brand-900/30 flex items-center justify-center mb-6 text-brand-400 group-hover:scale-110 transition-transform">
              <Link2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Integrações</h3>
            <p className="text-gray-400 leading-relaxed">
              Ferramentas que conversam entre si. WhatsApp, formulários, CRMs, ERPs e
              planilhas conectados em um fluxo único para uma visão consolidada.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-dark-800 border border-white/5 hover:border-brand-500/20 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-brand-900/30 flex items-center justify-center mb-6 text-brand-400 group-hover:scale-110 transition-transform">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">IA aplicada ao negócio</h3>
            <p className="text-gray-400 leading-relaxed">
              IA onde ela realmente gera impacto. Extração de dados, resumo de atendimentos,
              qualificação de leads e apoio à decisão. Sem teatrinho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

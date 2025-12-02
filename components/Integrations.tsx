import React from 'react';
import { Scale, Stethoscope, Briefcase, PenTool } from 'lucide-react';

const Integrations: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900" id="segmentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-4 text-xs font-semibold tracking-wider text-gray-400 uppercase">
          Aplicações
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          Tecnologia aplicada ao seu <span className="text-gray-400">segmento</span>
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          A lógica de automação é universal, mas a comunicação, as regras e o contexto mudam.
          Adaptamos a solução à sua realidade.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="group relative bg-dark-800 rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-500 text-left hover:bg-dark-700">
            <div className="text-[10px] font-semibold text-gray-500 mb-6 uppercase tracking-wider">
              Advocacia
            </div>
            <div className="flex flex-col gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                <Scale size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Escritórios</h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Triagem e fluxo organizado. Captação de contatos, coleta de informações essenciais e
              encaminhamento para o time jurídico.
            </p>
          </div>

          <div className="group relative bg-dark-800 rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-500 text-left hover:bg-dark-700">
            <div className="text-[10px] font-semibold text-gray-500 mb-6 uppercase tracking-wider">
              Saúde
            </div>
            <div className="flex flex-col gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                <Stethoscope size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Clínicas e Consultórios</h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Agenda, confirmação e retorno. Gestão de fluxo de agendamentos, redução de faltas e
              organização de retornos.
            </p>
          </div>

          <div className="group relative bg-dark-800 rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-500 text-left hover:bg-dark-700">
            <div className="text-[10px] font-semibold text-gray-500 mb-6 uppercase tracking-wider">
              Serviços
            </div>
            <div className="flex flex-col gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                <Briefcase size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Consultorias</h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Funis, leads e pós-venda. Qualificação automática de leads, acompanhamento de propostas
              e CRM organizado.
            </p>
          </div>

          <div className="group relative bg-dark-800 rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-500 text-left hover:bg-dark-700 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-semibold text-gray-500 mb-6 uppercase tracking-wider">
                Projeto
              </div>
              <div className="flex flex-col gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                  <PenTool size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">Personalizado</h3>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                Você recebe um plano de ação de acordo com as necessidades da sua empresa, nosso
                projeto é separado por etapas.
              </p>
            </div>
            <a
              href="https://wa.me/+5551989619880"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-semibold text-white hover:text-gray-300 transition-colors mt-auto"
            >
              Saiba mais{' *>'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;

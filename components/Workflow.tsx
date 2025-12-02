import React from 'react';
import { CheckCircle2, GitCommit } from 'lucide-react';

const Workflow: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl bg-dark-800 border border-white/5 p-6 h-[320px] sm:h-[380px] md:h-[400px] overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="relative w-full h-full transform scale-[0.55] min-[400px]:scale-[0.65] sm:scale-[0.8] md:scale-100 origin-top-left transition-transform duration-300">
              <div className="absolute top-10 left-10 w-48 bg-black border border-white/10 rounded-lg p-3 shadow-xl z-20">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-xs font-semibold text-white">Novo Lead</span>
                  </div>
                  <span className="text-[10px] text-gray-500 uppercase">Gatilho</span>
                </div>
                <div className="h-2 w-full bg-dark-700 rounded mb-1" />
                <div className="h-2 w-2/3 bg-dark-700 rounded" />
              </div>

              <svg className="absolute top-10 left-10 w-full h-full pointer-events-none z-10 overflow-visible">
                <path
                  d="M 190 40 C 250 40, 250 140, 300 140"
                  fill="none"
                  stroke="#52525b"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="animate-[dash_20s_linear_infinite]"
                />
              </svg>

              <div className="absolute top-32 left-[300px] w-40 bg-black border border-white/20 rounded-lg p-3 shadow-[0_0_15px_rgba(255,255,255,0.05)] z-20">
                <div className="flex items-center gap-2 mb-2">
                  <GitCommit size={14} className="text-gray-300" />
                  <span className="text-xs font-semibold text-white">Verificar Fonte</span>
                </div>
                <div className="h-2 w-full bg-dark-700 rounded" />
              </div>

              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-visible">
                <path
                  d="M 380 160 C 380 220, 150 220, 150 260"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                />
              </svg>

              <div className="absolute top-[260px] left-20 w-52 bg-black border border-white/10 rounded-lg p-3 shadow-xl z-20">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                    <span className="text-xs font-semibold text-white">Enviar Proposta</span>
                  </div>
                  <span className="text-[10px] text-gray-500 uppercase">Ação</span>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <div className="w-8 h-6 bg-dark-700 rounded" />
                    <div className="w-full h-6 bg-dark-700 rounded" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300 text-xs z-30">
              Lógica Condicional
            </div>
          </div>

          <div>
            <div className="inline-block mb-4 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Resultado Prático
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              O que muda quando sua operação flui com direcionamento.{' '}
              <span className="text-gray-400">Sem especulação!</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Quando sistemas, automações e integrações trabalham juntos, a rotina deixa de
              depender de planilha solta, mensagens manuais e memória das pessoas.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-lg text-white h-fit">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Disponibilidade 24/7</h4>
                  <p className="text-sm text-gray-400">
                    Processos críticos continuam rodando mesmo fora do horário comercial.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-lg text-white h-fit">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Menos retrabalho, mais entrega</h4>
                  <p className="text-sm text-gray-400">
                    Sua equipe foca no que exige decisão humana, não em copiar e colar informação.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-lg text-white h-fit">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Visão clara da operação</h4>
                  <p className="text-sm text-gray-400">
                    Decisão tomada com base em evidência consolidada, não em percepção.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
    </section>
  );
};

export default Workflow;

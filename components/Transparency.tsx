import React from 'react';
import {
  Terminal,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react';
import { LogEntry } from '../types';

const Transparency: React.FC = () => {
  const logs: LogEntry[] = [
    { id: '1', action: 'Lead Triado', timestamp: '15:42:09', status: 'success' },
    { id: '2', action: 'Atribuir Vendedor', timestamp: '15:45:46', status: 'success' },
    { id: '3', action: 'Email de Onboarding', timestamp: '15:47:23', status: 'error' },
  ];

  return (
    <section className="py-24 bg-black" id="metodologia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 text-xs text-gray-300">
              <ShieldCheck size={12} /> Por que KNSA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ecossitema personalizados <br /> com{' '}
              <span className="text-brand-500">processo sério!</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Não vendemos sistema genérico nem pacote fechado. Nossa parceira consiste em
              organizar sua operação com tecnologia que faça sentido para o seu contexto.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-900/50 flex items-center justify-center text-brand-500">
                  <CheckCircle2 size={12} />
                </div>
                <span className="text-gray-300 font-medium">
                  Operação em primeiro lugar: Tecnologia a serviço do fluxo.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-900/50 flex items-center justify-center text-brand-500">
                  <CheckCircle2 size={12} />
                </div>
                <span className="text-gray-300 font-medium">
                  Aproveitamento do que você já usa.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-900/50 flex items-center justify-center text-brand-500">
                  <CheckCircle2 size={12} />
                </div>
                <span className="text-gray-300 font-medium">
                  Automação com governança e documentação.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-900/50 flex items-center justify-center text-brand-500">
                  <CheckCircle2 size={12} />
                </div>
                <span className="text-gray-300 font-medium">
                  Entrega progressiva: resultado rápido.
                </span>
              </li>
            </ul>
          </div>

          <div className="order-1 lg:order-2 bg-dark-800 border border-white/5 rounded-2xl p-6 overflow-hidden relative shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Terminal size={14} />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Log de Execução
                </span>
              </div>
            </div>

            <div className="space-y-3 relative">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className="group flex items-center justify-between p-4 rounded-lg bg-black border border-white/5 hover:border-brand-500/20 transition-all cursor-default"
                >
                  <div className="flex items-center gap-3">
                    {log.status === 'success' && (
                      <div className="text-brand-500">
                        <CheckCircle2 size={16} />
                      </div>
                    )}
                    {log.status === 'error' && (
                      <div className="text-red-500">
                        <AlertCircle size={16} />
                      </div>
                    )}
                    <span
                      className={`text-sm font-medium ${
                        log.status === 'error' ? 'text-red-200' : 'text-gray-200'
                      }`}
                    >
                      {log.action}
                    </span>
                  </div>
                  <span className="text-xs text-gray-600 font-mono">{log.timestamp}</span>
                  <div className="text-gray-600">
                    <span className="text-lg">›</span>
                  </div>
                </div>
              ))}

              <div className="absolute top-[130px] left-0 right-0 mx-4 z-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="bg-red-950/90 backdrop-blur-sm border border-red-500/30 text-red-200 px-4 py-3 rounded-lg shadow-xl flex items-center gap-3">
                  <AlertTriangle size={16} className="text-red-500" />
                  <span className="text-sm font-medium">1 Erro encontrado</span>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-lg bg-dark-700/50 border border-brand-500/20 flex items-start gap-3">
                <div className="mt-0.5 p-1 bg-blue-500/20 rounded text-blue-400">
                  <Lightbulb size={14} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-200 mb-1">Governança</h4>
                  <p className="text-xs text-gray-400">
                    Falhas são logadas e notificadas imediatamente. Sem &quot;caixa preta&quot;.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;

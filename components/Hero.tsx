import React, { useMemo } from 'react';
import { Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 40 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`,
        opacity: Math.random() * 0.7 + 0.3,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 2}s`,
      })),
    [],
  );

  return (
    <section
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black"
      id="sobre"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              animationDuration: star.animationDuration,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] sm:w-[1200px] sm:h-[800px] opacity-100 pointer-events-none z-0">
        <div className="absolute inset-0 rounded-[100%] bg-gradient-to-tr from-gray-800/20 via-gray-700/10 to-gray-900/20 blur-[100px] opacity-40 animate-pulse-slow" />

        <div className="absolute top-[10%] left-[10%] right-[10%] h-[150%] rounded-[100%] border border-white/5 opacity-20" />

        <div
          className="absolute top-[10%] left-[10%] right-[10%] h-[150%] rounded-[100%] overflow-hidden"
          style={{
            maskImage:
              'radial-gradient(closest-side, transparent 98%, white 98%, white 100%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(closest-side, transparent 98%, white 98%, white 100%, transparent 100%)',
          }}
        >
          <div className="absolute left-0 right-0 h-[40%] bg-gradient-to-b from-transparent via-white/80 to-transparent opacity-50 animate-fall blur-md" />

          <div
            className="absolute left-0 right-0 h-[30%] bg-gradient-to-b from-transparent via-gray-400 to-transparent opacity-20 animate-fall blur-xl"
            style={{ animationDelay: '3s' }}
          />
        </div>

        <div className="absolute top-[20%] left-[20%] right-[20%] h-[100%] rounded-[100%] bg-gradient-to-b from-white/5 to-transparent blur-[60px]" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8 mx-auto lg:mx-0">
              <Zap size={14} className="text-white" />
              <span className="text-xs font-medium text-gray-200 uppercase tracking-wider">
                Soluções digitais sob medida
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Planejamento, <br />
              processo e código. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
                Nessa exata ordem.
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Todo projeto é único, podendo ser feito do zero ou adaptado ao software atual
              da sua empresa, sempre visando a otimização da operação e da parceria no
              longo prazo. Não reinvente a roda.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#servicos"
                className="px-8 py-4 rounded-full bg-dark-800 hover:bg-dark-700 border border-gray-800 text-white font-medium transition-all"
              >
                Ver como funciona
              </a>
              <a
                href="https://wa.me/+5551989619880"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white hover:bg-gray-200 text-black font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center gap-2"
              >
                <Zap size={18} />
                Contate seu novo parceiro
              </a>
            </div>

            <p className="text-sm text-gray-500 border-l-2 border-gray-700 pl-4 mx-auto lg:mx-0 max-w-md italic">
              &quot;Projetos desenhados e adequados à realidade da sua operação. As
              soluções se tornam um meio, não o fim.&quot;
            </p>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-2xl">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-medium text-gray-300 uppercase tracking-wider">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    Dashboard
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  Visão em tempo real da sua operação.
                </h3>
                <p className="text-sm text-gray-400 mb-8">
                  Sistemas, automações e integrações conectando canais, dados e processos
                  em um fluxo só.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Carga Operacional
                    </div>
                    <div className="text-2xl font-bold text-white">– 70%</div>
                    <div className="text-[10px] text-gray-400 mt-1">Tarefas automatizadas</div>
                  </div>

                  <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Tempo de execução
                    </div>
                    <div className="text-2xl font-bold text-gray-200">&lt; 5 s</div>
                    <div className="text-[10px] text-gray-400 mt-1">Fluxos sem fila</div>
                  </div>

                  <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Disponibilidade
                    </div>
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-[10px] text-gray-400 mt-1">Processos críticos</div>
                  </div>

                  <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Integrações
                    </div>
                    <div className="text-2xl font-bold text-gray-200">API+</div>
                    <div className="text-[10px] text-gray-400 mt-1">CRM, ERPs e Planilhas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// src/AutomationPage.tsx
import React, { useState } from "react";
import {
  Sparkles,
  Workflow,
  Settings2,
  Headphones,
  Users2,
  BarChart3,
  ClipboardList,
  ShieldCheck,
  Clock3,
  Activity,
  Brain,
  Database,
  MessageCircle,
  CloudCog,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AutomationBudgetModal from "./AutomationBudgetModal";

const AutomationPage: React.FC = () => {
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);

  const openBudget = () => setIsBudgetOpen(true);
  const closeBudget = () => setIsBudgetOpen(false);

  // Stack real da operação KNSA
  const techStack = [
    {
      title: "Automações",
      desc: "Utilizamos de servidores próprios, base de dados segura priorizando o compliance da sua Empresa. A Automação nos permite conectar diversas aplicações mantendo seu processo comercial centralizado.",
      icon: Workflow,
      tags: ["Produtividade", "Redução de custos", "Funcionários 24/7", "Controle"],
    },
    {
      title: "Canais de entrada",
      desc: "Seja qual for seu Funil de Venda, conseguimos analisar as métricas com a nossa metodologia. Nosso controle é centralizado, sendo testado e validado conforme sua operação necessita.",
      icon: MessageCircle,
      tags: ["WhatsApp", "Instagram", "Landing pages", "Formulários"],
    },
    {
      title: "CRM, RFM e Softwares",
      desc: "A utilização das ferramentas adequadas é a única fonte da verdade da operação. Números não mentem, mas sim a qualidade dos dados que são inseridos e analisados.",
      icon: Database,
      tags: ["Análise de métrica", "Teste", "Controle", "Validação", "Escalabilidade"],
    },
    {
      title: "IA aplicada ao processo",
      desc: "Multi Agentes de IA usados para extrair informações, resumir conversas e classificar leads, sempre com regra clara e limite definido.",
      icon: Sparkles,
      tags: ["LLM Direcionada", "SAC", "SDR", "CMO", "CFO"],
    },
    {
      title: "Segurança",
      desc: "Os dados da sua operação são o ativo mais valioso. Priorizamos segurança em cada etapa: servidores, conexões e acessos controlados.",
      icon: CloudCog,
      tags: ["VPS", "DNS", "Cibersegurança"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onOpenModal={openBudget} />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative py-24 bg-gradient-to-b from-dark-900 via-black to-black">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/5 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 text-xs text-gray-300">
                <Sparkles size={14} />
                <span>IA + Automações para operação de verdade</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Organize sua operação com{" "}
                <span className="text-brand-400">IA e automação</span>{" "}
                conectadas ao que você utiliza.
              </h1>

              <p className="text-gray-400 text-lg mb-8 max-w-xl">
                Estruturamos fluxos que conversam com seus sistemas, reduzem
                retrabalho e deixam sua equipe focada em decisão!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={openBudget}
                  className="px-8 py-3 rounded-full bg-white text-black font-semibold text-sm shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:bg-gray-200 transition-all"
                >
                  Conversar sobre meu cenário
                </button>
                <a
                  href="#use-cases"
                  className="px-8 py-3 rounded-full border border-white/15 text-gray-200 text-sm font-semibold hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                >
                  Ver aplicações na prática
                </a>
              </div>
            </div>

            {/* Bloco visual simples */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-dark-800/80 p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-gray-400 uppercase">
                    Fluxo de Operação
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono" />
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-black border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                        <Users2 size={16} />
                      </div>
                      <div>
                        <p className="text-gray-100 text-xs font-semibold">
                          Captar e qualificar leads
                        </p>
                        <p className="text-[11px] text-gray-500">
                          Formulário, WhatsApp ou landing page
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">
                      24/7
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-black border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                        <Workflow size={16} />
                      </div>
                      <div>
                        <p className="text-gray-100 text-xs font-semibold">
                          Sincronizar com CRM / Planilhas
                        </p>
                        <p className="text-[11px] text-gray-500">
                          Atualização automática de status
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono">
                      +83% sem retrabalho
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-black border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                        <BarChart3 size={16} />
                      </div>
                      <div>
                        <p className="text-gray-100 text-xs font-semibold">
                          IA para resumir e priorizar
                        </p>
                        <p className="text-[11px] text-gray-500">
                          Leads e atendimentos com prioridade clara
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono">
                      visão em minutos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE PODE SER FEITO COM IA + AUTOMAÇÕES */}
        <section id="use-cases" className="py-20 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-400 mb-3">
                APLICAÇÕES NA PRÁTICA
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                O que pode ser feito com{" "}
                <span className="text-brand-400">IA + automações</span> na sua
                operação?
              </h2>
              <p className="text-gray-400 mt-3 max-w-2xl text-sm md:text-base">
                O desenho muda para cada empresa, mas os pilares são sempre os
                mesmos: entrada de informação organizada, regras claras e
                integração com as ferramentas que você já usa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "Operações e logística",
                  desc: "Sincronizar pedidos, estoques e entregas entre sistemas. Menos retrabalho manual, mais previsibilidade.",
                },
                {
                  title: "Financeiro e controladoria",
                  desc: "Cobranças, conciliações e relatórios alimentados automaticamente, com alertas quando algo sai do padrão.",
                },
                {
                  title: "Atendimento e pré-vendas",
                  desc: "Captar, qualificar e encaminhar contatos com roteiros guiados. IA organiza o contexto, não substitui seu time.",
                },
                {
                  title: "Recrutamento e pessoas",
                  desc: "Formulários inteligentes, filtros e checklists que deixam o RH menos operacional e mais estratégico.",
                },
                {
                  title: "Marketing e funis",
                  desc: "Organização de leads, jornadas e disparos com base em eventos reais, não só em datas fixas.",
                },
                {
                  title: "Pós-venda e suporte",
                  desc: "Abertura de chamados, classificação e respostas padrão sem depender de copiar/colar do time.",
                },
                {
                  title: "Diretoria e tomada de decisão",
                  desc: "Dashboards com o que importa: gargalos, volume de demandas e visão por etapa da operação.",
                },
                {
                  title: "Comercial",
                  desc: "Registro de interações, propostas e follow-ups em um fluxo só, com lembretes automáticos.",
                },
                {
                  title: "TI e infraestrutura",
                  desc: "Monitorar integrações e serviços críticos, com log e alerta quando algo quebra.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-dark-900/80 p-5 hover:border-brand-500/40 hover:-translate-y-1 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 mb-3">
                    <Settings2 size={18} />
                  </div>
                  <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NOSSOS NÚMEROS */}
        <section className="py-16 bg-dark-900 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-400 mb-3">
                  Benefícios
                </p>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Operação pensada em resultado.
                </h2>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                Foco em impacto real na operação.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-white/10 bg-black/80 p-6 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                  <Activity size={18} />
                </div>
                <div className="text-sm font-semibold text-gray-100">
                  Fluxos desenhados
                </div>
                <p className="text-xs text-gray-400">
                  Jornadas completas de entrada, processamento e saída de
                  informação mapeadas e documentadas.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/80 p-6 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                  <ClipboardList size={18} />
                </div>
                <div className="text-sm font-semibold text-gray-100">
                  Processos automatizados
                </div>
                <p className="text-xs text-gray-400">
                  Etapas críticas deixando de depender de “lembrar de fazer” para
                  rodar com regra clara.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/80 p-6 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                  <Clock3 size={18} />
                </div>

                <div className="text-sm font-semibold text-gray-100">
                  Seu ativo mais valioso é o tempo
                </div>
                <p className="text-xs text-gray-400">
                  Processos comerciais claros que otimizam horas de trabalho e
                  deixam seu tempo focado no que é necessário.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TECNOLOGIAS QUE USAMOS */}
        <section className="py-20 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-400 mb-3">
                  TECNOLOGIA NA PRÁTICA
                </p>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Como conectamos{" "}
                  <span className="text-brand-400">IA, dados e canais</span> na
                  sua operação.
                </h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {techStack.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-dark-900/80 p-5 flex flex-col gap-3 hover:border-brand-500/40 hover:-translate-y-1 transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wide text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* POR QUE ESCOLHER A KNSA */}
        <section className="py-20 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-400 mb-3">
                DIFERENCIAIS
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Por que escolher a{" "}
                <span className="text-brand-400">KNSA HUB</span> para IA e
                automação?
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl">
                O papel da KNSA é ser seu parceiro, entramos na operação e
                entendemos os gargalos e só então definimos o que faz sentido
                automatizar — etapa por etapa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-5 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                  <Brain size={18} />
                </div>
                <h3 className="text-sm font-semibold">IA aplicada ao contexto</h3>
                <p className="text-xs text-gray-400">
                  Nada de respostas “de manual”. A IA é treinada para ler seus
                  dados, seus processos e sua forma de trabalhar.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-5 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                  <Workflow size={18} />
                </div>
                <h3 className="text-sm font-semibold">Visão de ponta a ponta</h3>
                <p className="text-xs text-gray-400">
                  Mapeamos desde a entrada do lead até o pós-venda. Automação
                  isolada tende a virar gambiarra — evitamos isso desde o início.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-5 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="text-sm font-semibold">Governança e log</h3>
                <p className="text-xs text-gray-400">
                  Cada automação tem registro de execução, erros e alertas.
                  Nada de “sumiu lead” sem saber onde quebrou.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-5 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                  <Users2 size={18} />
                </div>
                <h3 className="text-sm font-semibold">
                  Aproveita o que você já usa
                </h3>
                <p className="text-xs text-gray-400">
                  Em vez de empurrar ferramenta nova, conectamos CRM, planilhas,
                  ERPs e canais que já fazem parte do dia a dia.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-5 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                  <Headphones size={18} />
                </div>
                <h3 className="text-sm font-semibold">Suporte próximo</h3>
                <p className="text-xs text-gray-400">
                  Acompanhamento pós-implantação para ajustar regra, corrigir
                  gargalos e evoluir o fluxo conforme a operação muda.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-dark-900/80 p-5 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                  <Settings2 size={18} />
                </div>
                <h3 className="text-sm font-semibold">Projeto em fases</h3>
                <p className="text-xs text-gray-400">
                  Começamos por um MVP enxuto, validamos e só então ampliamos.
                  Assim você vê resultado rápido sem travar a operação.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
              <button
                type="button"
                onClick={openBudget}
                className="px-8 py-3 rounded-full bg-white text-black font-semibold text-sm shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:bg-gray-200 transition-all"
              >
                Quero mapear meu fluxo com a KNSA
              </button>
              <p className="text-xs text-gray-500">
                Reunião estratégica para entender sua operação e sugerir um plano
                de fases. Sem promessa vazia.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

<AutomationBudgetModal isOpen={isBudgetOpen} onClose={closeBudget} />
    </div>
  );
};

export default AutomationPage;

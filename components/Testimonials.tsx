import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const faqs = [
    {
      q: 'GARANTIA DO PRODUTO',
      a: "Após a fase de MVP, Validação e Implementação. Caso não cumpra o que foi ofertado na contratação do serviço você recebe seu INVESTIMENTO de VOLTA. Tudo será descrito em contrato, sem isso de ''garantia de 7 Dias''. A KNSA é seu PARCEIRO de negócio, prezamos sua satisfação!",
    },
    {
      q: 'Que tipo de empresa a KNSA atende?',
      a: 'Empresas que já têm operação rodando e sentem que estão perdendo tempo com tarefas manuais, retrabalho ou falta de integração.',
    },
    {
      q: 'Preciso já ter sistema ou CRM?',
      a: 'Não. Se você já tiver ferramentas, vamos integrar. Se não tiver, avaliamos o mínimo necessário para estruturar a operação.',
    },
    {
      q: 'Quanto custa um projeto?',
      a: 'Varia conforme escopo. Primeiro mapeamos o cenário e definimos um MVP com entregas claras; só então fechamos valor.',
    },
    {
      q: 'Em quanto tempo vejo resultados?',
      a: 'Buscamos uma primeira entrega funcional em poucas semanas, dependendo da complexidade e disponibilidade da sua equipe.',
    },
    {
      q: 'Como funciona o suporte?',
      a: 'Definimos um período de acompanhamento pós-go-live e, se fizer sentido, um pacote de evolução contínua.',
    },
  ];

  return (
    <section className="py-24 bg-black" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide text-center">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="border border-white/10 bg-dark-800/50 rounded-sm overflow-hidden transition-all duration-300 hover:border-brand-500/30"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-200 pr-8">{faq.q}</span>
                <span className="text-gray-400 flex-shrink-0 transition-transform duration-300">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

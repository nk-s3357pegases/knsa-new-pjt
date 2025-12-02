import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const N8N_WEBHOOK_URL = import.meta.env
  .VITE_N8N_DIAGNOSTICO_WEBHOOK_URL as string;

const BudgetModal: React.FC<BudgetModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    service: '',
    currentMoment: '',
    projectDescription: '',
    revenue: '',
    budgetAwareness: '',
    source: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!N8N_WEBHOOK_URL) {
      alert(
        'Não foi possível enviar sua solicitação no momento. Tente novamente mais tarde.',
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Status ${response.status}`);
      }

      alert(
        'Solicitação enviada com sucesso! Em breve entraremos em contato.',
      );

      setFormData({
        companyName: '',
        name: '',
        email: '',
        phone: '',
        service: '',
        currentMoment: '',
        projectDescription: '',
        revenue: '',
        budgetAwareness: '',
        source: '',
      });

      onClose();
    } catch (error) {
      console.error('Erro ao enviar formulário para o n8n:', error);
      alert(
        'Não foi possível enviar sua solicitação agora. Tente novamente em alguns instantes.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex justify-center items-start sm:items-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl bg-white border border-gray-200 rounded-xl shadow-2xl flex flex-col my-8 sm:my-0 max-h-[90vh]">
        <div className="flex items-start justify-between p-6 border-b border-gray-100 bg-white rounded-t-xl shrink-0">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Solicite seu diagnóstico
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
              Nós vamos fazer uma reunião particular com você para entender o
              caso específico da sua empresa, tirar todas as suas dúvidas e
              dar um direcionamento claro do melhor caminho desenvolver o seu
              projeto.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar">
          <form
            id="budget-form"
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Nome da Empresa
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                  placeholder="Sua empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Nome *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Número de telefone (Whatsapp) *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none">
                    🇧🇷 +55
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-r-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Serviço *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                >
                  <option value="" disabled>
                    Selecione...
                  </option>
                  <option value="Inteligência Artificial">
                    Inteligência Artificial
                  </option>
                  <option value="Automações">Automações</option>
                  <option value="Integrações">Integrações</option>
                  <option value="Desenvolvimento de software">
                    Desenvolvimento de software
                  </option>
                  <option value="Preciso de um Squad de Tecnologia">
                    Preciso de um Squad de Tecnologia
                  </option>
                </select>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-6"></div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                1. Qual dessas situações descreve melhor seu momento atual? *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Tenho um projeto já desenhado e detalhado e preciso desenvolver',
                  'Gostaria de transformar minha idéia em um projeto',
                  'Gostaria de contratar um time de tecnologia completo',
                  'Nunca fiz um projeto de software e gostaria de saber mais sobre isso',
                ].map((option) => (
                  <label
                    key={option}
                    className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-colors bg-white h-full"
                  >
                    <div className="flex items-center h-5 mt-0.5">
                      <input
                        type="radio"
                        name="currentMoment"
                        value={option}
                        checked={formData.currentMoment === option}
                        onChange={() =>
                          handleRadioChange('currentMoment', option)
                        }
                        required
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 shrink-0"
                      />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-tight break-words">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                2. Conte-nos sobre o seu projeto. *
              </label>
              <textarea
                name="projectDescription"
                required
                value={formData.projectDescription}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                placeholder="Descreva brevemente o que você precisa..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                3. Qual é a faixa de faturamento mensal da sua empresa? *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Até R$ 50 mil',
                  'R$ 50–100 mil',
                  'R$ 100–300 mil',
                  'R$ 300 mil – R$ 1 milhão',
                  'Acima de R$ 1 milhão',
                ].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-colors bg-white h-full"
                  >
                    <input
                      type="radio"
                      name="revenue"
                      value={option}
                      checked={formData.revenue === option}
                      onChange={() => handleRadioChange('revenue', option)}
                      required
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-gray-600">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                4. Você tem ciência de que projetos de desenvolvimento custam a
                partir de R$ 50.000,00? *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['Sim, pois quero algo que funcione de verdade!', 'Não.'].map(
                  (option) => (
                    <label
                      key={option}
                      className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-colors bg-white h-full"
                    >
                      <div className="flex items-center h-5 mt-0.5">
                        <input
                          type="radio"
                          name="budgetAwareness"
                          value={option}
                          checked={formData.budgetAwareness === option}
                          onChange={() =>
                            handleRadioChange('budgetAwareness', option)
                          }
                          required
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 shrink-0"
                        />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-600 leading-tight">
                        {option}
                      </span>
                    </label>
                  ),
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                5. Como nos conheceu?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Google',
                  'Indicação',
                  'Youtube',
                  'Instagram',
                  'Facebook',
                  'Linkedin',
                ].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-colors bg-white h-full"
                  >
                    <input
                      type="radio"
                      name="source"
                      value={option}
                      checked={formData.source === option}
                      onChange={() => handleRadioChange('source', option)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-gray-600">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 bg-gray-50 rounded-b-xl shrink-0 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    Enviar <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BudgetModal;

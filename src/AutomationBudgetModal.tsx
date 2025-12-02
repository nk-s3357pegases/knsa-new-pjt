import React, { useEffect, useState } from 'react';
import { X, Send } from 'lucide-react';

interface AutomationBudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AutomationFormData {
  companyName: string;
  name: string;
  email: string;
  phone: string;
  focusArea: string;
  channels: string[];
  processDescription: string;
  timeSpent: string;
  automationMaturity: string;
  source: string;
}

// Usa a variável de ambiente definida pelo Vite ou um fallback
const WEBHOOK_URL =
  import.meta.env.VITE_N8N_IA_WEBHOOK_URL ||
  'https://geral-knsa-n8n.pphnmy.easypanel.host/webhook/knsa/ia-automacoes';

const initialFormData: AutomationFormData = {
  companyName: '',
  name: '',
  email: '',
  phone: '',
  focusArea: '',
  channels: [],
  processDescription: '',
  timeSpent: '',
  automationMaturity: '',
  source: '',
};

const AutomationBudgetModal: React.FC<AutomationBudgetModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<AutomationFormData>(initialFormData);
  const [loading, setLoading] = useState(false);

  // trava scroll do body quando o modal está aberto
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: keyof AutomationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleChannelToggle = (value: string) => {
    setFormData(prev => {
      const alreadySelected = prev.channels.includes(value);
      return {
        ...prev,
        channels: alreadySelected
          ? prev.channels.filter(c => c !== value)
          : [...prev.channels, value],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!WEBHOOK_URL) {
      alert('Configuração de webhook não encontrada.');
      return;
    }

    if (!formData.channels.length) {
      alert('Selecione pelo menos um canal envolvido no processo.');
      return;
    }

    setLoading(true);

    try {
      // Constrói o payload para enviar ao n8n. O array de canais vai como array
      const payload = {
        // dados básicos
        companyName: formData.companyName,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,

        // identificação do funil
        service: 'IA e Automações',
        funnel: 'ia_automacoes',

        // perguntas específicas
        focusArea: formData.focusArea,
        channels: formData.channels,
        processDescription: formData.processDescription,
        timeSpent: formData.timeSpent,
        automationMaturity: formData.automationMaturity,
        source: formData.source,
      };

      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Erro ao enviar formulário: ${res.status}`);
      }

      alert('Solicitação enviada com sucesso! Em breve entraremos em contato.');
      setFormData({ ...initialFormData });
      onClose();
    } catch (err) {
      console.error(err);
      alert('Não foi possível enviar sua solicitação. Tente novamente em instantes.');
    } finally {
      setLoading(false);
    }
  };

  const channelOptions = [
    'WhatsApp',
    'Instagram',
    'Site / Landing page',
    'Formulários',
    'Planilhas (Excel / Google Sheets)',
    'CRM',
    'ERP / Sistema interno',
    'Outro',
  ];

  return (
    <div className="fixed inset-0 z-[60] flex justify-center items-start sm:items-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl bg-white border border-gray-200 rounded-xl shadow-2xl flex flex-col my-8 sm:my-0 max-h-[90vh]">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-100 bg-white rounded-t-xl shrink-0">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Diagnóstico em IA + Automações
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
              Vamos entender como sua operação funciona hoje, onde você perde tempo e
              onde automações e IA podem gerar impacto imediato.
            </p>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Conteúdo scrollable */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <form
            id="automation-budget-form"
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Dados básicos */}
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
                  Número de telefone (WhatsApp) *
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
            </div>

            <div className="h-px bg-gray-200 my-6" />

            {/* Q1 - Área foco */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                1. Qual área você quer otimizar primeiro? *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Atendimento / Suporte',
                  'Comercial / Vendas',
                  'Operações / Logística',
                  'Financeiro / Cobranças',
                  'Outro',
                ].map(option => (
                  <label
                    key={option}
                    className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-colors bg-white h-full"
                  >
                    <div className="flex items-center h-5 mt-0.5">
                      <input
                        type="radio"
                        name="focusArea"
                        value={option}
                        checked={formData.focusArea === option}
                        onChange={() => handleRadioChange('focusArea', option)}
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

            {/* Q2 - Canais / sistemas */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                2. Quais canais e sistemas estão envolvidos nesse processo? *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {channelOptions.map(option => (
                  <label
                    key={option}
                    className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-colors bg-white h-full"
                  >
                    <div className="flex items-center h-5 mt-0.5">
                      <input
                        type="checkbox"
                        value={option}
                        checked={formData.channels.includes(option)}
                        onChange={() => handleChannelToggle(option)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 shrink-0"
                      />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-tight break-words">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              <p className="mt-2 text-[11px] text-gray-500">
                Selecione todos que fizerem sentido.
              </p>
            </div>

            {/* Q3 - Descrição do processo */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                3. Como esse processo funciona hoje? *
              </label>
              <textarea
                name="processDescription"
                required
                value={formData.processDescription}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                placeholder="Explique, passo a passo, como isso acontece hoje na sua operação..."
              />
            </div>

            {/* Q4 - Tempo / volume */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                4. Quanto tempo esse processo consome por dia da sua equipe? *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Até 1 hora por dia',
                  'Entre 1 e 3 horas por dia',
                  'Entre 3 e 5 horas por dia',
                  'Mais de 5 horas por dia',
                ].map(option => (
                  <label
                    key={option}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-colors bg-white h-full"
                  >
                    <input
                      type="radio"
                      name="timeSpent"
                      value={option}
                      checked={formData.timeSpent === option}
                      onChange={() => handleRadioChange('timeSpent', option)}
                      required
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-gray-600">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q5 - Maturidade em automação/IA */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                5. Qual é o nível de maturidade da sua empresa em automação e IA? *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Nunca automatizamos nada',
                  'Temos algumas automações pontuais',
                  'Já temos algo estruturado e queremos evoluir',
                ].map(option => (
                  <label
                    key={option}
                    className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-colors bg-white h-full"
                  >
                    <div className="flex items-center h-5 mt-0.5">
                      <input
                        type="radio"
                        name="automationMaturity"
                        value={option}
                        checked={formData.automationMaturity === option}
                        onChange={() =>
                          handleRadioChange('automationMaturity', option)
                        }
                        required
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 shrink-0"
                      />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-tight">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q6 - Como nos conheceu */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                6. Como nos conheceu?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['Google', 'Indicação', 'YouTube', 'Instagram', 'Facebook', 'LinkedIn'].map(
                  option => (
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
                      <span className="text-xs sm:text-sm text-gray-600">{option}</span>
                    </label>
                  ),
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Footer / botão de envio */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-xl shrink-0 flex justify-end">
          <button
            type="submit"
            form="automation-budget-form"
            disabled={loading}
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Enviar <Send size={18} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutomationBudgetModal;

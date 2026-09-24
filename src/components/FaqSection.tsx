import { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';
import { FORMS_URL } from '../constants/assets';

const faqs = [
  {
    q: 'Qual é o prazo previsto de entrega das obras?',
    a: 'O projeto tem cronograma de execução de 36 meses a contar da formalização do lançamento oficial, assegurado por Patrimônio de Afetação.',
  },
  {
    q: 'Como funciona o acesso antecipado e a escolha de unidades no pré-lançamento?',
    a: 'Clientes cadastrados que preenchem o formulário têm preferência de agendamento prioritário antes da abertura ao público em geral, garantindo acesso às melhores plantas, andares mais altos e aos menores preços do metro quadrado (Tabela Zero).',
  },
  {
    q: 'Posso utilizar o FGTS ou compor renda com cônjuge ou familiares?',
    a: 'Sim! Na fase de entrega de chaves você pode utilizar o saldo do FGTS para abater o saldo devedor ou compor o financiamento bancário com qualquer grande instituição financeira (Caixa, Itaú, Bradesco, Santander).',
  },
  {
    q: 'As vagas de garagem são demarcadas e cobertas?',
    a: 'Sim, todas as vagas são demarcadas e cobertas no subsolo. As unidades de 112m² e 148m² contam com 2 vagas determinadas e depósito privativo.',
  },
  {
    q: 'As áreas de lazer serão entregues decoradas e equipadas?',
    a: 'Sim, todas as mais de 25 áreas comuns (rooftop pool, academia, salão de festas, coworking, quadra e spa) são entregues 100% equipadas, climatizadas e decoradas com projeto de interiores assinado.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#0b0e13] border-t border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-2">
            Perguntas Frequentes
          </div>
          <h2 className="font-serif text-3xl font-bold text-white">
            Tire suas dúvidas sobre o lançamento
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Transparência e clareza para você tomar a melhor decisão patrimonial.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-lg bg-neutral-900/60 border border-neutral-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-neutral-200 hover:text-white transition-colors"
                >
                  <span className="text-sm sm:text-base font-medium">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-neutral-800/40 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-neutral-400">
            Tem outra dúvida específica sobre documentação ou visitas?
          </p>
          <a
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 mt-2 transition-colors"
          >
            <span>Falar com o consultor responsável pelo lançamento</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

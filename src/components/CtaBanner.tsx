import { ArrowUpRight, CheckCircle2, Shield, Calendar, Sparkles } from 'lucide-react';
import { FORMS_URL } from '../constants/assets';

export default function CtaBanner() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#0b0e13] via-[#111722] to-[#0b0e13] border-t border-neutral-800 relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Cadastro de Pré-Lançamento</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight text-balance max-w-3xl mx-auto leading-tight">
          Garanta sua prioridade no lançamento mais aguardado da Mooca.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Preencha o formulário rápido de interesse para receber o book digital completo, a tabela de valores inaugural e agendar seu atendimento exclusivo.
        </p>

        {/* Benefits checklist */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 my-8 text-xs sm:text-sm text-neutral-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Tabela inaugural exclusiva de pré-lançamento</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Atendimento individual com consultor especialista</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Sem compromisso de compra</span>
          </div>
        </div>

        {/* Huge, unmistakable primary conversion CTA button */}
        <div className="mt-8 flex flex-col items-center">
          <a
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 text-base sm:text-lg font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-xl shadow-amber-400/25 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>TENHO INTERESSE</span>
            <ArrowUpRight className="w-6 h-6" />
          </a>

          <span className="text-xs text-neutral-500 mt-3 font-mono">
            Link direto para formulário seguro do Google Forms
          </span>
        </div>
      </div>
    </section>
  );
}

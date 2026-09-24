import { ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { FORMS_URL, IMAGES } from '../constants/assets';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0b0e13]">
      {/* Background Media Container with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroFacade}
          alt="Fachada imponente do edifício Reserva Mooca iluminada ao pôr do sol"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured multi-stop gradient scrim to ensure high contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e13] via-[#0b0e13]/75 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e13]/90 via-[#0b0e13]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Unboxed editorial kicker - NO PILLS */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-400">
            <span>Lançamento Exclusivo</span>
            <span aria-hidden="true">·</span>
            <span>Alto da Mooca</span>
            <span aria-hidden="true">·</span>
            <span>São Paulo</span>
          </div>

          {/* Main Headline with text-wrap: balance */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance">
            A tradição da Mooca reinventada na sua forma mais sofisticada.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl">
            Apartamentos de 78m² a 148m² com 2 e 3 suítes, terraço gourmet integrado e rooftop club com vista panorâmica para a cidade. O privilégio de viver com privacidade, requinte e infraestrutura de resort.
          </p>

          {/* Key Metric Highlights - Tabular figures and unboxed layout */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-neutral-800/80 my-4">
            <div>
              <div className="font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">
                78 a 148<span className="text-sm font-normal text-neutral-400 ml-1">m²</span>
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">Área privativa</div>
            </div>
            <div>
              <div className="font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">
                2 e 3
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">Suítes espaçosas</div>
            </div>
            <div>
              <div className="font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">
                1 ou 2
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">Vagas determinadas</div>
            </div>
            <div>
              <div className="font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">
                28º
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">Rooftop Sky Pool</div>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href={FORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm sm:text-base font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded shadow-lg shadow-amber-400/20 transition-all duration-200 group"
            >
              <span>Tenho Interesse</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#plantas"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-medium text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800/90 border border-neutral-700/70 rounded transition-colors duration-200 backdrop-blur-sm"
            >
              <span>Conhecer Plantas</span>
              <ChevronDown className="w-4 h-4 text-neutral-400" />
            </a>
          </div>

          {/* Early bird proof / assurance points */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-3 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Condições especiais de 1º lote de lançamento</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Prioridade na escolha de andar e vista</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Fluxo de pagamento direto ou bancário</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

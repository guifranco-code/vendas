import { useState, useMemo } from 'react';
import { ArrowUpRight, Calculator, TrendingUp, ShieldCheck, HelpCircle } from 'lucide-react';
import { FORMS_URL } from '../constants/assets';

export default function Simulator() {
  const [selectedPlan, setSelectedPlan] = useState<'78' | '112' | '148'>('78');
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [monthsOfConstruction] = useState<number>(36);

  // Approximate base launch values (estimated for pre-launch illustration)
  const basePrices = {
    '78': 790000,
    '112': 1180000,
    '148': 1690000,
  };

  const currentPrice = basePrices[selectedPlan];

  const calculations = useMemo(() => {
    // 20% down payment (entrada total durante a obra)
    const totalEntry = (currentPrice * downPaymentPercent) / 100;
    // Initial signature (ato) ~ 30% of total entry
    const signalAto = totalEntry * 0.3;
    // Remainder of entry divided into 36 monthly construction installments
    const monthlyInstallment = (totalEntry - signalAto) / monthsOfConstruction;
    // Balance to finance at keys (80%)
    const finalFinancing = currentPrice - totalEntry;
    // Estimated appreciation at delivery (historically ~28% in premium Mooca launches)
    const estimatedAppreciation = currentPrice * 1.28;
    const estimatedProfit = estimatedAppreciation - currentPrice;

    return {
      totalEntry,
      signalAto,
      monthlyInstallment,
      finalFinancing,
      estimatedAppreciation,
      estimatedProfit,
    };
  }, [currentPrice, downPaymentPercent, monthsOfConstruction]);

  const formatBRL = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    });
  };

  return (
    <section id="simulador" className="py-20 lg:py-28 bg-[#0e1218] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-2">
            05. Condições de Lançamento
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Simule o fluxo de pagamento durante o período de obras.
          </h2>
          <p className="mt-3 text-neutral-400 text-base leading-relaxed">
            Aproveite a tabela de 1º lote com fluxo personalizado diretamente com a incorporadora até a entrega das chaves.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-neutral-900/90 border border-neutral-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Plan Picker */}
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-300 tracking-wider mb-2">
                  1. Escolha a metragem do apartamento
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedPlan('78')}
                    className={`py-3 px-2 rounded-lg border text-center transition-all ${
                      selectedPlan === '78'
                        ? 'border-amber-400 bg-amber-400/15 text-white font-semibold'
                        : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <div className="font-mono text-base">78 m²</div>
                    <div className="text-[11px] text-neutral-400">2 Dorms (1 Suíte)</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan('112')}
                    className={`py-3 px-2 rounded-lg border text-center transition-all ${
                      selectedPlan === '112'
                        ? 'border-amber-400 bg-amber-400/15 text-white font-semibold'
                        : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <div className="font-mono text-base">112 m²</div>
                    <div className="text-[11px] text-neutral-400">3 Suítes</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan('148')}
                    className={`py-3 px-2 rounded-lg border text-center transition-all ${
                      selectedPlan === '148'
                        ? 'border-amber-400 bg-amber-400/15 text-white font-semibold'
                        : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <div className="font-mono text-base">148 m²</div>
                    <div className="text-[11px] text-neutral-400">Penthouse Duplex</div>
                  </button>
                </div>
              </div>

              {/* Down Payment % Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono uppercase text-neutral-300 tracking-wider">
                    2. Entrada Total no Período de Obras
                  </label>
                  <span className="font-mono text-sm font-bold text-amber-400">
                    {downPaymentPercent}% do valor
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[15, 20, 30].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setDownPaymentPercent(pct)}
                      className={`py-2 text-xs font-medium rounded border transition-all ${
                        downPaymentPercent === pct
                          ? 'border-amber-400 bg-amber-400/20 text-white font-bold'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {pct}% Facilitado
                    </button>
                  ))}
                </div>
              </div>

              {/* Informative Note */}
              <div className="p-4 rounded-lg bg-neutral-950/80 border border-neutral-800/80 text-xs text-neutral-400 space-y-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Patrimônio de Afetação Garantido por Lei</span>
                </div>
                <p>
                  Obra assegurada com contas segregadas e fiscalização por comissão de compradores, garantindo segurança patrimonial total do investimento.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800 mt-6 text-xs text-neutral-500 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 shrink-0" />
              <span>Valores e fluxo sujeitos a alteração conforme disponibilidade da tabela inaugural.</span>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-[#11161f] border border-neutral-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4 mb-6">
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">
                    Valor Estimado de Lançamento (1º Lote)
                  </div>
                  <div className="font-mono text-3xl font-bold text-white tabular-nums mt-1">
                    {formatBRL(currentPrice)}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-amber-400 uppercase">36 Meses de Obra</span>
                </div>
              </div>

              {/* Flow Breakdown */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/80 border border-neutral-800">
                  <div>
                    <div className="text-xs text-neutral-400">Ato de Entrada Estimado (Sinal)</div>
                    <div className="text-[11px] text-neutral-500">Na assinatura do contrato de compra</div>
                  </div>
                  <div className="font-mono text-base font-bold text-white tabular-nums">
                    {formatBRL(calculations.signalAto)}
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/80 border border-neutral-800">
                  <div>
                    <div className="text-xs text-neutral-400">36x Parcelas Mensais durante as Obras</div>
                    <div className="text-[11px] text-neutral-500">Sem juros (apenas correção INCC)</div>
                  </div>
                  <div className="font-mono text-base font-bold text-amber-400 tabular-nums">
                    {formatBRL(calculations.monthlyInstallment)} /mês
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/80 border border-neutral-800">
                  <div>
                    <div className="text-xs text-neutral-400">Saldo Final na Entrega das Chaves</div>
                    <div className="text-[11px] text-neutral-500">Financiamento bancário pelo seu banco ou quitação</div>
                  </div>
                  <div className="font-mono text-base font-bold text-white tabular-nums">
                    {formatBRL(calculations.finalFinancing)}
                  </div>
                </div>

                {/* Investment potential badge */}
                <div className="p-3.5 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-amber-300">
                    <TrendingUp className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Potencial de Valorização até as Chaves:</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-amber-400 tabular-nums">
                    + {formatBRL(calculations.estimatedProfit)} (+28%)
                  </span>
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-6 border-t border-neutral-800 mt-6">
              <a
                href={FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded transition-all shadow-lg shadow-amber-400/20"
              >
                <Calculator className="w-4 h-4" />
                <span>Tenho Interesse e Quero Minha Simulação</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[11px] text-neutral-400 mt-2">
                Receba a análise de crédito prévia e o fluxo de pagamento detalhado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

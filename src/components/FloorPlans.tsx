import { useState } from 'react';
import { ArrowUpRight, Check, Maximize2, Bed, Bath, Car, Layers } from 'lucide-react';
import { FORMS_URL } from '../constants/assets';
import { Typology } from '../types';

const typologies: Typology[] = [
  {
    id: '78m2',
    name: 'Planta Jardim Mooca',
    size: 78,
    bedrooms: 2,
    suites: 1,
    bathrooms: 2,
    parkingSpots: 1,
    highlight: 'Ideal para jovens casais e investidores com alto potencial de valorização',
    description: 'Espaço perfeitamente otimizado com living integrado à varanda gourmet, suíte de casal espaçosa com closet e segundo dormitório flexível para home office.',
    features: [
      'Terraço gourmet com churrasqueira a carvão entregue',
      'Ponto de água quente na cozinha e banheiros',
      'Janelas com persianas de enrolar com atenuação acústica',
      'Cozinha com ventilação e iluminação natural',
      'Infraestrutura completa para 3 pontos de ar-condicionado',
      'Vaga de garagem coberta e determinada',
    ],
    dimensions: {
      living: '22,4 m²',
      terrace: '11,8 m²',
      masterSuite: '14,2 m²',
      kitchen: '7,5 m²',
    },
  },
  {
    id: '112m2',
    name: 'Planta Família Mooca',
    size: 112,
    bedrooms: 3,
    suites: 3,
    bathrooms: 4,
    parkingSpots: 2,
    highlight: 'A queridinha do projeto: 3 suítes plenas e hall social semiprivativo',
    description: 'Conceito exclusivo com circulação íntima isolada, 3 suítes plenas com banheiros ventilados, lavabo social para convidados e varanda gourmet de ponta a ponta com vista panorâmica.',
    features: [
      '3 suítes plenas independentes (privacidade total para a família)',
      'Varanda gourmet espaçosa integrada à sala de jantar e estar',
      'Lavabo social independente',
      'Suíte Master com closet amplo e bancada com cuba dupla',
      'Despensa e área de serviço separada com banheiro de apoio',
      '2 vagas cobertas e determinadas + depósito privativo no subsolo',
    ],
    dimensions: {
      living: '34,6 m²',
      terrace: '16,5 m²',
      masterSuite: '18,8 m²',
      kitchen: '10,2 m²',
    },
  },
  {
    id: '148m2',
    name: 'Penthouse Duplex Mooca',
    size: 148,
    bedrooms: 3,
    suites: 3,
    bathrooms: 5,
    parkingSpots: 2,
    highlight: 'Exclusividade máxima nos andares mais altos com terraço descoberto',
    description: 'Duplex magnífico no topo do empreendimento com pé-direito duplo no living, terraço descoberto com preparação para spa privativo e vista de 180 graus da cidade.',
    features: [
      'Pé-direito duplo no living com mezanino panorâmico',
      'Deck privativo com ponto para ofurô/spa e solarium exclusivo',
      'Churrasqueira gourmet premium com bancada de granito esculpido',
      'Elevador privativo com parada nos dois pavimentos',
      'Suíte Master com closet walk-in e banheiro com hidromassagem',
      '2 vagas com ponto individual de carregamento veicular elétrico',
    ],
    dimensions: {
      living: '48,2 m²',
      terrace: '28,4 m²',
      masterSuite: '24,0 m²',
      kitchen: '12,5 m²',
    },
  },
];

export default function FloorPlans() {
  const [activeTab, setActiveTab] = useState<string>('112m2');
  const [activeZone, setActiveZone] = useState<string | null>(null);

  const currentPlan = typologies.find((p) => p.id === activeTab) || typologies[1];

  return (
    <section id="plantas" className="py-20 lg:py-28 bg-[#0b0e13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-2">
              02. Plantas & Tipologias
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Espaços projetados com inteligência e amplitude.
            </h2>
            <p className="mt-2 text-neutral-400 text-base max-w-xl">
              Plantas flexíveis que se adaptam perfeitamente ao estilo de vida da sua família, com iluminação natural privilegiada e aproveitamento inteligente de cada metro quadrado.
            </p>
          </div>

          {/* Interactive Filter Controls (Segmented Tabs with buttons) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-neutral-900 border border-neutral-800 rounded-lg shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
            {typologies.map((plan) => (
              <button
                key={plan.id}
                onClick={() => {
                  setActiveTab(plan.id);
                  setActiveZone(null);
                }}
                className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-md transition-all whitespace-nowrap ${
                  activeTab === plan.id
                    ? 'bg-amber-400 text-neutral-950 shadow-md font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {plan.size} m² {plan.id === '112m2' && '(Destaque)'}
              </button>
            ))}
          </div>
        </div>

        {/* Plan Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Architectural Layout Representation with Interactive Zones */}
          <div className="lg:col-span-7 bg-[#0e1218] border border-neutral-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wide">
                    {currentPlan.id === '148m2' ? 'Top Floor' : 'Pavimento Tipo'}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                    {currentPlan.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-mono text-3xl font-bold text-amber-400 tabular-nums">
                    {currentPlan.size}
                  </span>
                  <span className="text-sm font-normal text-neutral-400 ml-1">m² privativos</span>
                </div>
              </div>

              {/* Interactive Floor Plan Diagram Preview (Schematic Blueprint Style) */}
              <div className="relative w-full aspect-[16/11] rounded-lg bg-neutral-950 border border-neutral-800/80 p-6 flex flex-col justify-center items-center overflow-hidden">
                {/* Subtle blueprint grid background */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 1px 1px, #d97706 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Interactive Rooms Visualization Block */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-800/60 pb-2">
                    <span className="flex items-center gap-1.5 text-amber-400/90 font-mono">
                      <Layers className="w-4 h-4" /> Layout Arquitetônico Interativo
                    </span>
                    <span className="text-[11px] text-neutral-500">Passe o cursor sobre os ambientes</span>
                  </div>

                  {/* Room Blocks */}
                  <div className="grid grid-cols-3 gap-3 my-auto py-2">
                    <button
                      type="button"
                      onMouseEnter={() => setActiveZone('living')}
                      onMouseLeave={() => setActiveZone(null)}
                      className={`p-3 rounded border text-left transition-all ${
                        activeZone === 'living'
                          ? 'border-amber-400 bg-amber-400/15 text-white'
                          : 'border-neutral-800 bg-neutral-900/80 text-neutral-300'
                      }`}
                    >
                      <div className="text-[11px] text-amber-400 font-mono">Ambiente 01</div>
                      <div className="text-xs font-semibold">Living Integrado</div>
                      <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                        {currentPlan.dimensions.living}
                      </div>
                    </button>

                    <button
                      type="button"
                      onMouseEnter={() => setActiveZone('terrace')}
                      onMouseLeave={() => setActiveZone(null)}
                      className={`p-3 rounded border text-left transition-all ${
                        activeZone === 'terrace'
                          ? 'border-amber-400 bg-amber-400/15 text-white'
                          : 'border-neutral-800 bg-neutral-900/80 text-neutral-300'
                      }`}
                    >
                      <div className="text-[11px] text-amber-400 font-mono">Ambiente 02</div>
                      <div className="text-xs font-semibold">Varanda Gourmet</div>
                      <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                        {currentPlan.dimensions.terrace}
                      </div>
                    </button>

                    <button
                      type="button"
                      onMouseEnter={() => setActiveZone('suite')}
                      onMouseLeave={() => setActiveZone(null)}
                      className={`p-3 rounded border text-left transition-all ${
                        activeZone === 'suite'
                          ? 'border-amber-400 bg-amber-400/15 text-white'
                          : 'border-neutral-800 bg-neutral-900/80 text-neutral-300'
                      }`}
                    >
                      <div className="text-[11px] text-amber-400 font-mono">Ambiente 03</div>
                      <div className="text-xs font-semibold">Suíte Master</div>
                      <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                        {currentPlan.dimensions.masterSuite}
                      </div>
                    </button>
                  </div>

                  {/* Interactive Status Bar */}
                  <div className="bg-neutral-900/90 border border-neutral-800/80 rounded px-3 py-2 text-xs flex items-center justify-between text-neutral-300">
                    <span className="truncate">
                      {activeZone === 'living' && 'Living ampliado com ventilação cruzada e vista livre.'}
                      {activeZone === 'terrace' && 'Varanda entregue com bancada de granito e churrasqueira a carvão.'}
                      {activeZone === 'suite' && 'Suíte Master com espaço para closet planejado e cama King Size.'}
                      {!activeZone && currentPlan.highlight}
                    </span>
                    <span className="text-[10px] text-amber-400 uppercase font-mono shrink-0 ml-2">
                      Norma NBR 15575
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dimension Breakdown Bar */}
            <div className="grid grid-cols-4 gap-2 pt-6 border-t border-neutral-800 mt-6 text-center">
              <div>
                <div className="text-[11px] text-neutral-400 uppercase font-mono">Living</div>
                <div className="text-sm font-semibold text-white font-mono">{currentPlan.dimensions.living}</div>
              </div>
              <div>
                <div className="text-[11px] text-neutral-400 uppercase font-mono">Terraço</div>
                <div className="text-sm font-semibold text-white font-mono">{currentPlan.dimensions.terrace}</div>
              </div>
              <div>
                <div className="text-[11px] text-neutral-400 uppercase font-mono">Suíte Master</div>
                <div className="text-sm font-semibold text-white font-mono">{currentPlan.dimensions.masterSuite}</div>
              </div>
              <div>
                <div className="text-[11px] text-neutral-400 uppercase font-mono">Cozinha</div>
                <div className="text-sm font-semibold text-white font-mono">{currentPlan.dimensions.kitchen}</div>
              </div>
            </div>
          </div>

          {/* Details & Inclusions Column */}
          <div className="lg:col-span-5 bg-[#0e1218] border border-neutral-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Quick Specs Icons */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-center">
                  <Bed className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <div className="text-xs text-neutral-400">Dormitórios</div>
                  <div className="text-sm font-bold text-white font-mono">
                    {currentPlan.bedrooms} ({currentPlan.suites} {currentPlan.suites > 1 ? 'suítes' : 'suíte'})
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-center">
                  <Bath className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <div className="text-xs text-neutral-400">Banheiros</div>
                  <div className="text-sm font-bold text-white font-mono">{currentPlan.bathrooms} banheiros</div>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-center">
                  <Car className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <div className="text-xs text-neutral-400">Garagem</div>
                  <div className="text-sm font-bold text-white font-mono">{currentPlan.parkingSpots} {currentPlan.parkingSpots > 1 ? 'vagas' : 'vaga'}</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Diferenciais desta Tipologia
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {currentPlan.description}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2.5">
                {currentPlan.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <div className="p-0.5 rounded-full bg-amber-400/20 text-amber-400 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct CTA leading to Forms */}
            <div className="pt-8 border-t border-neutral-800 mt-6">
              <a
                href={FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded transition-all shadow-md hover:shadow-amber-400/20"
              >
                <span>Tenho Interesse na Planta {currentPlan.size}m²</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[11px] text-neutral-500 mt-2">
                Plantas humanizadas em alta definição enviadas via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

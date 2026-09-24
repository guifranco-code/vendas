import { useState } from 'react';
import { ArrowUpRight, MapPin, Clock, Utensils, ShoppingBag, GraduationCap, Train } from 'lucide-react';
import { FORMS_URL } from '../constants/assets';
import { LocationPoint } from '../types';

const locations: LocationPoint[] = [
  {
    id: '1',
    name: 'Clube Atlético Juventus',
    category: 'lazer',
    time: '3 min',
    distance: '350m',
    detail: 'O coração social e esportivo tradicional da Mooca com piscinas, quadras e eventos.',
  },
  {
    id: '2',
    name: 'Mooca Plaza Shopping',
    category: 'lazer',
    time: '5 min',
    distance: '1,8 km',
    detail: 'Mais de 230 lojas, cinema Cinemark, polo gastronômico e serviços completos.',
  },
  {
    id: '3',
    name: 'Confeitaria Di Cunto & Cantinas Tradicionais',
    category: 'gastronomia',
    time: '4 min',
    distance: '900m',
    detail: 'Tradição centenária paulistana com os melhores cannolis, massas artesanais e pães.',
  },
  {
    id: '4',
    name: 'Don Carlini & Pizzaria São Pedro',
    category: 'gastronomia',
    time: '5 min',
    distance: '1,2 km',
    detail: 'Excelência gastronômica italiana consagrada em ambiente acolhedor.',
  },
  {
    id: '5',
    name: 'Hospital São Cristóvão & CEMA',
    category: 'saude',
    time: '4 min',
    distance: '1,1 km',
    detail: 'Referência em medicina diagnóstica, pronto-atendimento 24 horas e maternidade.',
  },
  {
    id: '6',
    name: 'Universidade São Judas & Colégios Bilíngues',
    category: 'saude',
    time: '6 min',
    distance: '1,5 km',
    detail: 'Campus universitário de excelência e conceituadas escolas tradicionais e bilíngues.',
  },
  {
    id: '7',
    name: 'Estação Juventus-Mooca & Metrô Bresser',
    category: 'mobilidade',
    time: '7 min',
    distance: '1,9 km',
    detail: 'Conexão rápida com a Linha Vermelha do Metrô e Linha 10-Turquesa CPTM.',
  },
  {
    id: '8',
    name: 'Avenida Paulista & Jardins',
    category: 'mobilidade',
    time: '15 min',
    distance: '6,5 km',
    detail: 'Acesso facilitado via Radial Leste, Av. do Estado e corredor Paes de Barros.',
  },
];

export default function Location() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'gastronomia' | 'lazer' | 'saude' | 'mobilidade'>('all');

  const filteredLocations = activeCategory === 'all'
    ? locations
    : locations.filter((loc) => loc.category === activeCategory);

  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-[#0b0e13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-2">
            04. Localização Privilegiada
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white text-balance">
            Tudo o que você ama na Mooca a poucos passos de casa.
          </h2>
          <p className="mt-3 text-neutral-400 text-base leading-relaxed">
            Situado no quadrilátero mais nobre e tranquilo do Alto da Mooca, com fácil acesso às principais avenidas da cidade e cercado pela rica história e conveniência do bairro.
          </p>
        </div>

        {/* Interactive Category Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-neutral-900 border border-neutral-800 rounded-lg shrink-0 overflow-x-auto max-w-full mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-amber-400 text-neutral-950 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Todos os Pontos
          </button>
          <button
            onClick={() => setActiveCategory('gastronomia')}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
              activeCategory === 'gastronomia'
                ? 'bg-amber-400 text-neutral-950 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>Gastronomia Típica</span>
          </button>
          <button
            onClick={() => setActiveCategory('lazer')}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
              activeCategory === 'lazer'
                ? 'bg-amber-400 text-neutral-950 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Shopping & Lazer</span>
          </button>
          <button
            onClick={() => setActiveCategory('saude')}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
              activeCategory === 'saude'
                ? 'bg-amber-400 text-neutral-950 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Saúde & Ensino</span>
          </button>
          <button
            onClick={() => setActiveCategory('mobilidade')}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
              activeCategory === 'mobilidade'
                ? 'bg-amber-400 text-neutral-950 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Train className="w-3.5 h-3.5" />
            <span>Mobilidade & Vias</span>
          </button>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                  <span className="flex items-center gap-1 text-amber-400 font-mono font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {loc.time}
                  </span>
                  <span className="font-mono text-neutral-400">{loc.distance}</span>
                </div>
                <h4 className="text-base font-semibold text-white">
                  {loc.name}
                </h4>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                  {loc.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] text-amber-400/90 font-mono">
                Região Alto da Mooca
              </div>
            </div>
          ))}
        </div>

        {/* Location Callout Banner */}
        <div className="mt-10 rounded-xl bg-[#121720] border border-neutral-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Endereço Privilegiado no Alto da Mooca
              </h4>
              <p className="text-sm text-neutral-400 mt-1">
                Rua Juventus x Rua Visconde de Inhomerim — Próximo à Av. Paes de Barros.
              </p>
              <div className="text-xs text-amber-400/90 font-mono mt-1">
                Agendamento prévio necessário para atendimento personalizado no futuro estande.
              </div>
            </div>
          </div>

          <a
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded whitespace-nowrap transition-colors shrink-0"
          >
            <span>Tenho Interesse na Localização</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

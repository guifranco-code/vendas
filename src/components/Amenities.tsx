import { useState } from 'react';
import { ArrowUpRight, Waves, Wine, Dumbbell, Coffee, Flame, HeartHandshake, Eye } from 'lucide-react';
import { FORMS_URL, IMAGES } from '../constants/assets';

interface AmenityItem {
  id: string;
  title: string;
  category: 'rooftop' | 'wellness' | 'social' | 'sports';
  description: string;
  image?: string;
  badge: string;
}

const amenitiesList: AmenityItem[] = [
  {
    id: 'rooftop-pool',
    title: 'Sky Pool & Deck no 28º Andar',
    category: 'rooftop',
    description: 'Piscina com borda infinita aquecida e solarium com espreguiçadeiras, oferecendo uma das vistas mais espetaculares do skyline de São Paulo.',
    image: IMAGES.rooftopPool,
    badge: 'Vista 360°',
  },
  {
    id: 'lounge-gourmet',
    title: 'Espaço Gourmet & Adega Privativa',
    category: 'social',
    description: 'Ambiente climatizado com ilha de mármore italiano, churrasqueira embutida, sonorização e adega com armários individuais com chave.',
    image: IMAGES.gourmetLounge,
    badge: 'Assinado por Arquitetos',
  },
  {
    id: 'fitness-center',
    title: 'Fitness Center High Performance',
    category: 'wellness',
    description: 'Espaço de 140m² equipado com aparelhos de última geração para musculação, cardio e área externa para treinos funcionais.',
    badge: 'Equipamentos Premium',
  },
  {
    id: 'spa-wellness',
    title: 'Spa com Sauna e Sala de Massagem',
    category: 'wellness',
    description: 'Área de relaxamento completa com sauna úmida, ducha escocesa e sala privativa para atendimento com massoterapeutas.',
    badge: 'Tranquilidade Máxima',
  },
  {
    id: 'beach-tennis',
    title: 'Quadra de Areia & Beach Tennis',
    category: 'sports',
    description: 'Quadra de areia oficial para prática de beach tennis, futevôlei e vôlei de praia com iluminação em LED para jogos noturnos.',
    badge: 'Esporte ao Ar Livre',
  },
  {
    id: 'coworking-lounge',
    title: 'Coworking com Cabines para Call',
    category: 'social',
    description: 'Ambiente corporativo de alto nível com internet de ultravelocidade, sala de reunião para 8 pessoas e phone booths acústicos.',
    badge: 'Home Office Dedicado',
  },
];

export default function Amenities({ onOpenImage }: { onOpenImage?: (src: string, title: string) => void }) {
  const [filter, setFilter] = useState<'all' | 'rooftop' | 'wellness' | 'social' | 'sports'>('all');

  const filteredAmenities = filter === 'all'
    ? amenitiesList
    : amenitiesList.filter((a) => a.category === filter);

  return (
    <section id="lazer" className="py-20 lg:py-28 bg-[#0e1218] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-2">
              03. Lazer de Resort
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white text-balance">
              Mais de 25 itens de lazer entregues equipados e decorados.
            </h2>
            <p className="mt-2 text-neutral-400 text-base max-w-xl">
              Um verdadeiro clube privativo suspenso e no térreo, projetado para proporcionar bem-estar, saúde e convivência sem precisar sair de casa.
            </p>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1.5 bg-neutral-900 border border-neutral-800 rounded-lg shrink-0 overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-amber-400 text-neutral-950 font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Todos os Espaços
            </button>
            <button
              onClick={() => setFilter('rooftop')}
              className={`px-3 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                filter === 'rooftop'
                  ? 'bg-amber-400 text-neutral-950 font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Rooftop 28º
            </button>
            <button
              onClick={() => setFilter('wellness')}
              className={`px-3 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                filter === 'wellness'
                  ? 'bg-amber-400 text-neutral-950 font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Bem-Estar & Fitness
            </button>
            <button
              onClick={() => setFilter('social')}
              className={`px-3 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                filter === 'social'
                  ? 'bg-amber-400 text-neutral-950 font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Celebração & Convívio
            </button>
            <button
              onClick={() => setFilter('sports')}
              className={`px-3 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                filter === 'sports'
                  ? 'bg-amber-400 text-neutral-950 font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Esportes
            </button>
          </div>
        </div>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Main Visual Asset 1: Rooftop Pool (Col-Span-7 on Desktop) */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden group flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
              <img
                src={IMAGES.rooftopPool}
                alt="Piscina com borda infinita no rooftop com vista panorâmica"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              {onOpenImage && (
                <button
                  type="button"
                  onClick={() => onOpenImage(IMAGES.rooftopPool, 'Sky Pool & Deck no 28º Andar')}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-amber-400 hover:text-neutral-950 transition-colors backdrop-blur-sm"
                  aria-label="Ver imagem em tamanho ampliado"
                >
                  <Eye className="w-4 h-4" />
                </button>
              )}

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase mb-1">
                  <span>Rooftop Sky Club</span>
                  <span aria-hidden="true">·</span>
                  <span>28º Pavimento</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Sky Pool com borda infinita e solarium panorâmico
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-neutral-400 leading-relaxed">
                Um refúgio acima da agitação da metrópole. Nadar admirando as luzes de São Paulo ou relaxar nas espreguiçadeiras com privacidade incomparável.
              </p>
              <div className="mt-4 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-300">
                <span className="flex items-center gap-1.5 text-amber-400 font-mono">
                  <Waves className="w-4 h-4" /> Borda Infinita Aquecida
                </span>
                <span className="font-mono text-neutral-400">Entregue Climatizada</span>
              </div>
            </div>
          </div>

          {/* Main Visual Asset 2: Gourmet Lounge (Col-Span-5 on Desktop) */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden group flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
              <img
                src={IMAGES.gourmetLounge}
                alt="Espaço gourmet com adega e bancada de pedra"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              {onOpenImage && (
                <button
                  type="button"
                  onClick={() => onOpenImage(IMAGES.gourmetLounge, 'Espaço Gourmet & Adega Privativa')}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-amber-400 hover:text-neutral-950 transition-colors backdrop-blur-sm"
                  aria-label="Ver imagem em tamanho ampliado"
                >
                  <Eye className="w-4 h-4" />
                </button>
              )}

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase mb-1">
                  <span>Gastronomia & Enologia</span>
                  <span aria-hidden="true">·</span>
                  <span>Privativo</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Espaço Gourmet & Adega
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-neutral-400 leading-relaxed">
                Ambiente requintado e isolamento acústico especial para jantares com amigos e degustação de rótulos selecionados na sua própria adega.
              </p>
              <div className="mt-4 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-300">
                <span className="flex items-center gap-1.5 text-amber-400 font-mono">
                  <Wine className="w-4 h-4" /> Adega Climatizada
                </span>
                <span className="font-mono text-neutral-400">Capacidade 20 convidados</span>
              </div>
            </div>
          </div>

          {/* Secondary Bento Grid Items */}
          <div className="lg:col-span-4 bg-neutral-900/70 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
            <div className="p-2.5 rounded bg-amber-400/10 text-amber-400 w-fit mb-4">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-amber-400 uppercase">Fitness Pro</div>
            <h4 className="text-lg font-semibold text-white mt-1">Academia Completa</h4>
            <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
              Equipada com esteiras, elípticos, estações de musculação e halteres de padrão internacional, além de sala de pilates e spinning.
            </p>
          </div>

          <div className="lg:col-span-4 bg-neutral-900/70 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
            <div className="p-2.5 rounded bg-amber-400/10 text-amber-400 w-fit mb-4">
              <Flame className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-amber-400 uppercase">Relaxamento</div>
            <h4 className="text-lg font-semibold text-white mt-1">Spa & Sauna Úmida</h4>
            <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
              Recupere as energias após a rotina diária no spa com sauna a vapor, sala de descanso com espreguiçadeiras e vestiários integrados.
            </p>
          </div>

          <div className="lg:col-span-4 bg-neutral-900/70 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
            <div className="p-2.5 rounded bg-amber-400/10 text-amber-400 w-fit mb-4">
              <Coffee className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-amber-400 uppercase">Produtividade</div>
            <h4 className="text-lg font-semibold text-white mt-1">Coworking Privativo</h4>
            <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
              Estrutura profissional com cabines individuais para chamadas sem interrupções, sala de reuniões e conexão rápida dedicada.
            </p>
          </div>
        </div>

        {/* Additional items list & Call to action */}
        <div className="mt-12 p-6 sm:p-8 bg-neutral-900/80 border border-neutral-800 rounded-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-serif font-bold text-white">
              Deseja conhecer todos os 25 itens da área comum?
            </h4>
            <p className="text-sm text-neutral-400 mt-1">
              Inclui brinquedoteca, playground externo, pet place com agility, quadra de areia e salão de festas com terraço.
            </p>
          </div>
          <a
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded whitespace-nowrap transition-colors"
          >
            <span>Tenho Interesse no Lazer Completo</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

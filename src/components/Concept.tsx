import { ArrowUpRight, Sparkles, Shield, Flame, Compass } from 'lucide-react';
import { FORMS_URL, IMAGES } from '../constants/assets';

export default function Concept() {
  const pillars = [
    {
      icon: Flame,
      title: 'Terraço Gourmet com Churrasqueira a Carvão',
      desc: 'Integração fluida entre living e varanda ampla, projetada para momentos inesquecíveis em família e celebrações com amigos.',
    },
    {
      icon: Shield,
      title: 'Privacidade e Conforto Acústico Superior',
      desc: 'Manta acústica nas lajes dos dormitórios e salas, tubulações silenciosas e caixilhos com tratamento antirruído.',
    },
    {
      icon: Compass,
      title: 'Torre Única em Terreno de Mais de 3.000m²',
      desc: 'Apenas uma torre majestosa com recuos generosos, paisagismo tropical assinado e ventilação cruzada natural.',
    },
    {
      icon: Sparkles,
      title: 'Tecnologia & Infraestrutura Pronta',
      desc: 'Pontos de ar-condicionado em todos os cômodos, fechadura eletrônica, tomada USB e infraestrutura para carros elétricos.',
    },
  ];

  return (
    <section id="projeto" className="py-20 lg:py-28 bg-[#0e1218] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-2">
            01. O Conceito
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white text-balance">
            O calor da Mooca de sempre com a sofisticação que o seu tempo exige.
          </h2>
          <p className="mt-4 text-neutral-400 text-base leading-relaxed">
            Viver na Mooca é abraçar o melhor da gastronomia tradicional, as caminhadas pelas ruas arborizadas e a segurança de um bairro histórico, agora aliado à mais avançada engenharia residencial de São Paulo.
          </p>
        </div>

        {/* Asymmetrical Grid: Image Spotlight + Editorial Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Visual Asset: Living room with gourmet balcony */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900 aspect-[16/10]">
              <img
                src={IMAGES.livingBalcony}
                alt="Living integrado com terraço gourmet e vista para a Mooca"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  Perspectiva Ilustrada
                </span>
                <p className="text-white font-serif text-lg sm:text-xl font-medium mt-1">
                  Living integrado com pé-direito imponente e vista livre para o horizonte paulistano
                </p>
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-lg bg-neutral-900/60 border border-neutral-800/80 hover:border-amber-400/40 transition-colors duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {pillar.title}
                        </h3>
                        <p className="mt-1 text-sm text-neutral-400 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <a
                href={FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors w-full sm:w-auto justify-center"
              >
                <span>Solicitar Book Digital Completo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

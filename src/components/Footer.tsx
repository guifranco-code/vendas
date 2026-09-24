import { ArrowUpRight } from 'lucide-react';
import { FORMS_URL } from '../constants/assets';

export default function Footer() {
  return (
    <footer className="bg-[#07090c] border-t border-neutral-900 text-neutral-400 text-xs py-14 pb-24 lg:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Wordmark & About */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-display text-lg font-bold tracking-widest text-neutral-100 uppercase">
              Reserva Mooca
            </span>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-md">
              Lançamento residencial de alto padrão no Alto da Mooca, São Paulo. Apartamentos com 2 e 3 suítes, lazer no rooftop e acabamentos premium em torre única.
            </p>
            <div className="pt-2">
              <a
                href={FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                <span>Acessar formulário de interesse oficial</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div>
            <div className="text-xs font-mono uppercase text-neutral-300 tracking-wider mb-3">
              Navegação
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#projeto" className="hover:text-amber-400 transition-colors">
                  O Projeto
                </a>
              </li>
              <li>
                <a href="#plantas" className="hover:text-amber-400 transition-colors">
                  Plantas & Tipologias
                </a>
              </li>
              <li>
                <a href="#lazer" className="hover:text-amber-400 transition-colors">
                  Lazer & Rooftop
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">
                  Localização na Mooca
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-amber-400 transition-colors">
                  Simulador de Fluxo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Real Estate Info */}
          <div>
            <div className="text-xs font-mono uppercase text-neutral-300 tracking-wider mb-3">
              Atendimento
            </div>
            <div className="space-y-2 text-neutral-400">
              <p>Alto da Mooca — São Paulo, SP</p>
              <p>Segunda a Domingo das 9h às 19h</p>
              <div className="pt-2">
                <a
                  href={FORMS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded text-neutral-200 hover:text-white inline-block transition-colors"
                >
                  Cadastre seu contato
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Memorial de Incorporação */}
        <div className="pt-8 border-t border-neutral-900 space-y-3 text-[11px] text-neutral-400 leading-relaxed">
          <p>
            *Todas as imagens, perspectivas e ilustrações artísticas apresentadas são preliminares de lançamento e possuem caráter meramente ilustrativo para divulgação. Os móveis, decorações, equipamentos e acabamentos retratados nas plantas e áreas de lazer poderão sofrer pequenas variações conforme o projeto executivo e memorial descritivo da incorporação.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-3 border-t border-neutral-900/60 text-neutral-400">
            <div>
              © {new Date().getFullYear()} Reserva Mooca Residencial. Todos os direitos reservados.
            </div>
            <div className="font-mono text-[10px]">
              Memorial de Incorporação prenotado no 7º Oficial de Registro de Imóveis de São Paulo.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { ArrowUpRight } from 'lucide-react';
import { FORMS_URL } from '../constants/assets';

export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0e1218]/95 backdrop-blur-md border-t border-neutral-800 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3">
      <div className="leading-tight">
        <div className="text-[11px] font-mono text-amber-400 uppercase">Lançamento Mooca</div>
        <div className="text-xs font-semibold text-white truncate max-w-[170px]">2 e 3 Suítes · 78 a 148m²</div>
      </div>
      <a
        href={FORMS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded shrink-0 whitespace-nowrap shadow-md"
      >
        <span>Tenho Interesse</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

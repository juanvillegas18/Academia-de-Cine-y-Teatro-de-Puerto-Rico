import { CONTENT } from '../constants';

export default function Footer() {
  return (
    <footer className="py-12 bg-brand-dark text-white/50 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-white font-serif text-xl mb-1">{CONTENT.name}</p>
            <p className="text-xs uppercase tracking-widest">San Juan, Puerto Rico</p>
          </div>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium">
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Contact</a>
          </div>

          <p className="text-[10px] uppercase tracking-widest">
            © 2026 {CONTENT.acronym}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

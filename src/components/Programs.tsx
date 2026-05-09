import { motion } from 'motion/react';
import { Clapperboard, BookOpen, Users, Briefcase, Ticket, ArrowRight } from 'lucide-react';
import { CONTENT } from '../constants';

const ICON_MAP = {
  'clapperboard': Clapperboard,
  'book-open': BookOpen,
  'users': Users,
  'briefcase': Briefcase,
  'ticket': Ticket,
};

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif font-black text-white/[0.02] pointer-events-none select-none z-0">
        CURRÍCULO
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-red font-mono text-xs uppercase tracking-widest mb-4 block">Oferta Académica</span>
            <h2 className="text-5xl md:text-7xl font-serif">Nuestras Áreas <br />de <span className="italic text-brand-red">Especialización</span></h2>
          </motion.div>
          
          <p className="text-gray-400 max-w-sm mb-4">
            Un ecosistema integral diseñado para nutrir el talento en cada etapa de su desarrollo profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTENT.programs.map((program, idx) => {
            const Icon = ICON_MAP[program.icon as keyof typeof ICON_MAP] || BookOpen;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-brand-red/10 hover:border-brand-red/30 transition-all duration-500 cursor-pointer"
              >
                <div className="mb-8 w-12 h-12 rounded-2xl bg-brand-red/20 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-brand-red transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {program.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                  Ver detalle <ArrowRight size={14} className="text-brand-red" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

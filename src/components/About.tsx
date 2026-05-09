import { motion } from 'motion/react';
import { CONTENT } from '../constants';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-cream border-b border-brand-dark/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-template-columns: 1fr 1.5fr gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1000" 
                alt="Acting Class" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Artistic border element */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-brand-red rounded-[2rem] -z-10" />
            
            <div className="absolute -bottom-8 -right-8 bg-brand-red text-white p-8 rounded-2xl shadow-xl z-20">
              <p className="font-serif text-3xl leading-none">20+</p>
              <p className="text-[10px] uppercase tracking-widest mt-2 whitespace-nowrap opacity-80">Años de Excelencia</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-red font-mono text-xs uppercase tracking-widest mb-4 block">Resumen Ejecutivo</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              Motor de <span className="italic">innovación</span> y desarrollo cultural.
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-brand-red first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                {CONTENT.summary}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-brand-dark/10 pt-8">
              <div>
                <h4 className="font-serif text-xl mb-2">Misión</h4>
                <p className="text-sm text-gray-600">Formar profesionales de las artes escénicas capaces de liderar la industria creativa.</p>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2">Visión</h4>
                <p className="text-sm text-gray-600">Ser el referente máximo de la Economía Naranja en el Caribe.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { CONTENT } from '../constants';

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-24">
          {/* Creative Industries */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-red font-mono text-xs uppercase tracking-widest mb-4 block">Aporte a la Industria</span>
              <h2 className="text-5xl font-serif mb-8 leading-tight">Industrias <span className="italic">Creativas</span></h2>
              <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-brand-red pl-8">
                {CONTENT.impact.creativeIndustries}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden aspect-video shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200" 
                alt="Theater Production" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Orange Economy - Bold Visual Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="orange-gradient text-white p-12 md:p-24 rounded-[4rem] relative overflow-hidden"
          >
            {/* Background Texture/Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="max-w-4xl relative z-10">
              <span className="text-white/80 font-mono text-xs uppercase tracking-widest mb-6 block">El Poder de la Creatividad</span>
              <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-[0.85] tracking-tighter">
                ECONOMÍA <br /> <span className="italic opacity-80">NARANJA</span>
              </h2>
              <p className="text-2xl md:text-3xl font-light leading-snug">
                {CONTENT.impact.orangeEconomy}
              </p>
              
              <div className="mt-16 flex flex-wrap gap-12">
                <div>
                  <p className="text-sm uppercase tracking-widest mb-1 opacity-60">Impacto Anual</p>
                  <p className="text-4xl font-serif">500+</p>
                  <p className="text-xs opacity-60">Talentos Formados</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest mb-1 opacity-60">Ecosistema</p>
                  <p className="text-4xl font-serif">120+</p>
                  <p className="text-xs opacity-60">Alianzas Activas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

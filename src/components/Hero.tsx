import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { CONTENT } from '../constants';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image Overlay */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
      >
        <img 
          src="https://images.unsplash.com/photo-1503095394537-8c5824c63b4a?auto=format&fit=crop&q=80&w=2000" 
          alt="Stage Theater" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/20 to-brand-dark" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ opacity }}
        >
          <span className="text-brand-red font-medium tracking-[0.3em] uppercase text-xs mb-6 block">
            {CONTENT.name}
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-serif mb-8 leading-[0.9] tracking-tighter">
            EL ARTE DE <br /> <span className="text-brand-red italic underline decoration-1 underline-offset-8">REINVENTAR</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-10 font-light leading-relaxed">
            Unificando el Conservatorio de Artes Escénicas como el epicentro de la Economía Naranja en el Caribe.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-12 py-4 bg-brand-red text-white rounded-full font-medium hover:bg-white hover:text-brand-red transition-all duration-300">
              Certificación 2026
            </button>
            <button className="px-8 py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300">
              Conoce el CAE
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-widest">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-orange to-transparent" />
      </motion.div>
    </section>
  );
}

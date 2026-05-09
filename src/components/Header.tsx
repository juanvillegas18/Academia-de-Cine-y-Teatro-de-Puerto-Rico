import { motion } from 'motion/react';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-4 group">
          <div className="w-1 h-12 bg-brand-red group-hover:h-14 transition-all duration-500" />
          <div className="flex flex-col leading-none">
            <span className="text-[10px] text-white/60 tracking-[0.3em] uppercase">Academia de</span>
            <span className="text-xl lg:text-2xl text-white font-serif font-bold tracking-tighter uppercase">Cine y Teatro</span>
            <span className="text-[10px] text-brand-red tracking-[0.2em] font-medium uppercase mt-1">De Puerto Rico</span>
          </div>
        </a>
        
        <nav className="hidden lg:flex items-center gap-8">
          {['About', 'Programs', 'Impact', 'Faculty', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/60 hover:text-white transition-colors text-[10px] font-medium uppercase tracking-[0.2em]"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block px-6 py-2 border border-brand-red text-white hover:bg-brand-red rounded-full text-[10px] font-medium uppercase tracking-widest transition-all duration-300">
            Admisiones 2026
          </button>
          <div className="w-8 h-8 rounded-full border border-white/20 flex flex-col items-center justify-center gap-1 cursor-pointer group hover:border-brand-red transition-colors">
            <div className="w-4 h-[1px] bg-white group-hover:bg-brand-red transition-colors" />
            <div className="w-4 h-[1px] bg-white group-hover:bg-brand-red transition-colors" />
          </div>
        </div>
      </div>
    </motion.header>
  );
}

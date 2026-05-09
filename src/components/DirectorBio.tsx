import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { CONTENT } from '../constants';
import { ChevronDown, Award, BookOpen, Star } from 'lucide-react';

export default function DirectorBio() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-12 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between p-8 bg-white border border-brand-dark/5 rounded-3xl shadow-sm hover:shadow-md transition-all duration-500 group"
          >
            <div className="flex items-center gap-6 text-left">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                 <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                  alt={CONTENT.director.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-brand-dark">{CONTENT.director.name}</h3>
                <p className="text-xs text-brand-red uppercase tracking-widest font-medium mt-1">{CONTENT.director.title}</p>
              </div>
            </div>
            <motion.div 
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark/30 group-hover:text-brand-red group-hover:border-brand-red transition-all"
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="overflow-hidden"
              >
                <div className="p-8 md:p-12 bg-white border-x border-b border-brand-dark/5 rounded-b-3xl">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      {CONTENT.director.bio.map((para, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed">
                          {para}
                        </p>
                      ))}
                      <p className="text-gray-600 leading-relaxed font-medium">
                        Wilderman combina su maestría actoral con el desarrollo organizacional, aplicando técnicas de comunicación y presencia ejecutiva en la formación de nuevos talentos y líderes de alto impacto.
                      </p>
                    </div>
                    
                    <div className="space-y-8">
                      <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-dark/40 flex items-center gap-2">
                        <Award size={14} className="text-brand-red" /> Logros Destacados
                      </h4>
                      <ul className="space-y-6">
                        {CONTENT.director.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-4 group/item">
                            <div className="mt-1 w-5 h-5 rounded-full border border-brand-red/30 flex items-center justify-center shrink-0 group-hover/item:bg-brand-red group-hover/item:text-white transition-colors">
                              <Star size={10} className="text-brand-red group-hover/item:text-white" />
                            </div>
                            <p className="text-sm text-gray-700 font-medium">{achievement}</p>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-6 border-t border-brand-dark/5">
                        <div className="flex items-center gap-4 text-brand-dark/40">
                          <BookOpen size={16} />
                          <span className="text-[10px] uppercase tracking-widest font-bold">Trayectoría Internacional</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

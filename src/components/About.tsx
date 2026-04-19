import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 bg-[#f0e6ce] text-[#1a1209]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        
        {/* Images / Visuals */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 relative"
        >
          <div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-[32px] relative z-10 bg-[#e8c97e]">
            <img 
              src="https://picsum.photos/seed/dada-bar-laterite/800/1000?blur=1" 
              alt="Dada Bar Interior" 
              className="w-full h-full object-cover opacity-90 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative offset block */}
          <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square rounded-[32px] border border-[#7c2d12] z-0" />
        </motion.div>

        {/* Text */ }
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 space-y-8"
        >
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-12 bg-[#7c2d12]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#7c2d12]">Our Story</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
            A local haven built on <span className="italic text-[#7c2d12]">laterite</span> and tradition.
          </h2>
          
          <div className="space-y-6 font-serif text-lg md:text-xl text-[#1a1209]/80 leading-relaxed">
            <p>
              Tucked away in the quiet lanes of Nedora, Colvale, Dada Bar & Restaurant has been serving the neighborhood with honest food, cold drinks, and a welcoming atmosphere.
            </p>
            <p>
              We believe in the old Goan way—where meals are unhurried, the feni is poured generously, and strangers become friends across the table. Whether you're stopping by for a quick bite or settling in for the evening, there's always a seat for you.
            </p>
          </div>
          
          <div className="pt-4 flex items-center gap-12">
            <div>
               <div className="font-display text-4xl text-[#7c2d12] mb-1 hover:scale-105 transition-transform origin-left">Est.</div>
               <div className="font-mono text-xs uppercase tracking-widest text-[#1a1209]/60">Serving Colvale</div>
            </div>
            <div>
               <div className="font-display text-4xl text-[#7c2d12] mb-1 hover:scale-105 transition-transform origin-left">Daily</div>
               <div className="font-mono text-xs uppercase tracking-widest text-[#1a1209]/60">Fresh Ingredients</div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

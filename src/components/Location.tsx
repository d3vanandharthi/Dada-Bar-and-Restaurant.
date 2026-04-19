import { motion } from 'motion/react';

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-40 px-6 bg-[#1a1209] text-[#f0e6ce]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Info Column */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/3 flex flex-col justify-between"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-12">
              Drop <span className="italic text-[#e8c97e]">By</span>
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-[#c87941] mb-3">Location</h3>
                <p className="font-serif text-lg text-[#f0e6ce]/80 leading-relaxed">
                  Dada Bar & Restaurant<br/>
                  Nedora, Colvale<br/>
                  North Goa, Goa 403513<br/>
                  India
                </p>
              </div>

              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-[#c87941] mb-3">Hours</h3>
                <ul className="font-serif text-lg text-[#f0e6ce]/80 space-y-2">
                  <li className="flex justify-between border-b border-[#f0e6ce]/10 pb-2">
                    <span>Monday &ndash; Sunday</span>
                    <span>11:00 AM &ndash; 11:00 PM</span>
                  </li>
                  <li className="text-sm text-[#f0e6ce]/50 pt-2 italic">
                    Kitchen closes at 10:30 PM.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-[#c87941] mb-3">Contact</h3>
                <a href="tel:+919876543210" className="font-serif text-xl text-[#e8c97e] hover:text-[#c87941] transition-colors">
                  +91 98765 43210
                </a>
                <p className="font-serif text-sm text-[#f0e6ce]/50 mt-2">
                  For large groups or special requests, please call ahead.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Column */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-2/3"
        >
          <div className="w-full h-[500px] lg:h-[700px] rounded-[32px] overflow-hidden border border-[#c87941]/30 relative bg-[#2a1d10]">
            {/* Google Maps Embed - Coordinates around Colvale, Goa */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.0841280388916!2d73.837811!3d15.6300000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM3JzQ4LjAiTiA3M8KwNTAnMTYuMSJF!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              className="grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              title="Dada Bar & Restaurant Map"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

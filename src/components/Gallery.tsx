import { motion } from 'motion/react';

export default function Gallery() {
  const photos = [
    { src: "https://picsum.photos/seed/dada-bar-drinks/600/800", alt: "Cold beers", aspect: "aspect-[3/4]" },
    { src: "https://picsum.photos/seed/dada-bar-food/800/600", alt: "Goan fish thali", aspect: "aspect-[4/3]" },
    { src: "https://picsum.photos/seed/dada-bar-vibe/800/800", alt: "Evening ambiance at Dada Bar", aspect: "aspect-square" },
  ];

  return (
    <section id="gallery" className="py-24 md:py-40 px-6 bg-[#f0e6ce] text-[#1a1209]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#7c2d12] mb-4 block">The Ambiance</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Good times, <br/><span className="italic text-[#7c2d12]">no pretension.</span>
            </h2>
          </div>
          <p className="font-serif text-lg md:text-xl text-[#1a1209]/70 max-w-sm leading-relaxed">
            Where the music is just loud enough, the breeze flows through, and every evening ends with a story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-center">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full overflow-hidden rounded-[24px] ${photo.aspect} bg-[#e8c97e]`}
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

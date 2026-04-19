import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const Fireflies = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: { x: number; y: number; r: number; dx: number; dy: number; o: number; dod: number }[] = [];
    
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        o: Math.random(),
        dod: (Math.random() * 0.02) - 0.01,
      });
    }

    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        
        // Amber glowing effect
        ctx.fillStyle = `rgba(200, 121, 65, ${p.o})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#c87941';
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        p.o += p.dod;

        if (p.o > 1 || p.o < 0) p.dod = -p.dod;
        
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      });
      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Leaf SVG
  const Leaf = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
      <path d="M10,90 C10,90 20,40 50,20 C80,0 90,10 90,10 C90,10 80,60 50,80 C20,100 10,90 10,90 Z" />
      <path d="M10,90 L90,10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
    </svg>
  );

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-[#1a1209]">
      {/* Background layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2a1d10] to-[#1a1209] z-0" />
      <Fireflies />

      {/* Swaying Leaves */}
      <motion.div 
        animate={{ rotate: [-2, 2, -2] }} 
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute -top-10 -left-10 w-48 h-48 opacity-10 text-[#2d4a1e] z-0 blur-[2px]"
      >
        <Leaf />
      </motion.div>
      <motion.div 
        animate={{ rotate: [2, -2, 2] }} 
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-20 -right-10 w-64 h-64 opacity-10 text-[#2d4a1e] z-0 blur-[3px]"
      >
        <Leaf className="transform scale-x-[-1]" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl pt-20"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#c87941] border flex items-center gap-4 border-[#c87941]/30 py-2 px-6 rounded-full">
            <span className="w-1.5 h-1.5 bg-[#c87941] rounded-full animate-pulse" />
            Nedora, Colvale
          </span>
        </motion.div>

        <motion.h1 
          className="font-display font-medium text-6xl md:text-8xl lg:text-[7.5rem] tracking-tight leading-[0.85] text-[#f0e6ce] mb-6"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Dada Bar &
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="italic text-[#e8c97e] ml-8"
          >
            Restaurant
          </motion.div>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-lg md:text-2xl text-[#f0e6ce]/70 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Authentic Goan dining, cold drinks, and warm laterite nights in the heart of Bardez.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#menu"
            className="group relative overflow-hidden font-mono text-xs tracking-widest uppercase bg-[#7c2d12] text-white px-8 py-4 rounded-full transition-all"
          >
            <span className="relative z-10">See the Menu</span>
            <div className="absolute inset-0 bg-[#c87941] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
          </a>
          
          <a
            href="#location"
            className="group relative font-mono text-xs tracking-widest uppercase border border-[#c87941]/50 text-[#c87941] px-8 py-4 rounded-full overflow-hidden transition-all"
          >
             <span className="relative z-10 group-hover:text-[#1a1209] transition-colors duration-300">Find Us</span>
             <div className="absolute inset-0 bg-[#f0e6ce] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#f0e6ce]/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#f0e6ce]/40 to-transparent" />
      </motion.div>
    </section>
  );
}

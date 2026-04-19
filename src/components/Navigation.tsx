import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1a1209]/90 backdrop-blur-md border-b min-h-[70px] border-[#c87941]/20 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-display text-2xl font-bold tracking-tight text-[#f0e6ce] z-50">
          Dada<span className="text-[#c87941] text-lg lg:text-xl align-top">*</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono uppercase text-xs tracking-widest text-[#f0e6ce]/80 hover:text-[#c87941] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#location"
            className="font-mono uppercase text-xs tracking-widest px-5 py-2.5 border border-[#c87941] text-[#c87941] hover:bg-[#c87941] hover:text-[#1a1209] transition-all rounded-full"
          >
            Visit Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-[#f0e6ce] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-4 relative flex flex-col justify-between">
            <span className={`w-full h-[1px] bg-current transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
            <span className={`w-full h-[1px] bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-[1px] bg-current transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-[#1a1209] flex flex-col justify-center items-center gap-8 transition-transform duration-500 md:hidden ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-display italic text-4xl text-[#f0e6ce] hover:text-[#c87941] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#location"
            className="font-mono top-margin mt-4 tracking-widest px-8 py-3 border border-[#c87941] text-[#c87941] hover:bg-[#c87941] hover:text-[#1a1209] transition-all rounded-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Visit Us
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

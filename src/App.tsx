import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="bg-[#1a1209] text-[#f0e6ce] selection:bg-[#7c2d12] selection:text-[#f0e6ce]">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

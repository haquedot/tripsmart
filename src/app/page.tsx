'use client';

import Hero from '@/components/Hero';
import React from 'react';
import { PopularDestination } from '@/components/PopularDestination';
import Features from '@/components/Features';

const Home: React.FC = () => {
  return (
    <div className="antialiased px-4">
      <Hero />
      <section className="container mx-auto py-12 bg-white">
        <div className="text-center">
          <h2 className="text-sm md:text-md font-bold text-pink-500 mb-3 tracking-widest"> TOP DESTINATIONS</h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-12 tracking-wide">Popular Destinations</h1>
        </div>
        <PopularDestination height={"72"}/>
      </section>
      <Features />
    </div>
  );
};

export default Home;

'use client';

import Hero from '@/components/Hero';
import React from 'react';
import { PopularDestination } from '@/components/PopularDestination';
import Features from '@/components/Features';

const Home: React.FC = () => {
  return (
    <div className="antialiased px-4">
      <Hero />
      <PopularDestination />
      <Features />
    </div>
  );
};

export default Home;

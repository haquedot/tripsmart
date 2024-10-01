'use client';

import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import React from 'react';
import { PopularDestination } from '@/components/PopularDestination';

const Home: React.FC = () => {
  return (
    <div className="antialiased px-4">
      <Hero />
      <PopularDestination />
      {/* Popular Destinations Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Cards for destinations */}
            <div className="p-6 bg-gray-100 rounded-lg">
              <img src="/images/destination1.jpg" alt="Beach" className="w-full h-40 object-cover rounded-md" />
              <h3 className="mt-4 text-lg font-semibold">Paradise Beach, Bantayan Island</h3>
              <p className="text-gray-600">Rome, Italy</p>
              <span className="text-orange-500">4.8 ★</span>
            </div>
            {/* Repeat for other destination cards */}
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold">Trust Our Clients</h2>
          <div className="mt-8">
            <p className="text-gray-600">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <span className="block mt-4 text-gray-900 font-semibold">Mark Smith</span>
            <span className="block text-gray-500">Travel Enthusiast</span>
            <div className="flex justify-center mt-4">
              <span className="text-yellow-500">★★★★★</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-xl">TripSmart</h3>
              <p className="mt-4 text-gray-400">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
              </p>
            </div>
            {/* Other footer content */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

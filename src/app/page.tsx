'use client';

import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="font-sans antialiased bg-gray-100">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-pink-500 to-orange-400 py-6">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-white font-bold text-2xl">TripSmart</div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">About</a></li>
              <li><a href="#" className="text-white">Features</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </nav>
          <div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md mr-2">Log In</button>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-md">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Plan Your <span className="text-pink-500">Smart Trip</span> with Ease.
          </h1>
          <p className="text-gray-600 mt-4">
            We always make our customers happy by providing as many choices as possible.
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 mt-6 rounded-md">
            Create New Trip
          </button>
        </div>
      </section>

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

      {/* Key Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center">We offer the best services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center">
              <div className="p-4 bg-pink-100 rounded-full">
                <img src="/icons/service-icon.svg" alt="Service" className="w-6 h-6" />
              </div>
              <p className="ml-4 text-gray-700">Schedule your trip easily.</p>
            </div>
            {/* Repeat for other features */}
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

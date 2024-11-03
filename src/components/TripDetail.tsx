'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaCalendar } from 'react-icons/fa';
import { upcomingTrips } from '@/lib/upcomingTripData';
import { FaLocationDot } from 'react-icons/fa6';
import { Weather } from './Weather';

export default function TripDetail() {
    const [activeTab, setActiveTab] = useState('hotels'); // State to manage active tab
    const trip = upcomingTrips[0]; // Access the first trip as an example

    return (
        <section className="sm:w-10/12 mx-auto py-20 px-4">
            {/* Trip Banner with Title */}
            <div className="relative w-full">
                <Image src={trip.image} alt={trip.title} className="w-full max-h-64 rounded-xl object-cover" />
                <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black to-transparent rounded-b-xl"></div>
                <div className="flex absolute bottom-5 left-5 gap-3">
                    <h1 className="text-5xl text-white font-bold">{trip.title}</h1>
                    <div className="flex text-white gap-3 items-center mt-3 border-l-2 border-pink-500 ps-3 text-lg font-semibold">
                        <p className="flex items-center gap-2">
                            <FaLocationDot /> {trip.country || trip.country}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaCalendar /> {trip.date}
                        </p>
                    </div>
                </div>
            </div>

            {/* Details Section */}
            <div className="w-full md:flex gap-10 mt-8">
                {/* Left Column - Nearby Locations */}
                <div className='md:w-7/12'>
                    {/* Tab Links */}
                    <nav className="flex gap-4 border-b">
                        <button onClick={() => setActiveTab('hotels')} className={`text-sm font-semibold text-neutral-800 py-2 ${activeTab === 'hotels' ? 'border-b-4 border-pink-500' : ''}`}>
                            Nearby Hotels
                        </button>
                        <button onClick={() => setActiveTab('restaurants')} className={`text-sm font-semibold text-neutral-800 py-2 ${activeTab === 'restaurants' ? 'border-b-4 border-pink-500' : ''}`}>
                            Restaurants
                        </button>
                        <button onClick={() => setActiveTab('attractions')} className={`text-sm font-semibold text-neutral-800 py-2 ${activeTab === 'attractions' ? 'border-b-4 border-pink-500' : ''}`}>
                            Attractions
                        </button>
                        <button onClick={() => setActiveTab('pharmacies')} className={`text-sm font-semibold text-neutral-800 py-2 ${activeTab === 'pharmacies' ? 'border-b-4 border-pink-500' : ''}`}>
                            Near Pharmacies
                        </button>
                    </nav>

                    {/* Conditional Rendering Based on Active Tab */}
                    {activeTab === 'hotels' && trip.nearHotelsFromAirport?.length ? (
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">Nearby Hotels</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {trip.nearHotelsFromAirport.map((hotel, index) => (
                                    <div key={index} className="rounded-xl border gap-3">
                                        <Image src={hotel.image} alt={hotel.name} className="rounded-t-xl object-cover" />
                                        <div className='p-4'>
                                            <h3 className="text-lg font-semibold">{hotel.name}</h3>
                                            <p className="text-sm text-neutral-600">Distance: {hotel.distance} km</p>
                                            <p className="text-sm text-neutral-600">Rating: {hotel.rating} stars</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        activeTab === 'hotels' && <p className="mt-5 text-neutral-600">No nearby hotels available.</p>
                    )}

                    {activeTab === 'restaurants' && trip.nearRestaurantsFromHotel?.length ? (
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">Nearby Restaurants</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {trip.nearRestaurantsFromHotel.map((restaurant, index) => (
                                    <div key={index} className="rounded-xl border gap-3">
                                        <Image src={restaurant.image} alt={restaurant.name} className="rounded-t-xl object-cover" />
                                        <div className='p-4'>
                                            <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                                            <p className="text-sm text-neutral-600">Distance: {restaurant.distance} km</p>
                                            <p className="text-sm text-neutral-600">Rating: {restaurant.rating} stars</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        activeTab === 'restaurants' && <p className="mt-5 text-neutral-600">No nearby restaurants available.</p>
                    )}

                    {activeTab === 'attractions' && trip.nearTouristPlacesFromHotel?.length ? (
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">Nearby Attractions</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {trip.nearTouristPlacesFromHotel.map((place, index) => (
                                    <div key={index} className="rounded-xl border gap-3">
                                        <Image src={place.image} alt={place.name} className="rounded-t-xl object-cover" />
                                        <div className='p-4'>
                                            <h3 className="text-lg font-semibold">{place.name}</h3>
                                            <p className="text-sm text-neutral-600">Distance: {place.distance} km</p>
                                            <p className="text-sm text-neutral-600">Rating: {place.rating} stars</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        activeTab === 'attractions' && <p className="mt-5 text-neutral-600">No nearby attractions available.</p>
                    )}

                    {activeTab === 'pharmacies' && trip.nearPharmaciesFromHotel?.length ? (
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">Nearby Pharmacies</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {trip.nearPharmaciesFromHotel.map((place, index) => (
                                    <div key={index} className="rounded-xl border gap-3">
                                        <Image src={place.image} alt={place.name} className="rounded-t-xl object-cover" />
                                        <div className='p-4'>
                                            <h3 className="text-lg font-semibold">{place.name}</h3>
                                            <p className="text-sm text-neutral-600">Distance: {place.distance} km</p>
                                            <p className="text-sm text-neutral-600">Rating: {place.rating} stars</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        activeTab === 'attractions' && <p className="mt-5 text-neutral-600">No nearby pharmacies available.</p>
                    )}
                </div>

                <div className='md:w-5/12'>
                    {/* Weather Information */}
                    <Weather
                        data={{
                            name: trip.destination,
                            main: { temp: 27 },
                            weather: [{ description: "Cloudy" }],
                            wind: { speed: 5 },
                        }}
                    />

                    {/* Map Embed */}
                    <div className="rounded-x mt-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7613.341375580827!2d78.35598701680813!3d17.427584517893113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c915a6b2ab%3A0x422046359cc10ec6!2sBoys%20hostel%203!5e0!3m2!1sen!2sin!4v1730312510922!5m2!1sen!2sin"
                            width="100%" height="300"
                            loading="lazy"
                            className='rounded-xl'
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

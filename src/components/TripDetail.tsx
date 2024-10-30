'use client';

import React from 'react';
import Image from 'next/image';
import {  FaCalendar } from 'react-icons/fa';
import Link from 'next/link';
import { upcomingTrips } from '@/lib/upcomingTripData';
import { FaLocationDot } from 'react-icons/fa6';

export default function TripDetail() {
    const trip = upcomingTrips[0]; // Access the first trip as an example

    return (
        <section className="sm:w-10/12 mx-auto py-20 px-4">
            {/* Trip Banner with Title */}
            <div className="relative w-full">
                <Image src={trip.image} alt={trip.title} className="w-full max-h-64 rounded-xl object-cover" />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent rounded-b-xl"></div>
                <h1 className="text-5xl text-white font-bold absolute bottom-5 left-5">{trip.title}</h1>
            </div>

            {/* Details Section */}
            <div className="grid md:grid-cols-2 gap-10 mt-8">
                {/* Left Column - Nearby Locations */}
                <div>
                    {/* Tab Links */}
                    <nav className="flex gap-4 border-b">
                        <Link href="#" className="text-sm font-semibold text-neutral-800 border-b-4 border-pink-500 py-2">Nearby Hotels</Link>
                        <Link href="#" className="text-sm font-semibold text-neutral-800 py-2">Restaurants</Link>
                        <Link href="#" className="text-sm font-semibold text-neutral-800 py-2">Attractions</Link>
                    </nav>

                    {/* Hotels List - Render only if data exists */}
                    {trip.nearHotelsFromAirport?.length ? (
                        <div className="mt-5">
                            <h2 className="text-2xl font-semibold text-neutral-800">Nearby Hotels</h2>
                            {trip.nearHotelsFromAirport.map((hotel, index) => (
                                <div key={index} className="flex items-center gap-3 mt-3">
                                    <Image src={hotel.image} alt={hotel.name} className="w-16 h-16 rounded-xl object-cover" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{hotel.name}</h3>
                                        <p className="text-sm text-neutral-600">Distance: {hotel.distance} km</p>
                                        <p className="text-sm text-neutral-600">Rating: {hotel.rating} stars</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="mt-5 text-neutral-600">No nearby hotels available.</p>
                    )}

                    {/* Restaurants List - Render only if data exists */}
                    {trip.nearRestaurantsFromHotel?.length ? (
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-neutral-800">Nearby Restaurants</h2>
                            {trip.nearRestaurantsFromHotel.map((restaurant, index) => (
                                <div key={index} className="flex items-center gap-3 mt-3">
                                    <Image src={restaurant.image} alt={restaurant.name} className="w-16 h-16 rounded-xl object-cover" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                                        <p className="text-sm text-neutral-600">Distance: {restaurant.distance} km</p>
                                        <p className="text-sm text-neutral-600">Rating: {restaurant.rating} stars</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="mt-5 text-neutral-600">No nearby restaurants available.</p>
                    )}

                    {/* Tourist Places List - Render only if data exists */}
                    {trip.nearTouristPlacesFromHotel?.length ? (
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-neutral-800">Nearby Attractions</h2>
                            {trip.nearTouristPlacesFromHotel.map((place, index) => (
                                <div key={index} className="flex items-center gap-3 mt-3">
                                    <Image src={place.image} alt={place.name} className="w-16 h-16 rounded-xl object-cover" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{place.name}</h3>
                                        <p className="text-sm text-neutral-600">Distance: {place.distance} km</p>
                                        <p className="text-sm text-neutral-600">Rating: {place.rating} stars</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="mt-5 text-neutral-600">No nearby attractions available.</p>
                    )}
                </div>

                {/* Right Column - Weather Information */}
                <div>
                    <h2 className="text-3xl font-bold text-neutral-800">Weather</h2>
                    <div className="flex gap-3 items-center mt-3">
                        <p className="flex items-center gap-2 text-sm font-semibold">
                            <FaLocationDot className="text-pink-500" /> {trip.country || trip.country}
                        </p>
                        <p className="flex items-center gap-2 text-sm font-semibold">
                            <FaCalendar className="text-pink-500" /> {trip.date}
                        </p>
                    </div>
                    <div className="mt-5">
                        <p className="text-xl font-semibold">{trip.weather?.condition}</p>
                        <p className="text-lg">Temperature: {trip.weather?.temp}°C</p>
                        <p className="text-lg">Wind: {trip.weather?.wind} km/h</p>
                        <p className="text-lg">Humidity: {trip.weather?.humidity}%</p>
                    </div>
                    <p className="text-sm text-neutral-600 mt-5">
                        Enjoy your trip to {trip.title}, where the weather is currently {trip.weather?.condition.toLowerCase()} with a comfortable {trip.weather?.temp}°C.
                    </p>
                </div>
            </div>
        </section>
    );
}

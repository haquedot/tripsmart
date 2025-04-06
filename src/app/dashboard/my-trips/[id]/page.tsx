'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaCalendar, FaHotel, FaUtensils, FaMonument, FaClinicMedical, FaHospital, FaConciergeBell } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Weather from '@/components/Weather';

interface Place {
  name: string;
  distance: string;
  rating: string;
  type: string;
  image: string;
}

interface Trip {
  _id: string;
  tripName: string;
  destination: string;
  startDate: string;
  endDate: string;
  title?: string;
  country?: string;
  date?: string;
  image: string;
  nearHotelsFromAirport?: Place[];
  nearRestaurantsFromHotel?: Place[];
  nearTouristPlacesFromHotel?: Place[];
  nearPharmaciesFromHotel?: Place[];
  nearHospitalsFromHotel?: Place[];
  localServices?: Place[];
}

export default function TripDetail() {
    const [activeTab, setActiveTab] = useState('hotels');
    const [trip, setTrip] = useState<Trip | null>(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    // Get random image from Picsum Photos
    const getRandomImage = (seed: string, width = 400, height = 300) => {
        return `https://picsum.photos/seed/${seed}/${width}/${height}`;
    };

    const generateMockPlaces = (type: string, count: number, destination: string) => {
        const typeNames = {
            hotel: ['Grand', 'Luxury', 'Royal', 'Paradise', 'Premium'],
            restaurant: ['Gourmet', 'Delicious', 'Tasty', 'Authentic', 'Fusion'],
            attraction: ['Historic', 'Famous', 'Popular', 'Beautiful', 'Scenic'],
            pharmacy: ['Health', 'Care', 'Medi', 'Quick', 'City'],
            hospital: ['General', 'Medical', 'City', 'Community', 'Regional'],
            service: ['Professional', 'Quality', 'Trusted', 'Local', 'Premium']
        };

        return Array.from({ length: count }, (_, i) => ({
            name: `${typeNames[type as keyof typeof typeNames][i]} ${destination} ${type}`,
            distance: `${(Math.random() * 5 + 0.5).toFixed(1)} km`,
            rating: (Math.random() * 2 + 3).toFixed(1),
            type,
            image: getRandomImage(`${destination}-${type}-${i}`)
        }));
    };

    useEffect(() => {
        const fetchTripDetails = async () => {
            try {
                const response = await axios.get(`/api/trips/${id}`, {
                    withCredentials: true
                });

                const destination = response.data.destination;
                
                const tripData: Trip = {
                    ...response.data,
                    title: response.data.tripName,
                    country: response.data.destination,
                    date: `${new Date(response.data.startDate).toLocaleDateString()} - ${new Date(response.data.endDate).toLocaleDateString()}`,
                    image: getRandomImage(`trip-${destination}-banner`, 800, 600),
                    nearHotelsFromAirport: generateMockPlaces('hotel', 4, destination),
                    nearRestaurantsFromHotel: generateMockPlaces('restaurant', 5, destination),
                    nearTouristPlacesFromHotel: generateMockPlaces('attraction', 4, destination),
                    nearPharmaciesFromHotel: generateMockPlaces('pharmacy', 3, destination),
                    nearHospitalsFromHotel: generateMockPlaces('hospital', 2, destination),
                    localServices: generateMockPlaces('service', 4, destination)
                };
                
                setTrip(tripData);
            } catch (error) {
                console.error('Error fetching trip details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTripDetails();
    }, [id]);

    const renderPlaceIcon = (category: string) => {
        switch(category) {
            case 'hotels': return <FaHotel className="text-pink-500" />;
            case 'restaurants': return <FaUtensils className="text-pink-500" />;
            case 'attractions': return <FaMonument className="text-pink-500" />;
            case 'pharmacies': return <FaClinicMedical className="text-pink-500" />;
            case 'hospitals': return <FaHospital className="text-pink-500" />;
            case 'localServices': return <FaConciergeBell className="text-pink-500" />;
            default: return <FaLocationDot className="text-pink-500" />;
        }
    };

    const renderTabContent = (category: keyof Trip, categoryName: string) => {
        const places = trip?.[category] as Place[];
        const isEmpty = !places || places.length === 0;
        const isActive = activeTab === categoryName;

        if (!isActive) return null;
        if (isEmpty) return <p className="mt-5 text-neutral-600">No {categoryName} available.</p>;

        return (
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                    {renderPlaceIcon(categoryName)}
                    Nearby {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {places.map((place, index) => (
                        <div key={index} className="rounded-xl border gap-3 hover:shadow-md transition-shadow">
                            <div className="relative w-full h-48">
                                <Image 
                                    src={place.image}
                                    alt={place.name}
                                    fill
                                    className="rounded-t-xl object-cover"
                                    unoptimized // Since we're using external URLs
                                />
                            </div>
                            <div className='p-4'>
                                <h3 className="text-lg font-semibold">{place.name}</h3>
                                <p className="text-sm text-neutral-600">Distance: {place.distance} km</p>
                                <p className="text-sm text-neutral-600">Rating: {place.rating} stars</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    if (loading) {
        return (
            <section className="sm:w-10/12 mx-auto px-4">
                <div className="animate-pulse">
                    <div className="w-full h-64 bg-gray-200 rounded-xl"></div>
                    <div className="w-full md:flex gap-10 mt-8">
                        <div className="md:w-7/12 space-y-4">
                            <div className="h-12 w-full bg-gray-200 rounded"></div>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="h-48 bg-gray-200 rounded-xl"></div>
                                ))}
                            </div>
                        </div>
                        <div className="md:w-5/12 space-y-4">
                            <div className="h-64 bg-gray-200 rounded-xl"></div>
                            <div className="h-64 bg-gray-200 rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (!trip) {
        return (
            <section className="sm:w-10/12 mx-auto py-20 px-4">
                <div className="text-center py-20">
                    <p>Trip not found</p>
                </div>
            </section>
        );
    }

    return (
        <section className="sm:w-10/12 mx-auto py-20 px-4">
            <div className="relative w-full">
                <div className="relative w-full h-64">
                    <Image 
                        src={trip.image}
                        alt={trip.title!}
                        fill
                        className="rounded-xl object-cover"
                        unoptimized
                    />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black to-transparent rounded-b-xl"></div>
                <div className="flex absolute bottom-5 left-5 gap-3">
                    <h1 className="text-5xl text-white font-bold">{trip.title}</h1>
                    <div className="flex text-white gap-3 items-center mt-3 border-l-2 border-pink-500 ps-3 text-lg font-semibold">
                        <p className="flex items-center gap-2">
                            <FaLocationDot /> {trip.country}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaCalendar /> {trip.date}
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full md:flex gap-10 mt-8">
                <div className='md:w-7/12'>
                    <nav className="flex gap-4 border-b flex-wrap">
                        {['hotels', 'restaurants', 'attractions', 'pharmacies', 'hospitals', 'localServices'].map((tab) => (
                            <button 
                                key={tab}
                                onClick={() => setActiveTab(tab)} 
                                className={`text-sm font-semibold text-neutral-800 py-2 flex items-center gap-1 ${activeTab === tab ? 'border-b-4 border-pink-500' : ''}`}
                            >
                                {renderPlaceIcon(tab)}
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </nav>

                    {renderTabContent('nearHotelsFromAirport', 'hotels')}
                    {renderTabContent('nearRestaurantsFromHotel', 'restaurants')}
                    {renderTabContent('nearTouristPlacesFromHotel', 'attractions')}
                    {renderTabContent('nearPharmaciesFromHotel', 'pharmacies')}
                    {renderTabContent('nearHospitalsFromHotel', 'hospitals')}
                    {renderTabContent('localServices', 'localServices')}
                </div>

                <div className='md:w-5/12'>
                    <Weather city={trip.destination} />
                    <div className="rounded-xl mt-4 overflow-hidden">
                        <iframe 
                            src={`https://maps.google.com/maps?q=${trip.destination}&output=embed`}
                            width="100%" 
                            height="300"
                            loading="lazy"
                            style={{ border: 0 }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex={0}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';
import { FaCalendar, FaEye } from 'react-icons/fa';
import Link from 'next/link';
import axios from 'axios';
import img1 from "/public/images/destination1.png";

interface Trip {
  _id: string;
  tripName: string;
  destination: string;
  startDate: string;
  endDate: string;
  // Fields to match your UI structure
  title?: string;
  country?: string;
  date?: string;
  image?: string;
}

export default function UpcomingTrip() {
    const [upcomingTrip, setUpcomingTrip] = useState<Trip | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUpcomingTrip = async () => {
            try {
                const response = await axios.get('/api/trips', {
                    withCredentials: true
                });
                
                if (response.data.length > 0) {
                    // Find the nearest upcoming trip (start date is in the future)
                    const now = new Date();
                    const upcomingTrips = response.data
                        .filter((trip: any) => new Date(trip.startDate) > now)
                        .sort((a: any, b: any) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
                    
                    // Use the nearest upcoming trip or the most recent trip if none are upcoming
                    const trip = upcomingTrips.length > 0 ? upcomingTrips[0] : response.data[0];
                    
                    // Transform to match your UI structure
                    const formattedTrip = {
                        ...trip,
                        title: trip.tripName,
                        country: trip.destination,
                        date: `${new Date(trip.startDate).toLocaleDateString()} - ${new Date(trip.endDate).toLocaleDateString()}`,
                    };
                    
                    setUpcomingTrip(formattedTrip);
                }
            } catch (error) {
                console.error('Error fetching upcoming trip:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUpcomingTrip();
    }, []);

    if (loading) {
        return (
            <section className="mb-4">
                <div className="h-full flex border-2 border-pink-100 rounded-2xl mb-3 animate-pulse">
                    <div className="w-36 h-24 md:w-96 md:h-64 bg-gray-200 rounded-l-xl"></div>
                    <div className="w-full flex justify-between p-3 md:p-8">
                        <div className="flex flex-col space-y-2">
                            <div className="h-8 w-48 bg-gray-200 rounded"></div>
                            <div className="flex gap-3">
                                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                <div className="h-4 w-32 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                        <div className="h-6 w-6 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </section>
        );
    }

    if (!upcomingTrip) {
        return (
            <section className="mb-4">
                <div className="h-full flex border-2 border-pink-100 rounded-2xl mb-3 p-8 justify-center items-center">
                    <p>No upcoming trips found</p>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="mb-4">
                <Link 
                    href={`/dashboard/my-trips/${upcomingTrip._id}`} // Updated link to use trip ID
                    className="h-full flex border-2 border-pink-100 rounded-2xl mb-3"
                >
                    <div className="flex">
                        <Image 
                            src={upcomingTrip.image || img1} 
                            alt="trip image" 
                            width={800}
                            height={600}
                            className="rounded-l-xl max-w-36 max-h-24 md:max-w-96 md:max-h-64 object-cover" 
                        />
                    </div>
                    <div className="w-full flex justify-between p-3 md:p-8">
                        <div className="flex flex-col">
                            <h4 className="text-lg md:text-3xl font-bold">{upcomingTrip.title}</h4>
                            <div className="flex gap-3 items-end h-full">
                                <p className="flex items-center gap-2 text-sm font-semibold">
                                    <FaLocationDot className="text-pink-500" /> {upcomingTrip.country}
                                </p>
                                <p className="flex items-center gap-2 text-sm font-semibold">
                                    <FaCalendar className='text-pink-500' /> {upcomingTrip.date}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div onClick={(e) => e.preventDefault()}> {/* Prevent default to avoid double navigation */}
                                <Link 
                                    href={`/dashboard/my-trips/${upcomingTrip._id}`} 
                                    className="inline-block" // Ensure link is properly styled
                                >
                                    <FaEye className="text-pink-500 text-xl transition duration-300 ease-in-out transform hover:text-pink-700 hover:scale-150" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
        </>
    );
}
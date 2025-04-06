'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa";
import img1 from "/public/images/destination1.png";
import Link from 'next/link';

interface Trip {
  _id: string;
  tripName: string;
  destination: string;
  startDate: string;
  endDate: string;
  // Fields to match your UI structure
  title?: string;
  Date?: string;
  image?: string;
}

export default function MyTrips() {
    const [trips, setTrips] = useState<Trip[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const response = await axios.get('/api/trips', {
                    withCredentials: true
                });
                
                // Transform API data to match your UI structure
                const formattedTrips = response.data.map((trip: any) => ({
                    ...trip,
                    title: trip.tripName,
                    Date: `${new Date(trip.startDate).toLocaleDateString()} - ${new Date(trip.endDate).toLocaleDateString()}`,
                    // Use destination image or fallback to a placeholder
                }));
                
                setTrips(formattedTrips);
            } catch (error) {
                console.error('Error fetching trips:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTrips();
    }, []);

    return (
        <div className="">
            <h1 className="text-2xl font-semibold mb-8">My Trips</h1>

            <div className="md:flex gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {trips.map((trip, idx) => (
                        <Link 
                            href={`/dashboard/my-trips/${trip._id}`} 
                            key={trip._id || idx}
                            className="block" // Ensure the link takes full width
                        >
                            <div className="bg-pink-50 rounded-2xl p-2 pe-4 flex items-start gap-3 mb-3 hover:bg-pink-100 transition-colors cursor-pointer">
                                <Image 
                                    src={trip.image || img1} 
                                    alt={trip.title || 'Trip image'} 
                                    width={80} 
                                    height={80} 
                                    className="rounded-xl max-w-20 max-h-20 object-cover" 
                                />
                                <div className="">
                                    <h4 className="text-lg text-neutral-800 font-bold mb-2">{trip.title || 'Unnamed Trip'}</h4>
                                    <p className="flex items-center gap-2 text-neutral-600 text-sm font-semibold">
                                        <FaRegCalendar className="text-pink-500" />
                                        {trip.Date || 'No dates specified'}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
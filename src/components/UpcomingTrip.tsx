// component for Upcoming Trips
'use client';

import React from 'react';
import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';
import { FaCalendar, FaEye } from 'react-icons/fa';
import Link from 'next/link';
import { upcomingTrips } from '@/lib/upcomingTripData';

export default function UpcomingTrip() {
    return (
        <>
            <section className="mb-4">
                {upcomingTrips.slice(0, 1).map((trip, idx) => (
                    <Link href={'/upcoming-trip'} key={idx} className="h-full flex border-2 border-pink-100 rounded-2xl mb-3">
                        <div className="flex">
                            <Image src={trip.image} alt="img1" className="rounded-l-xl max-w-36 max-h-24 md:max-w-96 md:max-h-64 object-cover" />
                        </div>
                        <div className="w-full flex justify-between p-3 md:p-8">
                            <div className="flex flex-col">
                                <h4 className="text-lg md:text-3xl font-bold">{trip.title}</h4>
                                <div className="flex gap-3 items-end h-full">
                                    <p className="flex items-center gap-2 text-sm font-semibold"><FaLocationDot className="text-pink-500" /> {trip.country}</p>
                                    <p className="flex items-center gap-2 text-sm font-semibold"><FaCalendar className='text-pink-500' /> {trip.date}</p>

                                </div>
                            </div>
                            <div className="flex justify-end">
                                <Link href="#" className="">
                                    <FaEye className="text-pink-500 text-xl transition duration-300 ease-in-out transform hover:text-pink-700 hover:scale-150" />
                                </Link>

                            </div>
                        </div>
                    </Link>
                ))}
            </section>

        </>
    );
}
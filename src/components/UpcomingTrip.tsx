// component for Upcoming Trips
'use client';

import React from 'react';
import Image from 'next/image';
import img1 from '../../public/images/destination2.jpg';
import { FaLocationDot } from 'react-icons/fa6';
import { FaCalendar } from 'react-icons/fa';
import Link from 'next/link';

// upcoming trips data with date
const upcomingTrips = [
    {
        title: 'Kerala',
        country: 'India',
        image: img1,
        date: '2022-06-20',
    },
    {
        title: 'Eiffel Tower Tour',
        country: 'India',
        image: img1,
        date: '2022-06-20',
    },
    {
        title: 'Kerala',
        country: 'India',
        image: img1,
        date: '2022-06-20',
    },
    {
        title: 'Eiffel Tower Tour',
        country: 'India',
        image: img1,
        date: '2022-06-20',
    },
    {
        title: 'Kerala',
        country: 'India',
        image: img1,
        date: '2022-06-20',
    },
    {
        title: 'Eiffel Tower Tour',
        country: 'India',
        image: img1,
        date: '2022-06-20',
    },
];

export default function UpcomingTrip() {
    return (
        <>
            <section className="mb-4">
                {upcomingTrips.slice(0, 2).map((trip, idx) => (
                    <div key={idx} className="h-full flex border-2 border-indigo-100 rounded-2xl mb-3">
                        <div className="flex">
                            <Image src={trip.image} alt="img1" className="rounded-l-xl max-w-36 max-h-24 md:max-w-96 md:max-h-64 object-cover" />
                        </div>
                        <div className="w-full flex justify-between p-3 md:p-8">
                            <div className="flex flex-col">
                                <h4 className="text-lg md:text-3xl font-bold">{trip.title}</h4>
                                <div className="flex gap-3 items-end h-full">
                                    <p className="flex items-center gap-2 text-sm font-semibold"><FaLocationDot className="text-indigo-500" /> {trip.country}</p>
                                    <p className="flex items-center gap-2 text-sm font-semibold"><FaCalendar className='text-indigo-500' /> {trip.date}</p>

                                </div>
                            </div>
                            <div className="flex justify-end">
                                <Link href="#" className="">
                                    View
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

        </>
    );
}
'use client';

import React from "react";
import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa";
import { trips } from "@/lib/trips";


interface TripHistoryProps {
    noOfTrips?: number;
}

export const TripHistory: React.FC<TripHistoryProps> = ({ noOfTrips }) => {
    return (
        <>
            <section className="block mb-4">
                {trips.slice(0, noOfTrips).map((trip, idx) => (
                    <div key={idx} className="bg-indigo-50 rounded-2xl p-2 flex items-start gap-3 mb-3">
                        <Image src={trip.image} alt="img1" className="rounded-xl max-w-20 max-h-20 object-cover" />
                        <div className="">
                            <h4 className="text-lg font-bold mb-2">{trip.title}</h4>
                            <p className="flex items-center gap-2 text-sm font-semibold"><FaRegCalendar className=" text-indigo-500" /> {trip.Date}</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}
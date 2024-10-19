// dashboard of trip smart

'use client';

import { trips } from "@/lib/trips";
import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa";


export default function MyTrips() {
    return (
        <div className="">
            <h1 className="text-2xl font-semibold mb-8">My Trips</h1>

            {/* Show only year 2022 trips from trips use map */}
            <div className="md:flex gap-4">
                <div className="block">
                    <h6 className="text-sm text-neutral-700 font-bold mb-4">2022</h6>
                    {trips.map((trip, idx) => (
                        trip.year === "2022" && (
                            <div key={idx} className="bg-indigo-50 rounded-2xl p-2 pe-4 flex items-start gap-3 mb-3">
                                <Image src={trip.image} alt="img1" className="rounded-xl max-w-20 max-h-20 object-cover" />
                                <div className="">
                                    <h4 className="text-lg text-neutral-800 font-bold mb-2">{trip.title}</h4>
                                    <p className="flex items-center gap-2 text-neutral-600 text-sm font-semibold"><FaRegCalendar className=" text-indigo-500" />{trip.Date}</p>
                                </div>
                            </div>
                        )
                    ))}
                </div>
                <div className="block">
                    <h6 className="text-sm text-neutral-700 font-bold mb-4">2023</h6>
                    {trips.map((trip, idx) => (
                        trip.year === "2022" && (
                            <div key={idx} className="bg-indigo-50 rounded-2xl p-2 pe-4 flex items-start gap-3 mb-3">
                                <Image src={trip.image} alt="img1" className="rounded-xl max-w-20 max-h-20 object-cover" />
                                <div className="">
                                    <h4 className="text-lg text-neutral-800 font-bold mb-2">{trip.title}</h4>
                                    <p className="flex items-center gap-2 text-neutral-600 text-sm font-semibold"><FaRegCalendar className=" text-indigo-500" /> {trip.Date}</p>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>

        </div>
    );
}
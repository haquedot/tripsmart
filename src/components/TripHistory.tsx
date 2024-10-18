'use client';

import React from "react";
import img1 from "../../public/images/destination1.png";
import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa";

const trips = [
    {
        title: "Kerala",
        Date: "16 Apr - 20 Apr",
        image: img1,
    },
    {
        title: "Eiffel Tower Tour",
        Date: "16 Apr - 20 Apr",
        image: img1,

    },
    {
        title: "Kerala",
        Date: "16 Apr - 20 Apr",
        image: img1,

    },
    {
        title: "Eiffel Tower Tour",
        Date: "16 Apr - 20 Apr",
        image: img1,

    },
    {
        title: "Kerala",
        Date: "16 Apr - 20 Apr",
        image: img1,

    },
    {
        title: "Eiffel Tower Tour",
        Date: "16 Apr - 20 Apr",
        image: img1,

    },
];

export default function TripHistory() {
    return (
        <>
            <section className="block mb-4">
                {trips.slice(0, 2).map((trip, idx) => (
                    <div key={idx} className="bg-neutral-200 rounded-2xl p-2 flex items-center gap-3 mb-3">
                        <Image src={trip.image} alt="img1" className="rounded-xl max-w-24 max-h-24 object-cover" />
                        <div className="">
                            <h4 className="text-xl font-bold mb-4">{trip.title}</h4>
                            <p className="flex items-center gap-2 text-sm font-semibold"><FaRegCalendar className=" text-pink-500" /> {trip.Date}</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}
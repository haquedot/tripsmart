'use client';

import React from "react";
import Image from "next/image";
import img1 from "../../public/images/destination1.png";
import { FaLocationDot } from "react-icons/fa6";


const nearMe = [
    {
        title: "Kerala",
        country: "India",
         image: img1,
    },
    {
        title: "Eiffel Tower Tour",
        country: "India",
         image: img1,

    },
    {
        title: "Kerala",
        country: "India",
         image: img1,

    },
    {
        title: "Eiffel Tower Tour",
        country: "India",
         image: img1,

    },
    {
        title: "Kerala",
        country: "India",
         image: img1,

    },
    {
        title: "Eiffel Tower Tour",
        country: "India",
         image: img1,

    },
];

export default function NearMe() {
    return (
        <>
            <section className="block mb-4">
                {nearMe.slice(0, 2).map((trip, idx) => (
                    <div key={idx} className="bg-indigo-50 rounded-2xl p-2 flex items-start gap-3 mb-3">
                        <Image src={trip.image} alt="img1" className="rounded-xl max-w-20 max-h-20 object-cover" />
                        <div className="">
                            <h4 className="text-lg font-bold mb-2">{trip.title}</h4>
                            <p className="flex items-center gap-2 text-sm font-semibold"><FaLocationDot className="text-indigo-500" /> {trip.country}</p>
                        </div>
                    </div>
                ))}
            </section>

        </>
    )
}
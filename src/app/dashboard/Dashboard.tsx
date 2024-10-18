// dashboard of trip smart

'use client';

import { FaSearch } from "react-icons/fa";
import { PopularDestination } from "@/components/PopularDestination";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";
import TripHistory from "@/components/TripHistory";
import Calendar from "@/components/Calendar";
import NearMe from "@/components/NearMe";
import { Weather } from "@/components/Weather";


export default function Dashboard() {
    return (
        <>
            {/* Search bar, notifications, create trip button  */}
            <div className="md:flex items-center justify-between mb-10">
                <div className="flex items-center w-full md:w-8/12 gap-2 md:gap-4">
                    <div className="bg-neutral-200 flex items-center px-3 py-2 rounded-md">
                        <label htmlFor="search">
                            <FaSearch className="text-neutral-900" />
                        </label>
                        <input type="text" id="search" placeholder="Search for destinations" className="bg-neutral-200 ml-2 text-sm" />
                    </div>
                    <Link href="#" className="bg-neutral-200 p-2 rounded-full text-neutral-900-500">
                        <IoIosNotificationsOutline className="text-lg md:text-2xl" />
                    </Link>
                </div>
                <div className="hidden md:flex items-center md:ps-6 md:w-4/12">
                    <button className="bg-pink-500 text-md font-semibold text-white px-4 py-2 rounded-xl w-full">Create New Trip</button>
                </div>
            </div>

            <div className="md:flex md:gap-6">
                <div className="flex-1 md:w-8/12">
                    <h2 className="text-3xl font-semibold mb-4">Hello Anni!</h2>
                    <p className="text-gray-600 mb-6">Welcome back and explore the world.</p>

                    <section className="container mx-auto mb-4 bg-white">
                        {/* View all */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">Popular Destinations</h2>
                            <Link href="#" className="text-sm text-pink-600">View all</Link>
                        </div>
                        <PopularDestination height={"40"} />
                    </section>
                    <div className="grid md:grid-cols-2 gap-3">
                        <div className="">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg font-bold">Near me</h2>
                                <Link href="#" className="text-sm text-pink-600">View all</Link>
                            </div>
                            <NearMe />
                        </div>
                        <div className="">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg font-bold">Your trips</h2>
                                <Link href="#" className="text-sm text-pink-600">View all</Link>
                            </div>
                            <TripHistory />
                        </div>
                    </div>
                </div>
                {/* Calendar, and Trip History in block */}
                <div className="flex-1 space-y-4">
                    <Weather
                        data={{
                            name: "Mumbai",
                            main: { temp: 30 },
                            weather: [{ description: "Cloudy" }],
                            wind: { speed: 5 }
                        }}
                    />

                    <Calendar />


                </div>

            </div>
        </>
    );
}
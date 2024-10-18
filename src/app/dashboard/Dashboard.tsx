// dashboard of trip smart

'use client';

import Image from "next/image";
import {  FaSearch } from "react-icons/fa";
import { PopularDestination } from "@/components/PopularDestination";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";
import TripHistory from "@/components/TripHistory";


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
                <div className="hidden md:flex items-center px-3 md:w-4/12">
                    <button className="bg-pink-500 text-md font-semibold text-white px-4 py-2 rounded-xl w-full">Create New Trip</button>
                </div>
            </div>

            <div className="md:flex">
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
                    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Most Popular</h3>
                            <div className="bg-white shadow-md rounded-md p-4">
                                <h4 className="font-semibold">Kerala</h4>
                                <p className="text-neutral-900">India</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Special Offers</h3>
                            <div className="bg-white shadow-md rounded-md p-4">
                                <h4 className="font-semibold">Eiffel Tower Tour</h4>
                                <p className="text-neutral-900">Paris</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold mb-4">Trips</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white shadow-md rounded-md p-4">
                                <h4 className="font-semibold">Goa</h4>
                                <p className="text-neutral-900">16 Apr - 20 Apr</p>
                            </div>
                            <div className="bg-white shadow-md rounded-md p-4">
                                <h4 className="font-semibold">Shimla</h4>
                                <p className="text-neutral-900">16 Jan - 25 Jan</p>
                            </div>
                        </div>
                    </section>
                </div>
                {/* Calendar, and Trip History in block */}
                <div className="flex-1 px-3 max-w-md">
                    <div className="bg-neutral-900 shadow-md rounded-2xl p-4 mb-6">
                        <h3 className="text-white text-xl font-semibold mb-4">Calendar</h3>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-neutral-300">Sun</p>
                                <h4 className="font-semibold text-neutral-100">18</h4>
                                <h4 className="font-semibold text-neutral-100">18</h4>
                                <h4 className="font-semibold text-neutral-100">18</h4>
                                <h4 className="font-semibold text-neutral-100">18</h4>

                            </div>
                            <div>
                                <p className="text-neutral-300">Mon</p>
                                <h4 className="font-semibold text-neutral-100">19</h4>
                                <h4 className="font-semibold text-neutral-100">19</h4>
                                <h4 className="font-semibold text-neutral-100">19</h4>
                                <h4 className="font-semibold text-neutral-100">19</h4>
                            </div>
                            <div>
                                <p className="text-neutral-300">Tue</p>
                                <h4 className="font-semibold text-neutral-100">20</h4>
                                <h4 className="font-semibold text-neutral-100">20</h4>
                                <h4 className="font-semibold text-neutral-100">20</h4>
                                <h4 className="font-semibold text-neutral-100">20</h4>

                            </div>
                            <div>
                                <p className="text-neutral-300">Wed</p>
                                <h4 className="font-semibold text-neutral-100">21</h4>
                                <h4 className="font-semibold text-neutral-100">20</h4>
                                <h4 className="font-semibold text-neutral-100">20</h4>
                                <h4 className="font-semibold text-neutral-100">20</h4>

                            </div>
                            <div>
                                <p className="text-neutral-300">Thu</p>
                                <h4 className="font-semibold text-neutral-100">22</h4>
                                <h4 className="font-semibold text-neutral-100">20</h4>
                                <h4 className="font-semibold text-neutral-100">20</h4>
                                <h4 className="font-semibold text-neutral-100">20</h4>

                            </div>
                            <div>
                                <p className="text-neutral-300">Fri</p>
                                <h4 className="font-semibold text-neutral-100">22</h4>
                                <h4 className="font-semibold text-neutral-100">20</h4>
                                <h4 className="font-semibold text-neutral-100">20</h4>
                                <h4 className="font-semibold text-neutral-100">20</h4>

                            </div>
                            <div>
                                <p className="text-neutral-300">Sat</p>
                                <h4 className="font-semibold text-neutral-100">22</h4>
                                <h4 className="font-semibold text-neutral-100">20</h4>
                                <h4 className="font-semibold text-neutral-100">20</h4>
                                <h4 className="font-semibold text-neutral-100">20</h4>

                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold">Trips</h2>
                            <Link href="#" className="text-sm text-pink-600">View all</Link>
                        </div>
                        <TripHistory />
                    </div>
                </div>

            </div>
        </>
    );
}
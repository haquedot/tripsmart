// dashboard of trip smart

'use client';

import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import img1 from "../../../public/images/img1.png";


export default function Dashboard() {
    return (
        <div className="flex flex-col lg:flex-row lg:h-screen">
            <main className="flex-1">
                <h2 className="text-3xl font-semibold mb-4">Hello Anni!</h2>
                <p className="text-gray-600 mb-6">Welcome back and explore the world.</p>

                <div className="flex items-center mb-6">
                    <input
                        type="text"
                        className="flex-1 p-2 border rounded-md focus:outline-none"
                        placeholder="Search for your favourite destination"
                    />
                    <button className="bg-pink-600 text-white p-2 rounded-md ml-2">
                        <FaSearch />
                    </button>
                </div>

                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Popular Destinations</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white shadow-md rounded-md overflow-hidden">
                            <Image src={img1} alt="Bali" className="w-full h-36 object-cover" />
                            <h4 className="p-2 text-center">Bali</h4>
                        </div>
                        <div className="bg-white shadow-md rounded-md overflow-hidden">
                            <Image src={img1} alt="Bali" className="w-full h-36 object-cover" />
                            <h4 className="p-2 text-center">Dubai</h4>
                        </div>
                        <div className="bg-white shadow-md rounded-md overflow-hidden">
                            <Image src={img1} alt="Bali" className="w-full h-36 object-cover" />
                            <h4 className="p-2 text-center">Maldives</h4>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Most Popular</h3>
                        <div className="bg-white shadow-md rounded-md p-4">
                            <h4 className="font-semibold">Kerala</h4>
                            <p className="text-gray-500">India</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Special Offers</h3>
                        <div className="bg-white shadow-md rounded-md p-4">
                            <h4 className="font-semibold">Eiffel Tower Tour</h4>
                            <p className="text-gray-500">Paris</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-4">Trips</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white shadow-md rounded-md p-4">
                            <h4 className="font-semibold">Goa</h4>
                            <p className="text-gray-500">16 Apr - 20 Apr</p>
                        </div>
                        <div className="bg-white shadow-md rounded-md p-4">
                            <h4 className="font-semibold">Shimla</h4>
                            <p className="text-gray-500">16 Jan - 25 Jan</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
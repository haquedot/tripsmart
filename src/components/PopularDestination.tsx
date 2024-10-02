'use client';

import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay"


import destination1 from "../../public/images/destination1.png"
import Image from "next/image";
import { FaStar } from "react-icons/fa";

// Define the destinations array at the top with ratings

const destinations = [
    {
        title: "Paradise Beach, Bantayan Island",
        subtitle: "Paradise Beach, Bantayan Island",
        image: destination1,
        rating: 4.8,
    },
    {
        title: "Paradise Beach, Bantayan Island",
        subtitle: "Rome, Italy",
        image: destination1,
        rating: 4.5,
    },
    {
        title: "Paradise Beach, Bantayan Island",
        subtitle: "Bali, Indonesia",
        image: destination1,
        rating: 4.7,
    },
    {
        title: "Paradise Beach, Bantayan Island",
        subtitle: "Paris, France",
        image: destination1,
        rating: 4.9,
    },
    {
        title: "Paradise Beach, Bantayan Island",
        subtitle: "Santorini, Greece",
        image: destination1,
        rating: 4.6,
    },
    {
        title: "Paradise Beach, Bantayan Island",
        subtitle: "Kyoto, Japan",
        image: destination1,
        rating: 4.8,
    },
];

export function PopularDestination() {
    return (
        <section className="container mx-auto py-12 bg-white">
            <div className="text-center">
                <h2 className="text-sm md:text-md font-bold text-pink-500 mb-3 tracking-widest"> TOP DESTINATIONS</h2>
                <h1 className="text-3xl md:text-5xl font-bold mb-12 tracking-wide">Popular Destinations</h1>
            </div>
            <div className="md:px-14">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {destinations.map((destination, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <div className="border rounded-3xl overflow-hidden">
                                        <Image src={destination.image} alt={destination.title} className="w-full" />
                                        <div className="p-4 space-y-3">
                                            <h3 className="text-xl font-semibold">{destination.title}</h3>

                                            <p className="text-sm text-gray-600">{destination.subtitle}</p>

                                            <div className="flex items-center text-yellow-500 ">
                                                <p className="text-orange-500 font-bold gap-1 flex items-center">
                                                    {destination.rating}
                                                    <FaStar />
                                                </p>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex"/>
                    <CarouselNext className="hidden md:flex"/>
                </Carousel>
            </div>
        </section>
    );
}

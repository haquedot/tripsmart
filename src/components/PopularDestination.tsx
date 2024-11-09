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

interface PopularDestinationProps {
    height?: string;
}

export const PopularDestination: React.FC<PopularDestinationProps> = ({ height }) => {
    return (

        <div className="">
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
                                    <div className="p-3 pb-0 rounded-2xl">
                                        <Image src={destination.image} alt={destination.title} className={`max-h-${height} w-full object-cover rounded-2xl`} />
                                    </div>
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
                <CarouselPrevious className="hidden md:flex -left-3" />
                <CarouselNext className="hidden md:flex -right-3" />
            </Carousel>
        </div>
    );
}

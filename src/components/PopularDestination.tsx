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
import Rome from "../../public/images/Rome.jpg"
import Bali from "../../public/images/Bali.jpg"
import Paris from "../../public/images/Paris.jpg"
import Santorini from "../../public/images/Santorini.jpg"
import Kyoto from "../../public/images/Kyoto.jpg"



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
        title: "Metropolitan City of Rome Capital Italy",
        subtitle: "Rome, Italy",
        image: Rome,
        rating: 4.5,
    },
    {
        title: "The westernmost of the Lesser Sunda Islands",
        subtitle: "Bali, Indonesia",
        image: Bali,
        rating: 4.7,
    },
    {
        title: "The Eiffel Tower in Paris",
        subtitle: "Paris, France",
        image: Paris,
        rating: 4.9,
    },
    {
        title: "The island of Santorini",
        subtitle: "Santorini, Greece",
        image: Santorini,
        rating: 4.6,
    },
    {
        title: "The classical Buddhist temples",
        subtitle: "Kyoto, Japan",
        image: Kyoto,
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

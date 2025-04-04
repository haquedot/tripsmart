import Image from "next/image";
import feature from "../../public/images/feature.png";

export default function Features() {
    return (
        <section className="mx-auto py-12 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="block">
                <div className="text-center md:text-start mb-10">
                    <h2 className="text-sm md:text-md font-bold text-pink-500 mb-3 tracking-widest">KEY FEATURES</h2>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-wide mb-6">Why use tripsmart?</h1>
                </div>

                <div className="">
                    <div className="block">
                        <div className="flex flex-col space-y-1 mb-3 border border-indigo-100 p-5 rounded-3xl">
                            <h3 className="text-xl font-bold text-neutral-800">Trip Planning</h3>
                            <p className="text-neutral-500 text-md">
                                TripSmart allows users to plan trips based on their location, offering informations like transportation, accommodations, local services (like pharmacies and hospitals), and popular tourist attractions.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-1 mb-3 border border-indigo-100 p-5 rounded-3xl">
                            <h3 className="text-xl font-bold text-neutral-800">Real Time Updates</h3>
                            <p className="text-neutral-500 text-md">
                                Integrated with APIs like Google Maps and OpenWeatherMap, TripSmart provides users with live updates on weather conditions ensuring a smooth and informed travel experience.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-1 mb-3 border border-indigo-100 p-5 rounded-3xl">
                            <h3 className="text-xl font-bold text-neutral-800">Comprehensive Local Services</h3>
                            <p className="text-neutral-500 text-md">
                                TripSmart offers information of nearby services like restaurants, pharmacies, and hospitals, making it easier for travelers to find essential amenities and local attractions on their trips.                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex order-first md:order-last">
                <Image src={feature} alt="Feature" />
            </div>

        </section>
    );
}


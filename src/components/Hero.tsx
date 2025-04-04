import Image from "next/image";
import hero1 from "../../public/images/hero1.png"
import { Button } from "./ui/button";
import { FaShoppingBag } from "react-icons/fa";
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import CreateTripForm from './CreateTripForm';

export default function Hero() {
    return (
        <>
            <section className="min-h-screen flex justify-center items-center py-20">
                <div className="mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="flex items-center justify-center text-center md:text-start">
                            <div className="space-y-12">
                                <p className="mx-auto md:mx-0 flex items-center gap-3 w-max shadow-sm font-bold border bg-white text-pink-500 text-sm px-4 py-2 rounded-full">
                                    Explore the world! <FaShoppingBag />
                                </p>
                                <h1 className="text-4xl md:text-7xl font-bold">
                                    Plan Your
                                    <span className="text-pink-500 mx-2">Smart Trip</span>
                                    with Ease.
                                </h1>
                                <p className="text-gray-500">
                                    We always make our customer happy by providing curated information of trip.
                                </p>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button>Create New Trip</Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-[625px]">
                                        <CreateTripForm />
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                        <div className="flex items-center justify-center order-first md:order-last">
                            <Image src={hero1} alt="Hero" className="w-full" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
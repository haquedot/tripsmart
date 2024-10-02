import Image from "next/image";
import feature from "../../public/images/feature.png";

export default function Features() {
    return (
        <section className="container mx-auto py-12 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="block">
                <div className="text-center md:text-start">
                    <h2 className="text-sm md:text-md font-bold text-pink-500 mb-3 tracking-widest">KEY FEATURES</h2>
                    <h1 className="text-3xl md:text-5xl font-bold mb-12 tracking-wide">Why use tripsmart?</h1>
                </div>

                <div className="">
                    <div className="block">
                        <div className="flex flex-col space-y-1 mb-3 border border-indigo-100 p-5 rounded-3xl">
                            <h3 className="text-xl font-bold text-gray-800">Feature 1</h3>
                            <p className="text-gray-500">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-1 mb-3 border border-indigo-100 p-5 rounded-3xl">
                            <h3 className="text-xl font-bold text-gray-800">Feature 2</h3>
                            <p className="text-gray-500">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-1 mb-3 border border-indigo-100 p-5 rounded-3xl">
                            <h3 className="text-xl font-bold text-gray-800">Feature 3</h3>
                            <p className="text-gray-500">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                            </p>
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


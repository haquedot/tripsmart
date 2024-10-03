import Image from "next/image";
import feature from "../../public/images/feature.png";

export default function Features() {
    return (
        <section className="container mx-auto py-12 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="block">
                <div className="text-center md:text-start mb-10">
                    <h2 className="text-sm md:text-md font-bold text-pink-500 mb-3 tracking-widest">KEY FEATURES</h2>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-wide mb-6">Why use tripsmart?</h1>
                    <p className="text-neutral-600 text-sm max-w-xl">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                        from 45 BC.
                    </p>
                </div>

                <div className="">
                    <div className="block">
                        <div className="flex flex-col space-y-1 mb-3 border border-indigo-100 p-5 rounded-3xl">
                            <h3 className="text-xl font-bold text-neutral-800">Feature 1</h3>
                            <p className="text-neutral-500 text-md">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-1 mb-3 border border-indigo-100 p-5 rounded-3xl">
                            <h3 className="text-xl font-bold text-neutral-800">Feature 2</h3>
                            <p className="text-neutral-500 text-md">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-1 mb-3 border border-indigo-100 p-5 rounded-3xl">
                            <h3 className="text-xl font-bold text-neutral-800">Feature 3</h3>
                            <p className="text-neutral-500 text-md">
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


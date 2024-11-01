// about page for TripSmart

'use client';

import React from 'react';

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-4 min-h-screen">
            <div className="w-full max-w-3xl text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">About TripSmart</h1>
                <p className="text-lg text-gray-600 mt-4">
                    At TripSmart, we&rsquo;re dedicated to enhancing your travel experience by making it smarter and more convenient. Learn more about our journey, mission, and what drives us.
                </p>
            </div>
            
            {/* Company Overview Section */}
            <section className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800">Who We Are</h2>
                <p className="text-gray-700 mt-4">
                    TripSmart is a forward-thinking travel platform designed to simplify and enhance every step of your journey. Whether you are exploring new destinations or planning a business trip, our solutions make it easy, accessible, and smart.
                </p>
            </section>
            
            {/* Mission and Vision Section */}
            <section className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800">Our Mission and Vision</h2>
                <p className="text-gray-700 mt-4">
                    Our mission is to provide seamless and efficient travel experiences for everyone. We envision a world where planning and enjoying travel is as easy and joyful as the destination itself.
                </p>
            </section>
            
            {/* Core Values Section */}
            <section className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800">Our Core Values</h2>
                <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                    <li>Customer Satisfaction</li>
                    <li>Innovation and Excellence</li>
                    <li>Transparency and Trust</li>
                    <li>Environmental Responsibility</li>
                    <li>Commitment to Growth and Learning</li>
                </ul>
            </section>

            {/* Team Section */}
            <section className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800">Meet Our Team</h2>
                <p className="text-gray-700 mt-4">
                    Our team is made up of travel enthusiasts, tech innovators, and dedicated professionals who are passionate about transforming the way people travel. We work tirelessly to bring the best travel solutions to you.
                </p>
                {/* Add images or more detailed info about team members if available */}
            </section>
            
            {/* Contact Information */}
            <section className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
                <p className="text-gray-700 mt-4">
                    We are here to help with any questions, feedback, or partnership opportunities. Reach out to us at <a href="mailto:contact@tripsmart.com" className="text-blue-600 hover:underline">contact@tripsmart.com</a>.
                </p>
            </section>
        </div>
    )
}

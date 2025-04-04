// Contact us component with form 
'use client';

import React from 'react';
import { Button } from './ui/button';

export default function Contact() {
    return (
        <div className="w-full shadow-md border rounded-md text-neutral-900 bg-white p-6">
            <h3 className="text-black text-xl font-semibold mb-4">Contact Us</h3>
            <form className="flex flex-col space-y-4">
                <label htmlFor="name" className="text-black">Name</label>
                <input type="text" id="name" name="name" className="py-2 px-4 rounded-md bg-neutral-100 text-black"  placeholder='Enter your name'/>
                <label htmlFor="email" className="text-black">Email</label>
                <input type="email" id="email" name="email" className="py-2 px-4 rounded-md bg-neutral-100 text-black" placeholder='Enter your email' />
                <label htmlFor="message" className="text-black">Message</label>
                <textarea id="message" name="message" className="py-2 px-4 rounded-md bg-neutral-100 text-black" rows={5} placeholder='Type your message...'></textarea>
                <Button>Send</Button>
            </form>
        </div>
    );
};
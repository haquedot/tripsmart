'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';

export default function SignupPage() {
  // State to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const onSignup = async () => {
    try {
      const response = await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        // Success toast
        toast.success('Signup successful! Redirecting to login...');
        // Clear form fields
        setName('');
        setEmail('');
        setPassword('');
        // Redirect to login page after successful signup
        setTimeout(() => {
          router.push('/login');
        }, 1500); // Delay for user to see the toast
      } else {
        // Show error toast if signup fails
        toast.error('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error('An error occurred during signup. Please try again.');
    }
  };

  // use Tailwind CSS classes to style the form
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4 space-y-4 border bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent form submission
            onSignup(); // Call signup function
          }}
        >
          <div className="flex flex-col mb-3">
            <label htmlFor="inline-full-name" className="mb-2 font-semibold text-md">
              Full Name
            </label>
            <input
              type="text"
              id="inline-full-name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Merajul Haque"
              required
            />
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="inline-email" className="mb-2 font-semibold text-md">
              Email
            </label>
            <input
              type="email"
              id="inline-email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="inline-password" className="mb-2 font-semibold text-md">
              Password
            </label>
            <input
              type="password"
              id="inline-password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="******************"
              required
            />
          </div>

          <Button className="w-full my-4 rounded">Sign Up</Button>

          <hr />
        </form>
        <Button variant={'outline'} className="w-full flex items-center gap-3 rounded">
          Sign Up with Google
        </Button>
        <p className="text-center">
          Already have an account? <span onClick={() => router.push('/login')} className="text-blue-500 cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
}

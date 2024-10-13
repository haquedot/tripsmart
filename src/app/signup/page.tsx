// signup/page.tsx

'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function SignupPage() {
  // State to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const router = useRouter();

  const onSignup = async () => {
    try {
      const response = await axios.post('/api/signup', {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        // Success logic here
        setSuccess('Signup successful!');
        setError('');
        // Clear form fields
        setName('');
        setEmail('');
        setPassword('');
        // Redirect to login page
        router.push('/login');
      } else {
        setError('Signup failed. Please try again.');
        setSuccess('');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('An error occurred during signup. Please try again.');
      setSuccess('');
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
            placeholder="John Doe"
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
          />
        </div>
  
        <Button className="w-full my-4 rounded">Sign Up</Button>
        
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">{success}</p>}
  
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

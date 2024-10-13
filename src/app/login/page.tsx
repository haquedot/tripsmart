// login/page.tsx

'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
    // State to manage form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const onLogin = async () => {
        try {
            const response = await axios.post('/api/login', {
                email,
                password,
            });

            if (response.status === 200) {
                // store token in cookie
                document.cookie = `token=${response.data.token}`;


                // Success logic here
                setError('');
                // Redirect to dashboard page
                router.push('/dashboard');
            } else {
                setError('Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred during login. Please try again.');
        }
    };

    // use Tailwind CSS classes to style the form
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-4 space-y-4 border bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault(); // Prevent form submission
                        onLogin(); // Call login function
                    }}
                >
                    <div className="flex flex-col mb-3">
                        <label htmlFor="email" className="mb-2 font-semibold text-md">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="flex flex-col mb-3">
                        <label htmlFor="password" className="mb-2 font-semibold text-md">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="******************"
                        />
                    </div>

                    <Button className="w-full my-4 rounded">Login</Button>

                    {error && <p className="text-red-500 text-xs italic">{error}</p>}

                    <hr />
                </form>

                <Button variant={'outline'} className="w-full flex items-center gap-3 rounded">
                    Sign Up with Google
                </Button>

                <p className="text-center">
                    Don&apos;t have an account?{' '}
                    <span onClick={() => router.push('/signup')} className="text-blue-500 cursor-pointer">
                        Sign Up
                    </span>
                </p>
            </div>
        </div>

    );
}
// Login page using next-auth js
'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-4 space-y-4 border bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <form action="">
                    <div className="flex flex-col mb-3">
                        <label htmlFor="email" className='mb-2 font-semibold text-md'>Email</label>
                        <input type="text" id='email' className='border px-3 py-2 rounded' placeholder='Enter your email' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className='mb-2 font-semibold text-md'>Password</label>
                        <input type="text" id='password' className='border px-3 py-2 rounded' placeholder='Enter your password' />
                    </div>
                    <Button className='w-full my-4 rounded'>Login</Button>
                    <hr />
                </form>
                <Button variant={'outline'} onClick={() => signIn('google')} className='w-full flex items-center gap-3 rounded'>Sign Up with Google</Button>
                <p className='text-center'>Already have an account? <span onClick={() => router.push('/signup')} className='text-blue-500 cursor-pointer'>Sign Up</span></p>
            </div>
        </div>
    );
}
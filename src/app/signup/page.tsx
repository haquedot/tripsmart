// signup/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Signup() {
    const router = useRouter();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user)

            console.log("Signup success: ", response.data);

            router.push('/login');


        } catch (error: any) {
            console.log(error);
            toast.error(error.message);
        }

    }

    useEffect(() => {
        if (user.name && user.email && user.password) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-4 space-y-4 border bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <form action="">
                    <div className="flex flex-col mb-3">
                        <label htmlFor="name" className='mb-2 font-semibold text-md'>Name</label>
                        <input
                            type="text"
                            id='name'
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                            className='border px-3 py-2 rounded'
                            placeholder='Enter your name'
                        />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="email" className='mb-2 font-semibold text-md'>Email</label>
                        <input
                            type="text"
                            id='email'
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            className='border px-3 py-2 rounded'
                            placeholder='Enter your email' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className='mb-2 font-semibold text-md'>Password</label>
                        <input
                            type="text"
                            id='password'
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            className='border px-3 py-2 rounded'
                            placeholder='Enter your password'
                        />
                    </div>
                    <Button
                        onClick={onSignup}
                        className='w-full my-4 rounded'
                    >
                        {
                            buttonDisabled ? 'Fill in the form' : 'Sign Up'
                        }
                    </Button>
                    <hr />
                </form>
                <Button variant={'outline'} onClick={() => signIn('google')} className='w-full flex items-center gap-3 rounded'>Sign Up with Google</Button>
                <p className='text-center'>Already have an account? <span onClick={() => router.push('/login')} className='text-blue-500 cursor-pointer'>Login</span></p>

            </div>
        </div>
    );
}
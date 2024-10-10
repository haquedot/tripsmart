// Login page using next-auth js
'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Login() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/login', user);
            console.log(response);
            router.push('/profile');
            setLoading(false);

        } catch (error: any) {
            console.log(error);

        }

    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-4 space-y-4 border bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center">
                    {
                        loading ? 'Loading...' : 'Login'
                    }
                </h2>
                <form action="">
                    <div className="flex flex-col mb-3">
                        <label htmlFor="email" className='mb-2 font-semibold text-md'>Email</label>
                        <input
                            type="text"
                            id='email'
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            className='border px-3 py-2 rounded'
                            placeholder='Enter your email'
                        />
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
                        onClick={onLogin}
                        className='w-full my-4 rounded'
                    >
                        {
                            buttonDisabled ? 'Please fill in all fields' : 'Login'
                        }
                    </Button>
                    <hr />
                </form>
                <Button variant={'outline'} onClick={() => signIn('google')} className='w-full flex items-center gap-3 rounded'>Sign Up with Google</Button>
                <p className='text-center'>Already have an account? <span onClick={() => router.push('/signup')} className='text-blue-500 cursor-pointer'>Sign Up</span></p>
            </div>
        </div>
    );
}
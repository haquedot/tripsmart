// signup/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function VerifyEmail() {
    const [token, setToken] = useState('');
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);
    // const router = useRouter();

    const verifyUserEmail = async () => {
        try {
            await axios.post('/api/verifyemail', { token })
            setVerified(true);

        } catch (error: any) {
            setError(true);
            console.log(error);
        }

        useEffect(() => {
            setError(false);
            const urlToken = window.location.search.split("=")[1]
            setToken(urlToken || "");

            // const { query } = router;
            // const urlTokenTwo = query.token as string;
            
        }, []);

        useEffect(() => {
            setError(false);
            if (token.length > 0) {
                verifyUserEmail();
            }

        }, [token]);

        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-full max-w-md p-4 space-y-4 border bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-center">Verify Email</h2>
                    {token ? `${token}`:"No Token" }
                    {
                        verified && (
                            <div >
                               <p className="text-green-500"> Your email has been verified successfully!</p>
                               <Link href="/login">Login</Link>
                            </div>
                        )
                    }
                    {
                        error &&(
                            <div>
                                <h2>Error</h2>
                                <p className="text-red-500">Your email verification failed!</p>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}
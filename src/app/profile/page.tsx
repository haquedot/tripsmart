//simple profile page
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';


export default function Profile() {
    const router = useRouter();
    const [data, setData] = useState("no data");

    const getUserData = async () => {
        try {
            const response = await axios.post('/api/users/me');
            console.log(response);
            setData(response.data._id);

        } catch (error: any) {
            console.log(error);
        }
    }

    const logout = async () => {
        try {
            await axios.post('/api/users/logout');
            toast.success('Logout successful');
            router.push('/login');

        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-4 space-y-4 border bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center">Profile</h2>
                <p>{data}</p>
                <Link href={`/profile/${data}`}>Profile</Link>
                <button onClick={logout} className="bg-red-500 text-white p-2 rounded">Logout</button>

            </div>
        </div>
    )

}
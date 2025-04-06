'use client';

import { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from 'next/navigation';

interface TripData {
    tripName: string;
    destination: string;
    startDate: string;
    endDate: string;
}

export default function CreateTripForm({ onTripCreated }: { onTripCreated?: () => void }) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<TripData>({
        tripName: '',
        destination: '',
        startDate: '',
        endDate: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('/api/trips', formData, {
                withCredentials: true // Important for sending cookies
            });

            setOpen(false);
            setFormData({
                tripName: '',
                destination: '',
                startDate: '',
                endDate: '',
            });

            if (onTripCreated) {
                onTripCreated();
            }
        } catch (error) {
            console.error('Error creating trip:', error);

            let errorMessage = "Failed to create trip";
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 401) {
                    errorMessage = "Please login to create a trip";
                    router.push('/login');
                } else {
                    errorMessage = error.response?.data?.error || errorMessage;
                }
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <DialogHeader>
                    <DialogTitle>Create a new trip</DialogTitle>
                    <DialogDescription>
                        Create a new trip here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <label htmlFor="tripName" className="flex flex-col font-semibold">
                        Trip name
                        <input
                            type="text"
                            id="tripName"
                            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 font-normal mt-2"
                            placeholder="Enter trip name"
                            value={formData.tripName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="destination" className="flex flex-col font-semibold">
                        Destination
                        <input
                            type="text"
                            id="destination"
                            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 font-normal mt-2"
                            placeholder="Enter your destination"
                            value={formData.destination}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="startDate" className="flex flex-col font-semibold">
                        Start date
                        <input
                            type="date"
                            id="startDate"
                            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 font-normal mt-2"
                            value={formData.startDate}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="endDate" className="flex flex-col font-semibold">
                        End date
                        <input
                            type="date"
                            id="endDate"
                            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 font-normal mt-2"
                            value={formData.endDate}
                            onChange={handleChange}
                            required
                            min={formData.startDate}
                        />
                    </label>
                </div>
                <DialogFooter>
                    <Button type="submit" disabled={loading}>
                        {loading ? (
                            "Saving..."
                        ) : (
                            "Save changes"
                        )}
                    </Button>
                </DialogFooter>
            </form>
        </>
    );
}
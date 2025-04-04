import { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface FormData {
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  transportation?: 'car' | 'train' | 'bus' | 'flight' | 'other';
  accommodation?: string;
  budget?: number;
}

export default function CreateTripForm({ onSuccess }: { onSuccess?: () => void }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    destination: '',
    startDate: '',
    endDate: '',
    transportation: 'other',
    accommodation: '',
    budget: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: id === 'budget' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!session?.user?.id) {
      toast.error('You must be logged in to create a trip');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/trips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: session.user.id,
          title: formData.title,
          destination: formData.destination,
          startDate: formData.startDate,
          endDate: formData.endDate,
          transportation: formData.transportation,
          accommodation: formData.accommodation,
          budget: formData.budget
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create trip');
      }

      toast.success('Trip created successfully!');
      if (onSuccess) onSuccess();
      router.refresh();
    } catch (error) {
      console.error('Error creating trip:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to create trip');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>Create a new trip</DialogTitle>
        <DialogDescription>
          Create a new trip here. Click save when you are done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <label htmlFor="title" className="flex flex-col font-semibold">
          Trip name
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 font-normal mt-2"
            placeholder="Enter trip name"
            required
          />
        </label>
        <label htmlFor="destination" className="flex flex-col font-semibold">
          Destination
          <input
            type="text"
            id="destination"
            value={formData.destination}
            onChange={handleChange}
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 font-normal mt-2"
            placeholder="Enter your destination"
            required
          />
        </label>
        <label htmlFor="startDate" className="flex flex-col font-semibold">
          Start date
          <input
            type="date"
            id="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 font-normal mt-2"
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </label>
        <label htmlFor="endDate" className="flex flex-col font-semibold">
          End date
          <input
            type="date"
            id="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 font-normal mt-2"
            required
            min={formData.startDate || new Date().toISOString().split('T')[0]}
          />
        </label>
        <label htmlFor="transportation" className="flex flex-col font-semibold">
          Transportation
          <select
            id="transportation"
            value={formData.transportation}
            onChange={handleChange}
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 font-normal mt-2"
          >
            <option value="car">Car</option>
            <option value="train">Train</option>
            <option value="bus">Bus</option>
            <option value="flight">Flight</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label htmlFor="accommodation" className="flex flex-col font-semibold">
          Accommodation
          <input
            type="text"
            id="accommodation"
            value={formData.accommodation}
            onChange={handleChange}
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 font-normal mt-2"
            placeholder="Where are you staying?"
          />
        </label>
        <label htmlFor="budget" className="flex flex-col font-semibold">
          Budget ($)
          <input
            type="number"
            id="budget"
            value={formData.budget}
            onChange={handleChange}
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 font-normal mt-2"
            placeholder="Estimated budget"
            min="0"
          />
        </label>
      </div>
      <DialogFooter>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Create Trip'}
        </Button>
      </DialogFooter>
    </form>
  );
}
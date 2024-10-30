// upcoming trip data with date

import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';
import { FaCalendar, FaEye } from 'react-icons/fa';
import Link from 'next/link';
import { upcomingTrips } from '@/lib/upcomingTripData';
import TripDetail from '@/components/TripDetail';

export default function UpcomingTripPage() {
    return (
        <>
            <section className="mb-4">
               <TripDetail />
            </section>

        </>
    );
}

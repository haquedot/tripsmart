'use client';

import { useState } from 'react';

type Notification = {
    id: number;
    title: string;
    message: string;
};

export default function Notifications() {
    const [showModal, setShowModal] = useState(false);
    const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);

    const notifications: Notification[] = [
        { id: 1, title: 'New Destination Alert', message: 'Explore popular destinations trending this season.' },
        { id: 2, title: 'Trip Status Update', message: 'Your trip to Paris is scheduled to start in 2 days. Prepare for an exciting journey!' },
        { id: 3, title: 'Weather Alert', message: 'Rain is expected in London tomorrow. Plan accordingly!' },
        { id: 4, title: 'New Travel Guide Available', message: 'Check out our latest guide to Tokyo to enhance your travel experience.' },
    ];

    const handleView = (notification: Notification) => {
        setCurrentNotification(notification);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setCurrentNotification(null);
    };

    return (
        <div className="w-full flex flex-col lg:h-screen">
            <div className="w-full flex flex-col gap-2">
                {notifications.map((notification) => (
                    <div key={notification.id} className="w-full flex justify-between bg-pink-50 p-3 rounded-md">
                        <div className="block">
                            <h3 className="text-sm font-semibold">{notification.title}</h3>
                            <p className="text-xs">{notification.message.slice(0, 30)}...</p>
                        </div>
                        <div className="flex">
                            <button
                                onClick={() => handleView(notification)}
                                className="bg-indigo-50 hover:bg-indigo-500 text-indigo-500 hover:text-white px-4 py-2 rounded-sm text-sm"
                            >
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && currentNotification && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-lg font-semibold mb-4">{currentNotification.title}</h2>
                        <p className="text-sm mb-6">{currentNotification.message}</p>
                        <button
                            onClick={closeModal}
                            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

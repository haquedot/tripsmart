'use client';

import { useState } from 'react';

export default function Settings() {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="flex flex-col lg:h-screen">
            {/* Sidebar page*/}
            <aside className="w-full mb-3">
                <nav className="flex">
                    <button
                        onClick={() => setActiveTab('profile')}
                        className={`px-4 py-2 rounded-md text-sm ${
                            activeTab === 'profile' ? 'bg-pink-50 text-pink-500' : 'text-gray-700'
                        }`}
                    >
                        Profile Information
                    </button>
                    <button
                        onClick={() => setActiveTab('security')}
                        className={`px-4 py-2 rounded-md text-sm ${
                            activeTab === 'security' ? 'bg-pink-50 text-pink-500' : 'text-gray-700'
                        }`}
                    >
                        Security
                    </button>
                    <button
                        onClick={() => setActiveTab('notifications')}
                        className={`px-4 py-2 rounded-md text-sm ${
                            activeTab === 'notifications' ? 'bg-pink-50 text-pink-500' : 'text-gray-700'
                        }`}
                    >
                        Notifications
                    </button>
                    <button
                        onClick={() => setActiveTab('preferences')}
                        className={`px-4 py-2 rounded-md text-sm ${
                            activeTab === 'preferences' ? 'bg-pink-50 text-pink-500' : 'text-gray-700'
                        }`}
                    >
                        Preferences
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
                {activeTab === 'profile' && (
                    <div className='bg-white p-5 shadow-md border rounded-md'>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h2>
                        <div className="space-y-4">
                            <label className="block">
                                <span className="text-gray-600">Full Name</span>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                />
                            </label>
                            <label className="block">
                                <span className="text-gray-600">Email Address</span>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                />
                            </label>
                            <label className="block">
                                <span className="text-gray-600">Phone Number</span>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                />
                            </label>
                            <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
                                Save Changes
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'security' && (
                    <div className='bg-white p-5 shadow-md border rounded-md'>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Security Settings</h2>
                        <div className="space-y-4">
                            <label className="block">
                                <span className="text-gray-600">Current Password</span>
                                <input
                                    type="password"
                                    placeholder="Enter current password"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                />
                            </label>
                            <label className="block">
                                <span className="text-gray-600">New Password</span>
                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                />
                            </label>
                            <label className="block">
                                <span className="text-gray-600">Confirm New Password</span>
                                <input
                                    type="password"
                                    placeholder="Confirm new password"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                />
                            </label>
                            <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
                                Update Password
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'notifications' && (
                    <div className='bg-white p-5 shadow-md border rounded-md'>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Notification Settings</h2>
                        <div className="space-y-4">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-gray-600">Email Notifications</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-gray-600">SMS Notifications</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-gray-600">Push Notifications</span>
                            </label>
                            <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
                                Save Preferences
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'preferences' && (
                    <div className='bg-white p-5 shadow-md border rounded-md'>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Preferences</h2>
                        <div className="space-y-4">
                            <label className="block">
                                <span className="text-gray-600">Language</span>
                                <select className="mt-1 p-2 w-full border border-gray-300 rounded-md">
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                </select>
                            </label>
                            <label className="block">
                                <span className="text-gray-600">Timezone</span>
                                <select className="mt-1 p-2 w-full border border-gray-300 rounded-md">
                                    <option>GMT</option>
                                    <option>PST</option>
                                    <option>EST</option>
                                </select>
                            </label>
                            <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
                                Save Preferences
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

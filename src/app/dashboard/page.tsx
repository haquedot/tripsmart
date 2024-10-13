// components/Dashboard.tsx

'use client';

import { useRouter } from 'next/navigation';
import { FaBox } from 'react-icons/fa';

import {  MdDashboard } from "react-icons/md";
import { IoIosNotifications, IoMdLogOut, IoMdSettings } from "react-icons/io";
import { useState } from 'react';
import Dashboard from './Dashboard';
import { cn } from '@/lib/utils';
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";

type View =
  "dashboard" |
  "myTrips" |
  "notifications" |
  "settings";


const UserDashboard = () => {
  const [view] = useState<View>("dashboard");
  const router = useRouter();
  const [open, setOpen] = useState(false);


  const handleLogout = () => {
    document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    router.push('/login');
  }


  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <MdDashboard className="text-pink-500 h-5 w-5 flex-shrink-0" />
      ),
      view: "dashboard" as View,
    },
    {
      label: "My Trips",
      href: "#",
      icon: (
        <FaBox className="text-pink-500 h-5 w-5 flex-shrink-0" />
      ),
      view: "myOrders" as View,
    },

    {
      label: "Notifications",
      href: "#",
      icon: (
        <IoIosNotifications className="text-pink-500 h-5 w-5 flex-shrink-0" />
      ),
      view: "notifications" as View,
    },
    {
      label: "Account Settings",
      href: "#",
      icon: (
        <IoMdSettings className="text-pink-500 h-5 w-5 flex-shrink-0" />
      ),
      view: "settings" as View,
    },
  ];


  const renderView = () => {
    switch (view) {
      case "dashboard":
        return <Dashboard />;
      default:
        return <Dashboard />;
    }
  };



  return (

    <>
      <div
        className={cn(
          "rounded-md flex flex-col md:flex-row bg-gray-100 w-full flex-1 mx-auto border border-neutral-200 overflow-hidden",
          "h-screen"
        )}
      >
        <Sidebar open={open} setOpen={setOpen} animate={false}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {/* <Logo /> */}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink
                    key={idx}
                    link={link}
                  // onClick={() => handleLinkClick(link.view, link.action)}
                  />
                ))}
              </div>
            </div>
            <div>
              <button
                onClick={handleLogout}
                className="flex flex-center text-red-500 hover:text-red-600"
              >
                <IoMdLogOut className="h-5 w-5 flex-shrink-0" />
                <span className="ml-2">Logout</span>
              </button>
            </div>
          </SidebarBody>
        </Sidebar>
        <div className="flex-1 rounded-t-2xl md:rounded-l-2xl md:rounded-r-none border p-4 md:p-6 bg-white max-h-screen overflow-y-auto">
          {renderView()}
        </div>
      </div>
    </>

    // <div className="flex flex-col lg:flex-row lg:h-screen bg-gray-100">
    //   <aside className="bg-white w-full lg:w-1/6 p-5 shadow-md">
    //     <h1 className="text-2xl font-bold text-pink-600 mb-5">Dashboard</h1>
    //     <nav>
    //       <ul className="space-y-4">
    //         <li className="flex items-center">
    //           <Link href="/dashboard" className='flex items-center'>
    //             <FaHome className="text-pink-600 mr-2 cursor-pointer" /> Home
    //           </Link>
    //         </li>
    //         <li className="flex items-center">
    //           <Link href="/dashboard/map" className='flex items-center'>
    //             <FaMap className="text-pink-600 mr-2 cursor-pointer" /> Map
    //           </Link>
    //         </li>
    //         <li className="flex items-center">
    //           <Link href="/dashboard/profile" className='flex items-center'>
    //             <FaUser className="text-pink-600 mr-2 cursor-pointer" /> Profile
    //           </Link>
    //         </li>
    //         <li className="flex items-center">
    //           <Link href="/dashboard/settings" className='flex items-center'>
    //             <FaCog className="text-pink-600 mr-2 cursor-pointer" /> Settings
    //           </Link>
    //         </li>
    //         <li className="flex items-center">
    //           <button onClick={onLogout} className='flex items-center'>
    //             <FaSignOutAlt className="text-pink-600 mr-2 cursor-pointer" /> Logout
    //           </button>
    //         </li>
    //       </ul>
    //     </nav>
    //   </aside>

    //   <main className="flex-1 p-5">
    //     <h2 className="text-3xl font-semibold mb-4">Hello Anni!</h2>
    //     <p className="text-gray-600 mb-6">Welcome back and explore the world.</p>

    //     <div className="flex items-center mb-6">
    //       <input
    //         type="text"
    //         className="flex-1 p-2 border rounded-md focus:outline-none"
    //         placeholder="Search for your favourite destination"
    //       />
    //       <button className="bg-pink-600 text-white p-2 rounded-md ml-2">
    //         <FaSearch />
    //       </button>
    //     </div>

    //     <section className="mb-8">
    //       <h3 className="text-xl font-semibold mb-4">Popular Destinations</h3>
    //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    //         <div className="bg-white shadow-md rounded-md overflow-hidden">
    //           <img src="/bali.jpg" alt="Bali" className="w-full h-36 object-cover" />
    //           <h4 className="p-2 text-center">Bali</h4>
    //         </div>
    //         <div className="bg-white shadow-md rounded-md overflow-hidden">
    //           <img src="/dubai.jpg" alt="Dubai" className="w-full h-36 object-cover" />
    //           <h4 className="p-2 text-center">Dubai</h4>
    //         </div>
    //         <div className="bg-white shadow-md rounded-md overflow-hidden">
    //           <img src="/maldives.jpg" alt="Maldives" className="w-full h-36 object-cover" />
    //           <h4 className="p-2 text-center">Maldives</h4>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
    //       <div>
    //         <h3 className="text-xl font-semibold mb-4">Most Popular</h3>
    //         <div className="bg-white shadow-md rounded-md p-4">
    //           <h4 className="font-semibold">Kerala</h4>
    //           <p className="text-gray-500">India</p>
    //         </div>
    //       </div>
    //       <div>
    //         <h3 className="text-xl font-semibold mb-4">Special Offers</h3>
    //         <div className="bg-white shadow-md rounded-md p-4">
    //           <h4 className="font-semibold">Eiffel Tower Tour</h4>
    //           <p className="text-gray-500">Paris</p>
    //         </div>
    //       </div>
    //     </section>

    //     <section>
    //       <h3 className="text-xl font-semibold mb-4">Trips</h3>
    //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //         <div className="bg-white shadow-md rounded-md p-4">
    //           <h4 className="font-semibold">Goa</h4>
    //           <p className="text-gray-500">16 Apr - 20 Apr</p>
    //         </div>
    //         <div className="bg-white shadow-md rounded-md p-4">
    //           <h4 className="font-semibold">Shimla</h4>
    //           <p className="text-gray-500">16 Jan - 25 Jan</p>
    //         </div>
    //       </div>
    //     </section>
    //   </main>
    // </div>

  );
};

export default UserDashboard;

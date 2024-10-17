// components/Dashboard.tsx

'use client';

import { useRouter } from 'next/navigation';
import { FaBox } from 'react-icons/fa';

import { MdDashboard } from "react-icons/md";
import { IoIosNotifications, IoMdLogOut, IoMdSettings } from "react-icons/io";
import { useState } from 'react';
import Dashboard from './Dashboard';
import { cn } from '@/lib/utils';
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import MyTrips from './my-trips/page';
import Notifications from './notification/page';
import Settings from './settings/page';
import toast from 'react-hot-toast';

type View =
  "dashboard" |
  "myTrips" |
  "notifications" |
  "settings";


const UserDashboard = () => {
  const [view, setView] = useState<View>("dashboard");
  const router = useRouter();
  const [open, setOpen] = useState(false);


  const handleLogout = () => {
    document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    toast.success('Logout successful!');
    router.push('/login');
  }

  const handleLinkClick = (view: View) => {
    setView(view);
  };


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
      view: "myTrips" as View,
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
      case "myTrips":
        return <MyTrips />;
      case "notifications":
        return <Notifications />;
      case "settings":
        return <Settings />;
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
                    onClick={() => handleLinkClick(link.view)} // Fixed the onClick handler
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



  );
};

export default UserDashboard;

'use client';

import { useRouter } from 'next/navigation';
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
import { FaTicket } from 'react-icons/fa6';
import Calendar from '@/components/Calendar';
// import {Logo} from '@/components/Logo';

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
        <MdDashboard className="h-5 w-5 flex-shrink-0" />
      ),
      view: "dashboard" as View,
    },
    {
      label: "My Trips",
      href: "#",
      icon: (
        <FaTicket className="h-5 w-5 flex-shrink-0" />
      ),
      view: "myTrips" as View,
    },

    {
      label: "Notifications",
      href: "#",
      icon: (
        <IoIosNotifications className="h-5 w-5 flex-shrink-0" />
      ),
      view: "notifications" as View,
    },
    {
      label: "Account Settings",
      href: "#",
      icon: (
        <IoMdSettings className="h-5 w-5 flex-shrink-0" />
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
          "container mx-auto py-20",
        )}
      >
        <div className="max-w-full flex">
          <Sidebar open={open} setOpen={setOpen} animate={false}>
            <SidebarBody className="justify-between gap-4">
              <div className="flex flex-col flex-1 px-4 py-4 rounded-md bg-indigo-50 dark:bg-neutral-800  overflow-y-auto overflow-x-hidden">
                {/* <Logo LogoHeight={45} LogoWidth={45}/> */}

                <div className="flex flex-col gap-2">
                  {links.map((link, idx) => (
                    <SidebarLink
                      key={idx}
                      link={link}
                      active={view === link.view}
                      onClick={() => handleLinkClick(link.view)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <Calendar />
                {/* <button
                  onClick={handleLogout}
                  className="flex flex-center text-red-500 hover:text-red-600"
                >
                  <IoMdLogOut className="h-5 w-5 flex-shrink-0" />
                  <span className="ml-2">Logout</span>
                </button> */}
              </div>
            </SidebarBody>
          </Sidebar>
          <div className="w-full flex-1 px-4 md:px-6 md:pe-0">
            {renderView()}
          </div>
        </div>
      </div>
    </>



  );
};

export default UserDashboard;

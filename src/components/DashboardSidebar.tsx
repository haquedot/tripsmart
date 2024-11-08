"use client";

import { MdDashboard } from "react-icons/md";
import { IoIosNotifications, IoMdLogOut, IoMdSettings } from "react-icons/io";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { FaTicket } from "react-icons/fa6";
import Calendar from "@/components/Calendar";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
type View = "dashboard" | "myTrips" | "notifications" | "settings";

const DashboardSidebar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <MdDashboard className="h-5 w-5 flex-shrink-0" />,
      view: "dashboard" as View,
    },
    {
      label: "My Trips",
      href: "/dashboard/my-trips",
      icon: <FaTicket className="h-5 w-5 flex-shrink-0" />,
      view: "myTrips" as View,
    },

    {
      label: "Notifications",
      href: "/dashboard/notification",
      icon: <IoIosNotifications className="h-5 w-5 flex-shrink-0" />,
      view: "notifications" as View,
    },
    {
      label: "Account Settings",
      href: "/dashboard/settings",
      icon: <IoMdSettings className="h-5 w-5 flex-shrink-0" />,
      view: "settings" as View,
    },
  ];

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      toast.success('Logout successful!');
      router.push('/login');
    }
  };

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-4">
          <div className="flex flex-col flex-1 px-4 py-4 rounded-md bg-indigo-50 dark:bg-neutral-800 overflow-y-auto overflow-x-hidden">
            {/* <Logo LogoHeight={45} LogoWidth={45}/> */}

            <div className="flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  active={pathName == link.href}

                />
              ))}
            </div>

            <button
              onClick={handleLogout}
              className="w-full flex flex-center text-red-500 hover:text-red-600 mt-4 bg-red-100 hover:bg-red-200 px-4 py-2 rounded-md"
            >
              <IoMdLogOut className="h-5 w-5 flex-shrink-0" />
              <span className="ml-2">Logout</span>
            </button>
          </div>

          <div>
            <Calendar />
          </div>
        </SidebarBody>
      </Sidebar>
    </>
  );
};

export default DashboardSidebar;

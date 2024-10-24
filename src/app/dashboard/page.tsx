"use client";

import Dashboard from "./Dashboard";
import { cn } from "@/lib/utils";

const UserDashboard = () => {



  return (
    <>
      <div className={cn("container mx-auto py-20")}>
        <div className="max-w-full lg:flex">
          <div className="w-full flex-1 px-4 md:px-6 md:pe-0">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;

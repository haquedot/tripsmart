// /pages/_app.tsx
import DashboardSidebar from "@/components/DashboardSidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trip smart",
  description: "Plan your next trip with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="sm:w-10/12 mx-auto flex py-20 px-4 gap-4">
          <DashboardSidebar />
          {children}
        </div>
      </body>
    </html>
  );
}

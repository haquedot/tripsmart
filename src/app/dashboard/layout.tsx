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
        <div className="flex py-20 px-[30px]">
          <DashboardSidebar />
          {children}
        </div>
      </body>
    </html>
  );
}

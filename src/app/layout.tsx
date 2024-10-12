// /pages/_app.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WrapLayout from "./WrapLayout";
// import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <WrapLayout>{children}</WrapLayout> {/* Wrap children with WrapLayout */}
        {/* <Analytics /> Include Vercel analytics */}
      </body>
    </html>
  );
}

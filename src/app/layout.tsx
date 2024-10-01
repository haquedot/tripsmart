import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Importing Poppins from Google Fonts
import "./globals.css";
import Navbar from "@/components/Navbar";

// Load the Poppins font with customizable weights
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Tripsmart",
  description: "A smart tourism application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

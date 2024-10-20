// /components/WrapLayout.tsx
'use client';

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const WrapLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    // Define routes where the Navbar should be hidden
    const hideNavbarRoutes = ["/signup", "/login",];
    const shouldShowNavbar = !hideNavbarRoutes.includes(pathname);

    return (
        <Provider store={store}>
            <Toaster />

            {shouldShowNavbar && <Navbar />} {/* Conditionally render Navbar */}
            {children} {/* Render the child components */}
            {shouldShowNavbar && <Footer />} {/* Conditionally render Footer */}
        </Provider>
    );
};

export default WrapLayout;

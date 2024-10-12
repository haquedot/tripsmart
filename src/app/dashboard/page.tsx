// components/Dashboard.tsx
import { FaBell, FaSearch, FaHome, FaMap, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-white w-full lg:w-1/4 p-5 shadow-md">
        <h1 className="text-2xl font-bold text-pink-600 mb-5">Dashboard</h1>
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaHome className="text-pink-600 mr-2" /> My Trips
            </li>
            <li className="flex items-center">
              <FaMap className="text-pink-600 mr-2" /> Explore
            </li>
            <li className="flex items-center">
              <FaBell className="text-pink-600 mr-2" /> Notifications
            </li>
            <li className="flex items-center">
              <FaUser className="text-pink-600 mr-2" /> Profile
            </li>
            <li className="flex items-center">
              <FaCog className="text-pink-600 mr-2" /> Settings
            </li>
            <li className="flex items-center">
              <FaSignOutAlt className="text-pink-600 mr-2" /> Logout
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5">
        <h2 className="text-3xl font-semibold mb-4">Hello Anni!</h2>
        <p className="text-gray-600 mb-6">Welcome back and explore the world.</p>

        {/* Search Bar */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            className="flex-1 p-2 border rounded-md focus:outline-none"
            placeholder="Search for your favourite destination"
          />
          <button className="bg-pink-600 text-white p-2 rounded-md ml-2">
            <FaSearch />
          </button>
        </div>

        {/* Popular Destinations */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Popular Destinations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img src="/bali.jpg" alt="Bali" className="w-full h-36 object-cover" />
              <h4 className="p-2 text-center">Bali</h4>
            </div>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img src="/dubai.jpg" alt="Dubai" className="w-full h-36 object-cover" />
              <h4 className="p-2 text-center">Dubai</h4>
            </div>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img src="/maldives.jpg" alt="Maldives" className="w-full h-36 object-cover" />
              <h4 className="p-2 text-center">Maldives</h4>
            </div>
          </div>
        </section>

        {/* Most Popular and Special Offers */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Most Popular</h3>
            <div className="bg-white shadow-md rounded-md p-4">
              <h4 className="font-semibold">Kerala</h4>
              <p className="text-gray-500">India</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Special Offers</h3>
            <div className="bg-white shadow-md rounded-md p-4">
              <h4 className="font-semibold">Eiffel Tower Tour</h4>
              <p className="text-gray-500">Paris</p>
            </div>
          </div>
        </section>

        {/* Trips Section */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Trips</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white shadow-md rounded-md p-4">
              <h4 className="font-semibold">Goa</h4>
              <p className="text-gray-500">16 Apr - 20 Apr</p>
            </div>
            <div className="bg-white shadow-md rounded-md p-4">
              <h4 className="font-semibold">Shimla</h4>
              <p className="text-gray-500">16 Jan - 25 Jan</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

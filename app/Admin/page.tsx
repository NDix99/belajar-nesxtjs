import Link from "next/link"
import React from "react"
import Image from "next/image"

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image src="/logo.png" alt="Logo" width={50} height={50} className="rounded-full" />
            <h1 className="text-3xl font-extrabold tracking-tight">Dashboard Admin</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/profile" className="text-white hover:text-indigo-200 transition duration-300">Profile</Link></li>
              <li><Link href="/Logins" className="text-white hover:text-indigo-200 transition duration-300">Logout</Link></li>
            </ul>
          </nav>
          <button className="md:hidden text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

interface DashboardCardProps {
  title: string;
  value: string;
  color: 'blue' | 'green' | 'orange' | 'red';
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, color }) => {
  const colorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className={`text-3xl font-bold ${colorClasses[color]}`}>{value}</p>
    </div>
  );
};

interface ActivityItemProps {
  text: string;
  time: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ text, time }) => (
  <li className="py-4">
    <p className="text-gray-800">{text}</p>
    <p className="text-sm text-gray-500">{time}</p>
  </li>
);

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-6 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-6">Menu</h2>
          <nav>
            <ul className="space-y-2">
              <li><Link href="/Registers" className="block py-2 px-4 hover:bg-gray-700 rounded transition duration-300">Registers</Link></li>
              <li><Link href="/Logins" className="block py-2 px-4 hover:bg-gray-700 rounded transition duration-300">Users</Link></li>
              <li><Link href="/orders" className="block py-2 px-4 hover:bg-gray-700 rounded transition duration-300">Orders</Link></li>
              <li><Link href="/products" className="block py-2 px-4 hover:bg-gray-700 rounded transition duration-300">Products</Link></li>
              <li><Link href="/settings" className="block py-2 px-4 hover:bg-gray-700 rounded transition duration-300">Settings</Link></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <DashboardCard title="Total Users" value="1,234" color="blue" />
              <DashboardCard title="Revenue" value="$45,678" color="green" />
              <DashboardCard title="New Orders" value="89" color="orange" />
              <DashboardCard title="Pending Tasks" value="12" color="red" />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4">Recent Activity</h3>
              <ul className="divide-y divide-gray-200">
                <ActivityItem text="New user registered: John Doe" time="2 hours ago" />
                <ActivityItem text="Order #1234 completed" time="4 hours ago" />
                <ActivityItem text="New product added: Wireless Headphones" time="Yesterday" />
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
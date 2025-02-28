import React from "react";
import { FaUserShield, FaBlog, FaProjectDiagram, FaTools } from "react-icons/fa";

const AdminDashComp = () => {
  // Example data (You can replace it with dynamic values)
  const stats = [
    { title: "Total Admins", count: 5, icon: <FaUserShield size={30} className="text-blue-500" /> },
    { title: "Total Blogs", count: 12, icon: <FaBlog size={30} className="text-green-500" /> },
    { title: "Total Projects", count: 8, icon: <FaProjectDiagram size={30} className="text-yellow-500" /> },
    { title: "Total Skills", count: 15, icon: <FaTools size={30} className="text-red-500" /> },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white shadow-md p-5 rounded-lg flex items-center space-x-4">
            <div className="p-3 bg-gray-200 rounded-full">{stat.icon}</div>
            <div>
              <h2 className="text-lg font-semibold">{stat.title}</h2>
              <p className="text-gray-600 text-xl font-bold">{stat.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashComp;

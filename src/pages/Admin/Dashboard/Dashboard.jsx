import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import {
  FaCog,
  FaBars,
  FaTimes,
  FaInfoCircle,
  FaHeading,
  FaTools,
  FaBlog,
  FaProjectDiagram,
  FaAlignJustify,
  FaEnvelope,
  FaSignOutAlt,
  FaHome
} from "react-icons/fa";
import AdminDashComp from "../../../components/Admin/AdminDashComp";
import About from "../../../components/About";
import Aboutpg from "../Aboutpg";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Welcome"); 
const [data, setdata] = useState()
useEffect(() => {
  const fetch= async()=>{
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}auth/get`)
    setdata(response.data.data[0].username)
  }
  fetch();
}, [])




  // Menu items with icons
  const menuItems = [
    { name: "Dash", icon: <FaHome /> },
    { name: "About Page", icon: <FaInfoCircle /> },
    { name: "Header", icon: <FaHeading /> },
    { name: "Skills", icon: <FaTools /> },
    { name: "Blogs", icon: <FaBlog /> },
    { name: "Projects", icon: <FaProjectDiagram /> },
    { name: "Footer", icon: <FaAlignJustify /> },
    { name: "Contact", icon: <FaEnvelope /> },
  ];

  // Content for each menu item
  const pageContent = {
    "About Page":<Aboutpg/>,
    Header: <p>This is the Header content.</p>,
    Skills: <p>This is the Skills content.</p>,
    Blogs: <p>This is the Blogs content.</p>,
    Projects: <p>This is the Projects content.</p>,
    Footer: <p>This is the Footer content.</p>,
    Contact: <p>This is the Contact content.</p>,
    Dash: <AdminDashComp/>
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar (Drawer) */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } md:relative md:translate-x-0`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button className="md:hidden" onClick={() => setIsOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`flex items-center gap-3 p-3 cursor-pointer ${
                  selectedPage === item.name ? "bg-blue-600 font-bold" : "hover:bg-gray-700"
                }`}
                onClick={() => {
                  setSelectedPage(item.name);
                  setIsOpen(false);
                }}
              >
                {item.icon} {item.name}
              </li>
            ))}
            <li className="flex items-center gap-3 p-3 hover:bg-red-600 cursor-pointer">
              <FaSignOutAlt />
              <button>Logout</button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
            <FaBars size={20} />
          </button>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="text-white">
              <FaCog size={24} />
            </button>
            

            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <h1>{data}</h1>
          </div>
        </header>

        {/* Dynamic Content Rendering */}
        <main className="flex-1 p-6">{pageContent[selectedPage]}</main>
      </div>
    </div>
  );
};

export default Dashboard;

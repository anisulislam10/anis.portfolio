import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import aboutImage from "../assets/mypic.jpeg"; // Ensure correct image path
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-6">
        
        {/* Section 1: Intro */}
        <div className="flex flex-col items-center md:items-start">
          {/* <img
            src={aboutImage} // Replace with your actual logo path
            alt="Anisul Islam Logo"
            className="h-14 w-14 rounded-full border border-gray-600"
          /> */}
          <p className="mt-3 text-gray-400 text-sm">
            Passionate Full Stack Developer crafting modern web solutions.
          </p>
        </div>

        {/* Section 2: Pages */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold">Pages</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#about" className="hover:text-blue-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact & Social */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="mt-2 text-gray-400 text-sm">Islamabad, Pakistan</p>
          <a
            href="mailto:your.email@example.com"
            className="mt-2 text-blue-400 hover:underline"
          >
            your.email@example.com
          </a>
          <div className="flex space-x-4 mt-4 text-xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-red-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Anisul Islam. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

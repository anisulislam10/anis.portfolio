import React from "react";
import { FaUserGraduate, FaEnvelope } from "react-icons/fa"; // Importing Icons
import TypingEffect from "react-typing-effect";
import pictureo from "../assets/mypic.png"; // Ensure the correct image path

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col md:flex-row items-center justify-center text-white px-6 md:px-16 bg-gradient-to-r from-green-900 to-gray-900">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={pictureo}
          alt="Profile"
          className="w-52 h-52 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-xl border-4 border-yellow-400"
        />
      </div>

      {/* Right Section - Text & Buttons */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Hi, I'm <span className="text-blue-400">Anisul Islam</span>
        </h1>

        {/* Animated Typing Effect */}
        <TypingEffect
          text={["Software Engineer", "MERN Stack Developer", "Full Stack Developer"]}
          speed={80}
          eraseSpeed={40}
          eraseDelay={1800}
          typingDelay={600}
          cursor="|"
          className="mt-4 text-xl sm:text-2xl md:text-3xl text-yellow-300 font-semibold"
        />

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-6">
          <a
            href="#about"
            className="px-6 py-3 flex items-center gap-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-medium transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            <FaUserGraduate className="text-white text-xl" /> Learn More
          </a>
          <a
            href="#contact"
            className="px-6 py-3 flex items-center gap-3 bg-green-500 hover:bg-green-600 rounded-full text-lg font-medium transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            <FaEnvelope className="text-white text-xl" /> Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

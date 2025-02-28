import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Animation library
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobileAlt,
  FaServer,
  FaCode,
  FaTools,
} from "react-icons/fa"; // Icons
import aboutImage from "../assets/about.png"; 
import axios from "axios";

const About = () => {

const [dataa, setdata] = useState()
    useEffect(() => {
      const fetchData= async()=>{
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}about/get`)
        console.log("data....", response.data.data)
        setdata(response.data.data[0])

      }
      fetchData()
    }, [])
    
  return (


    <section id="about" className="py-16 px-6 md:px-16 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 ">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 mt-20">
        {/* Left Section - Text & Icons */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-blue-600">{dataa?.title}</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          {dataa?.description}
          </p>

          {/* Skills Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.8 }} 
            className="mt-6 flex flex-wrap justify-center md:justify-start gap-6"
          >
            {[ 
              { icon: FaReact, color: "text-blue-500", label: "React.js" },
              { icon: FaMobileAlt, color: "text-green-500", label: "React Native" },
              { icon: FaNodeJs, color: "text-green-600", label: "Node.js & Express.js" },
              { icon: FaDatabase, color: "text-yellow-600", label: "MongoDB & MySQL" },
              { icon: FaServer, color: "text-red-600", label: "Backend Dev" },
              { icon: FaCode, color: "text-indigo-600", label: "JavaScript Enthusiast" },
              { icon: FaTools, color: "text-gray-600", label: "Problem Solver" },
            ].map((skill, index) => (
              <motion.div 
                whileHover={{ scale: 1.1 }} 
                key={index} 
                className="flex items-center gap-3 bg-white shadow-lg p-3 rounded-lg cursor-pointer"
              >
                <skill.icon className={`${skill.color} text-2xl`} /> {skill.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
           src={`${import.meta.env.VITE_BASE_URL.replace('/api/', '')}${dataa?.image.replace(/^.*[\\/](uploads[\\/])/, "/uploads/")}`} 

            alt="About Me"
            className="w-72 h-72 md:w-96 md:h-96 rounded-lg shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;

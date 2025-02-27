import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Store",
    description: "An online store built with React, Tailwind, and Vite.",
    skills: ["React.js", "Tailwind CSS", "Vite", "MongoDB"],
    image: "/assets/ecommerce.png",
    link: "https://pure-ease.vercel.app/",
  },
  {
    title: "Blog App",
    description: "A full-stack blog platform using the MERN stack.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: "/assets/blog.png",
    link: "https://your-blog-app-link.com",
  },
  {
    title: "Job Portal",
    description: "A job platform with authentication and real-time updates.",
    skills: ["React.js", "Node.js", "MongoDB", "Express.js"],
    image: "/assets/jobportal.png",
    link: "https://your-job-portal-link.com",
  },
  {
    title: "Weather App",
    description: "A real-time weather forecasting app using OpenWeather API.",
    skills: ["React.js", "API", "Tailwind CSS"],
    image: "/assets/weather.png",
    link: "https://your-weather-app-link.com",
  },
  {
    title: "Task Management App",
    description: "A productivity tool for managing tasks efficiently.",
    skills: ["React.js", "Redux", "Node.js"],
    image: "/assets/taskmanager.png",
    link: "https://your-taskmanager-link.com",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing skills and projects.",
    skills: ["React.js", "Next.js", "CSS"],
    image: "/assets/portfolio.png",
    link: "https://your-portfolio-link.com",
  },
  {
    title: "Chat Application",
    description: "A real-time chat app using Socket.io.",
    skills: ["React.js", "Node.js", "Socket.io"],
    image: "/assets/chatapp.png",
    link: "https://your-chatapp-link.com",
  },
  {
    title: "Expense Tracker",
    description: "A finance app to track expenses and income.",
    skills: ["React.js", "Context API", "MongoDB"],
    image: "/assets/expensetracker.png",
    link: "https://your-expensetracker-link.com",
  },
  {
    title: "Food Delivery App",
    description: "A modern food ordering and delivery platform.",
    skills: ["React.js", "Firebase", "Tailwind CSS"],
    image: "/assets/foodapp.png",
    link: "https://your-foodapp-link.com",
  },
  {
    title: "AI Image Generator",
    description: "Generate AI-based images using OpenAI's API.",
    skills: ["React.js", "OpenAI API", "Tailwind CSS"],
    image: "/assets/aigenerator.png",
    link: "https://your-aigenerator-link.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-8 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto text-center mt-20">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-gray-700 rounded-lg shadow-lg block hover:bg-gray-600 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <span key={i} className="px-2 py-1 text-sm bg-blue-600 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
              <span className="mt-4 block text-blue-400 hover:underline">
                View Project
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

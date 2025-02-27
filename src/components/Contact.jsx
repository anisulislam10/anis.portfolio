import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-400">Get In Touch</h2>
        <p className="mt-4 text-lg text-gray-300">
          Let's connect! Feel free to reach out for collaborations, job opportunities, or just to say hi.
        </p>

        {/* Contact Details */}
        <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
          {/* Left Section - Contact Details */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-400">Contact Info</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-400 text-xl" />
                <a href="mailto:your-email@gmail.com" className="text-gray-300 hover:text-white">
                  your-email@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-400 text-xl" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white">
                  +1 234 567 890
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-400 text-xl" />
                <span className="text-gray-300">Islamabad, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-400">Connect with Me</h3>
            <div className="mt-4 flex space-x-6 justify-center">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition text-3xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition text-3xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-blue-400">Send a Message</h3>
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:border-blue-400 focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

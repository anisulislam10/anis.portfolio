import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          <Link to="/blog" className="hover:text-gray-400">Blogs</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>

        {/* Burger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-gray-800 p-4 absolute w-full">
          <Link to="/" className="py-2 hover:text-gray-400" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="py-2 hover:text-gray-400" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/projects" className="py-2 hover:text-gray-400" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/blog" className="py-2 hover:text-gray-400" onClick={() => setMenuOpen(false)}>Blogs</Link>
          <Link to="/contact" className="py-2 hover:text-gray-400" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

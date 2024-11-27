import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-20">
      {/* Logo Section */}
      <div className="flex items-center">
        {/* Update logo path */}
        <img 
          src="/logo.jpg"  // Reference logo from the public folder
          alt="Website Logo" 
          className="mx-2 h-12 w-auto object-contain" 
        />
      </div>

      {/* Links Section */}
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/technologies" className="hover:text-blue-400">Technologies</Link>
        <Link to="/experience" className="hover:text-blue-400">Experience</Link>
        <Link to="/projects" className="hover:text-blue-400">Projects</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center gap-4 text-2xl">
        <FaLinkedin className="hover:text-blue-500 transition-colors" />
        <FaGithub className="hover:text-gray-700 transition-colors" />
        <FaTwitter className="hover:text-blue-400 transition-colors" />
        <FaInstagram className="hover:text-pink-500 transition-colors" />
      </div>
    </nav>
  );
};

export default Navbar;

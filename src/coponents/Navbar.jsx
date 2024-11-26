import logo from "../assets/logo.jpg";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-20">
      {/* Logo Section */}
      <div className="flex items-center">
        <img 
          src={logo} 
          alt="Website Logo" 
          className="mx-2 h-12 w-auto object-contain" // Keeps proper logo size
        />
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

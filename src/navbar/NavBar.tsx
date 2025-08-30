
// import { Menu,  X } from 'lucide-react';
// import { BellRing } from 'lucide-react';
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface NavBarProps {
  onToggle: ()=>void;
  darkMode: boolean;
}
const NavBar: React.FC<NavBarProps> = ({onToggle, darkMode})=>{


	return(
<div className="">

 <nav className=" flex items-center justify-between">
      {/* Left: Hamburger */}
      
     <img src="./logo.avif" alt="logo" className="h-auto w-10 max-w-full" />

      {/* Center: Logo / App Name */}
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">Task Manager</h1>


      {/* Mobile Menu Drawer */}
      <button
        onClick={onToggle}
        className={`relative flex h-8 w-16 items-center rounded-full px-1 transition-colors duration-300 
          ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
      >
        {/* Sun & Moon Icons */}
        <Sun
          size={16}
          className={`absolute left-2 text-yellow-400 transition-opacity duration-300 ${
            darkMode ? "opacity-0" : "opacity-100"
          }`}
        />
        <Moon
          size={16}
          className={`absolute right-2 text-white transition-opacity duration-300 ${
            darkMode ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Knob (Animated with Framer Motion) */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="h-6 w-6 rounded-full bg-white shadow-md"
          style={{ x: darkMode ? 32 : 0 }}
        />
      </button>
    </nav>

</div>
	)
}
export default NavBar
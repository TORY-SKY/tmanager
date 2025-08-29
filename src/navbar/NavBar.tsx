import {useState, useEffect} from "react";
import { Menu,  X } from 'lucide-react';
import { BellRing } from 'lucide-react';
const NavBar: React.FC = ()=>{
  const [isOpen, setIsOpen] = useState(false);


	return(
<div className="">

 <nav className=" flex items-center justify-between">
      {/* Left: Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 focus:outline-none md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Center: Logo / App Name */}
      <h1 className="text-xl font-bold text-gray-800">Task Manager</h1>

      {/* Right: Notifications */}
      <button className="relative text-gray-700">
        <BellRing size={24} />
        {/* Example notification dot */}
        <span className={`${isOpen ? 'hidden': 'absolute' } top-0 right-0 block h-2 w-2 rounded-full bg-red-500`}></span>
      </button>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col space-y-3 p-4">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Tasks
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Settings
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>

</div>
	)
}
export default NavBar
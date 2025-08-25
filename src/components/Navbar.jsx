import React, { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom"; // make sure you are using react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Shop", path: "/shop" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="border-b border-gray-200 shadow-lg px-6 md:px-[100px] h-[70px] flex items-center justify-between">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <div className="h-[38px] w-[38px] bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center rounded-xl">
          <Shield color="white" size={"22px"} />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">Dalex Security</h1>
          <p className="text-gray-500 text-[12px]">Experts</p>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative pb-2 transition-colors duration-300 text-sm ${
                    isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  } after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 ${
                    isActive ? "after:scale-x-100" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Get Quote button */}
      <div className="hidden md:block">
        <button className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white cursor-pointer px-4 py-2 rounded-md">
          Get Quote
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block relative pb-1 transition-colors duration-300 ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    } after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 ${
                      isActive ? "after:scale-x-100" : ""
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <button className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white cursor-pointer px-4 py-2 rounded-md">
                Get Quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const navbar = [
    { name: "Home", path: "/" },
    { name: "Todo", path: "/todo" },
  ];

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
     
      <div className="text-2xl font-bold cursor-pointer">
        MyApp
      </div>

      
      <ul className="flex space-x-6 font-medium">
        {navbar.map((item, index) => (
          <li key={index}>
            <Link 
              to={item.path} 
              className="hover:text-gray-200 transition-colors duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

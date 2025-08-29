import React from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const navbar = [
    { name: "Home", path: "/home" },
    { name: "Todo", path: "/todo" },
    {name:"Profile", path:"/profile"}
  ];

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
       
        <h1 className="text-2xl font-bold">My Todo</h1>

       
        <ul className="flex space-x-6 font-medium">
          {navbar.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

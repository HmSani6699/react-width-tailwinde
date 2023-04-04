import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { id: 1, path: "/home/user1/", name: "Home" },
    { id: 2, path: "/home/user1/documents/", name: "Blogs" },
    { id: 3, path: "/home/user1/pictures/", name: "Contact" },
    { id: 4, path: "/home/user1/downloads/", name: "Login" },
  ];

  return (
    <nav className="bg-purple-500 px-4">
      <div onClick={() => setOpen(!open)} className="md:hidden py-2">
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-red-500" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-red-500" />
          )}
        </span>
      </div>
      <ul
        className={`md:flex bg-purple-500 px-4 py-2 md:static duration-500 absolute ${
          open ? "top-6" : "-top-44"
        }`}
      >
        {navLinks.map((link) => (
          <Link key={link.id} link={link}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

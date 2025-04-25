import { useState } from "react";
import { Link } from "react-router-dom";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="container fixed top-0 left-0 px-8 py-6 flex justify-between md:ml-2">
      <Link to="/" className="md:w-32 md:h-28 md:grid md:place-content-center">
        <img className="w-12 md:w-16" src="src\assets\img\shared\logo.svg" alt="home" />
      </Link>
      <MenuMobile 
      isOpen={isOpen}
      handler={toggleMenu}
      navItems={navItems}
      />
      <nav className="hidden md:flex absolute top-0 right-0 w-4/5 h-36 gap-10 justify-end items-center p-12 font-barlow-condensed uppercase font-extralight text-2xl tracking-widest bg-white/5">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="text-white font-barlow-condensed font-extralight uppercase hover:text-gray-400"
          >
           <span className="font-bold tracking-widest mr-0.5">{item.id}</span> {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;

const navItems = [
  { id: "00", name: "Home", path: "/" },
  { id: "01", name: "Destination", path: "/destination" },
  { id: "02", name: "Crew", path: "/crew" },
  { id: "03", name: "Technology", path: "/technology" },
];
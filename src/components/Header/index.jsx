import { useState } from "react";
import { Link } from "react-router-dom";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="container fixed top-0 left-0 px-8 py-6 flex justify-between">
      <Link to="/">
        <img className="w-12" src="src\assets\img\shared\logo.svg" alt="home" />
      </Link>
      <MenuMobile 
      isOpen={isOpen}
      handler={toggleMenu}
      navItems={navItems}
      />
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
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="container fixed top-0 left-0 px-8 py-6 flex justify-between">
      <Link to="/">
        <img className="w-9" src="src\assets\img\shared\logo.svg" alt="home" />
      </Link>
      {!isOpen ? (
        <div onClick={toggleMenu}>
          <img
            className="w-6 m-2"
            src="src\assets\img\shared\icon-hamburger.svg"
            alt="menu"
          />
        </div>
      ) : (
        <div className="absolute top-0 right-0 w-3/4 h-screen flex flex-col gap-4 overflow-hidden">
            <div className="absolute top-0 right-0 z-0 w-screen h-screen backdrop-blur-2xl"></div>
            <div className="relative z-10 w-full flex justify-end items-center p-4">
                <img
                    className="w-4 m-2"
                    src="src\assets\img\shared\icon-close.svg"
                    alt="close"
                    onClick={toggleMenu}
                />
            </div>
          <nav className="relative z-10 flex flex-col gap-4 items-start p-4">
            <Link
              to="/destination"
              className="text-white font-barlow text-base"
            >
              Destination
            </Link>
            <Link to="/crew" className="text-white font-barlow text-base">
              Crew
            </Link>
            <Link to="/technology" className="text-white font-barlow text-base">
              Technology
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

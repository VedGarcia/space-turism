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
        <img className="w-12" src="src\assets\img\shared\logo.svg" alt="home" />
      </Link>
      {!isOpen ? (
        <div onClick={toggleMenu}>
          <img
            className="w-6 mt-2 m-1"
            src="src\assets\img\shared\icon-hamburger.svg"
            alt="menu"
          />
        </div>
      ) : (
        <div className="absolute top-0 right-0 w-3/4 h-screen flex flex-col gap-4 overflow-hidden">
            <div className="absolute top-0 right-0 z-0 w-screen h-screen backdrop-blur-2xl"></div>
            <div className="relative z-10 w-full flex justify-end items-center p-4">
                <img
                    className="w-6 m-3 mt-4"
                    src="src\assets\img\shared\icon-close.svg"
                    alt="close"
                    onClick={toggleMenu}
                />
            </div>
          <nav className="relative z-10 flex flex-col gap-8 items-start mt-16 pl-12 font-barlow-condensed uppercase font-extralight text-lg tracking-wider">
          <Link
              to="/"
              className="text-white font-barlow text-base"
            >
             <span className="font-medium tracking-widest mr-0.5">00</span> Home
            </Link>           
            <Link
              to="/destination"
              className="text-white font-barlow text-base"
            >
              <span className="font-medium tracking-widest mr-0.5">01</span> Destination
            </Link>
            <Link to="/crew" className="text-white font-barlow text-base">
              <span className="font-medium tracking-widest mr-0.5">02</span> Crew
            </Link>
            <Link to="/technology" className="text-white font-barlow text-base">
              <span className="font-medium tracking-widest mr-0.5">03</span> Technology
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

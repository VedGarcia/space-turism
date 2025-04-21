import { Link } from "react-router-dom"


const MenuMobile = ({isOpen, handler, navItems}) => {
    return (
        <>
    {!isOpen ? (
        <div onClick={handler} className="block md:hidden">
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
                    onClick={handler}
                    />
            </div>
          <nav className="relative z-10 flex flex-col gap-8 items-start mt-16 pl-12 font-barlow-condensed uppercase font-extralight text-lg tracking-wider">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="text-white font-barlow text-base"
                onClick={handler}
                >
                <span className="font-medium tracking-widest mr-0.5">{item.id}</span> {item.name}
              </Link>
            ))}
          
          </nav>
        </div>
      )}
      </>
  )
}

export default MenuMobile
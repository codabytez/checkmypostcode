import { useEffect, useRef, useState } from "react";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const MegaMenuRef = useRef(null);
  const HelpMenuRef = useRef(null);

  const handleMenuToggle = (id) => {
    if (openMenuId === id) {
      setOpenMenuId(null);
    } else {
      setOpenMenuId(id);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        MegaMenuRef.current &&
        !MegaMenuRef.current.contains(event.target) &&
        HelpMenuRef.current &&
        !HelpMenuRef.current.contains(event.target)
      ) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-primary flex items-center justify-between flex-wrap p-4 text-lg h-[100px] fixed w-full z-30">
        <div className="flex items-center flex-shrink-0 text-white mr-6 border min-w-[105px] w-[105px] fixed lg:relative z-30">
          <span className="font-semibold text-2xl tracking-tight break-all">
            <a href="/">Checkmypostcode</a>
          </span>
        </div>
        <div className="flex lg:hidden fixed z-30 right-6">
          <button
            onClick={handleToggle}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 0h20v20H0V0zm2 2v16h16V2H2zm3 5h10v2H5V7zm0 4h10v2H5v-2zm0 4h10v2H5v-2z" />
            </svg>
          </button>
        </div>
        <div className="lg:hidden">
          <NavLinks
            HelpMenuRef={HelpMenuRef}
            MegaMenuRef={MegaMenuRef}
            openMenuId={openMenuId}
            isOpen={isOpen}
            handleMenuToggle={handleMenuToggle}
          />
        </div>
        <div className="hidden lg:flex">
          <NavLinks
            HelpMenuRef={HelpMenuRef}
            MegaMenuRef={MegaMenuRef}
            openMenuId={openMenuId}
            isOpen={isOpen}
            handleMenuToggle={handleMenuToggle}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const NavLinks = ({
  HelpMenuRef,
  openMenuId,
  handleMenuToggle,
  MegaMenuRef,
  isOpen,
}) => {
  return (
    <>
      <div
        className={`${
          isOpen ? "-translate-y-0" : "-translate-y-[150%]"
        } flex-col flex lg:flex-row gap-2 justify-center h-full fixed lg:mt-16 lg:relative top-0 bg-primary w-full left-0 transition-all duration-1000 z-20`}
      >
        <div
          className={`flex-col lg:flex-row items-center gap-20 flex text-center w-auto`}
        >
          <div className="text-sm lg:flex-grow"></div>
          <div className="flex flex-col lg:flex-row lg:items-center text-white gap-10 lg:gap-9">
            <a href="#" className="lg:inline-block">
              Home
            </a>
            {/* Mega menu */}
            <div
              ref={MegaMenuRef}
              className="flex flex-col items-center lg:flex-row gap-10  lg:gap-6 lg:items-center"
            >
              <MegaMenu
                id={0}
                isOpen={openMenuId === 0}
                toggleMenu={() => handleMenuToggle(0)}
              >
                postcode lists
              </MegaMenu>
              <MegaMenu
                id={1}
                isOpen={openMenuId === 1}
                toggleMenu={() => handleMenuToggle(1)}
              >
                postcode maps
              </MegaMenu>

              {/* End Mega menu */}
            </div>

            <div className="lg:flex items-center text-white gap-10">
              <a href="#" className="lg:inline-block">
                Nearest postcode
              </a>
            </div>
            <div className="lg:flex items-center text-white gap-9">
              <a href="#" className="lg:inline-block">
                postcode lottery
              </a>
            </div>
          </div>
        </div>
        <div
          className={`w-full flex-col flex lg:flex-row items-center lg:w-auto gap-10`}
        >
          <div className="text-sm lg:flex-grow"></div>
          <div ref={HelpMenuRef}>
            <MegaMenu
              id={2}
              isOpen={openMenuId === 2}
              toggleMenu={() => handleMenuToggle(2)}
            >
              Help and information
            </MegaMenu>
          </div>
        </div>
      </div>
    </>
  );
};

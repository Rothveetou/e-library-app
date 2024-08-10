import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3, HiBookOpen, HiMiniXMark } from "react-icons/hi2";
import { AuthContext } from "../Context/AuthProvider";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true);

  const { user } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = [
    { to: "Home", path: "/" },
    { to: "Shop", path: "/shop" },
    { to: "Sell Your Book", path: "/admin/dashboard" },
  ];

  return (
    <header className="  z-50 w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 ${
          isSticky ? "stick top-0 right-0 left-0 bg-blue-300 text-base" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-8 px-6 ">
          <Link
            to="/"
            className="text-4xl font-bold text-blue-700 flex items-center gap-2"
          >
            <HiBookOpen className="inline-block" /> Books
          </Link>
          <ul className="md:flex space-x-6 font-medium text-3xl hidden">
            {NavLink.map((link) => (
              <Link
                key={link.to}
                to={link.path}
                className="block text-xl text-black text-md cursor-pointer hover:text-blue-700"
              >
                {link.to}
              </Link>
            ))}
          </ul>
          {/* Toggle for lg devices */}
          <div className="space-x-12 hidden lg:flex items-center ">
            <button>
              <HiBars3 className="w-5 hover:text-blue-700" />
              {user ? user.email : ""}
            </button>
          </div>
          {/* Toggle for mobile devices */}
          <div className="md:hidden px-5 ">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <HiMiniXMark className="h-5 w-5 text-black" />
              ) : (
                <HiBars3 className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>
        {/* Toggle sm devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7  ${
            isMenuOpen ? "block fixed top-0 right-0" : "hidden"
          }`}
        >
          {NavLink.map((link) => (
            <Link
              key={link.to}
              to={link.path}
              className="block text-xl text-black cursor-pointer hover:text-blue-700"
            >
              {link.to}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

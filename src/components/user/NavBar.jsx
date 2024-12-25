import logoImg from "../../assets/images/logo/favicon.png";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const navLinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Buy", path: "/buy" },
  { id: 3, title: "Rent", path: "/rent" },
  { id: 4, title: "New projects", path: "/new-projects" },
  { id: 5, title: "Find agent", path: "/find-agent" },
  { id: 6, title: "Blog", path: "/blog" },
];

const NavBar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white mt-5 h-[96px] flex items-center justify-between md:px-[80px] px-[8px] relative">
      <div className="flex items-center gap-[10px]">
        <img src={logoImg} alt="Logo" className="w-[50px] h-[55px]" />
        <div className="flex flex-col">
          <h2 className="text-[20px] font-[700] text-[#0F74CC] leading-[28px]">
            ALMEFTAH
          </h2>
          <h3 className="text-[17px] font-[400] text-[#748392] leading-[23.8px]">
            Real Estate
          </h3>
        </div>
      </div>

      <ul className="hidden lg:flex">
        {navLinks.map((route) => (
          <li key={route.id}>
            <Link
              to={route.path}
              className={`text-[#000929] text-[16px] font-[500] leading-[24px] p-[13px] ${
                active === route.id ? "font-[700]" : "font-[500]"
              }`}
              onClick={() => setActive(route.id)}
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex gap-4">
        <Button
          text="Login"
          variant="secondary"
          onClick={() => alert("Login")}
        />
        <Button text="Sign up" onClick={() => alert("Sign up")} />
      </div>

      <div className="lg:hidden flex items-center gap-4">
        <button
          onClick={toggleMenu}
          className="text-[#000929] focus:outline-none"
          aria-label="Toggle menu"
        >
          {!isMenuOpen && (
            <button className="bg-white p-2 text-[#000929] rounded-[4px] border-2 border-[#E0DEF7] focus:outline-none">
              <AiOutlineMenu size={18} />
            </button>
          )}
        </button>
      </div>

      {isSmallScreen && isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={toggleMenu}
        />
      )}

      <div
        className={`lg:hidden fixed top-0 left-0 w-[300px] h-full bg-[#F6F6F6] p-8 z-30 transition-transform ${
          isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 bg-white p-2 text-[#000929] rounded-[4px] border-2 border-[#E0DEF7] focus:outline-none"
          aria-label="Close menu"
        >
          <AiOutlineClose size={18} />
        </button>

        <ul className="space-y-5 mt-8">
          {navLinks.map((route) => (
            <li key={route.id}>
              <Link
                to={route.path}
                className={`text-[#000929] text-[16px] font-[500] leading-[24px] ${
                  active === route.id ? "font-[700]" : "font-[500]"
                }`}
                onClick={() => {
                  setActive(route.id);
                  setIsMenuOpen(false);
                }}
              >
                {route.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-4">
          <Button
            text="Login"
            variant="secondary"
            onClick={() => navigate("/login")}
          />
          <Button text="Sign up" onClick={() => navigate("/signup")} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

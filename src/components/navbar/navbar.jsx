// src/components/Navbar/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/LOGO.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, useLocation } from "react-router-dom";
import open from "../../assets/menu_open.svg";
import close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef();
  const location = useLocation();

  const navItems = ["home", "about", "services", "work", "contact"];

  // Effect for scroll-based background change
  useEffect(() => {
    const handleBgScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleBgScroll);
    return () => window.removeEventListener("scroll", handleBgScroll);
  }, []);

  // --- NEW: Effect for Scroll Spy ---
  useEffect(() => {
    const handleScrollSpy = () => {
      // Only run scroll spy on the homepage
      if (location.pathname !== '/') return;

      const scrollPosition = window.scrollY + 150; // Offset for better accuracy
      for (const item of navItems) {
        const element = document.getElementById(item);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setMenu(item);
          return;
        }
      }
    };
    
    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [location.pathname]); // Re-run only if pathname changes

  const openMenu = () => { menuRef.current.style.right = "0"; setIsMenuOpen(true); };
  const closeMenu = () => { menuRef.current.style.right = "-350px"; setIsMenuOpen(false); };

  const getLinkClass = (item) => (
    menu === item && location.pathname === "/"
      ? "bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent font-bold"
      : "text-neutral-300 hover:text-white transition-colors duration-300"
  );

  return (
    <>
      <div 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
                    ${isScrolled || location.pathname !== '/' ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}
      >
        <div className="flex items-center justify-between px-6 md:px-20 py-3 max-w-7xl mx-auto">
          {/* --- FIX: Smart Logo Link --- */}
          {location.pathname === '/' ? (
            <AnchorLink href="#home" onClick={() => setMenu("home")}><img src={logo} alt="logo" className="w-16"/></AnchorLink>
          ) : (
            <Link to="/" onClick={() => setMenu("home")}><img src={logo} alt="logo" className="w-16" /></Link>
          )}
          
          <img src={open} onClick={openMenu} alt="open menu" className="md:hidden w-8 h-8 cursor-pointer p-2" />
          
          <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
            {navItems.map((item) => (
              <li key={item}>
                {location.pathname === "/" ? (
                  <AnchorLink href={`#${item}`} onClick={() => setMenu(item)} className={getLinkClass(item)}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </AnchorLink>
                ) : (
                  <Link to={`/#${item}`} onClick={() => setMenu(item)} className="text-neutral-300 hover:text-white transition-colors">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                )}
              </li>
            ))}
            <li><Link to="/login" className="text-neutral-300 hover:text-white transition">Admin</Link></li>
            <li>
              {/* --- FIX: Smart Connect Button --- */}
              {location.pathname === '/' ? (
                <AnchorLink href="#contact" className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold hover:scale-105 transition-transform duration-300 block">Connect</AnchorLink>
              ) : (
                <Link to="/#contact" className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold hover:scale-105 transition-transform duration-300 block">Connect</Link>
              )}
            </li>
          </ul>
        </div>
      </div>

      {isMenuOpen && <div className="fixed inset-0 bg-black/60 z-40" onClick={closeMenu}></div>}

      <ul ref={menuRef} className="md:hidden fixed top-0 right-[-350px] h-full w-[280px] bg-slate-900 flex flex-col gap-8 p-8 text-2xl z-50 shadow-2xl">
        <img src={close} onClick={closeMenu} alt="close menu" className="w-8 h-8 self-end cursor-pointer p-2" />
        {navItems.map((item) => (
          <li key={item} onClick={closeMenu}>
            {location.pathname === "/" ? (
              <AnchorLink href={`#${item}`} className="text-neutral-200 hover:text-white transition">{item.charAt(0).toUpperCase() + item.slice(1)}</AnchorLink>
            ) : (
              <Link to={`/#${item}`} className="text-neutral-200 hover:text-white transition">{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
            )}
          </li>
        ))}
        <li onClick={closeMenu}><Link to="/login" className="text-neutral-200 hover:text-white transition">Admin</Link></li>
      </ul>
    </>
  );
};

export default Navbar;
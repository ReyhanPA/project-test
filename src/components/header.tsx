"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";

const Header: React.FC = () => {
  const menuItems = [
    { name: "Work", href: "/work-page"},
    { name: "About", href: "/about-page"},
    { name: "Services", href: "/services-page"},
    { name: "Ideas", href: "/"},
    { name: "Careers", href: "/careers-page"},
    { name: "Contact", href: "/contact-page"}
  ];
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const pathname = usePathname();

  const handlerMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`flex justify-between h-20 w-full shadow-md fixed z-50 transition duration-300 ease-in-out bg-orange-800 bg-opacity-100 ${scrollY > 0 ? "opacity-0 visibility-hidden" : "opacity-100 visibility-visible"}`}>
      <div className="flex md:px-16 px-4 justify-center items-center">
        <div>
          <Link href="/" className={`${scrollY > 0 ? "hidden" : ""}`}>
            <h1 className="text-lg font-bold text-white">Suitmedia</h1>
          </Link>
        </div>
      </div>
      {/* Menu Items > md */}
      <div className="md:flex md:justify-center md:items-center px-16">
        <ul className="hidden md:flex gap-6">
          {menuItems.map((item, index) => {
            const isActive = item.href === pathname;
            return (  
              <li key={index}>
                <Link href={item.href} className={`text-lg font-light text-white group relative ${isActive ? "text-orange-300" : ""} ${scrollY > 0 ? "hidden" : ""}`}>
                  {item.name}
                  <span className="absolute left-0 -bottom-2 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      {/* Toggle Menu */}
      <div className="flex px-4 md:hidden">
        {isMenuOpen ? (
          <div className="flex justify-center items-center text-3xl text-white md:hidden">
            <LiaTimesSolid onClick={handlerMenu} cursor="pointer" />
          </div>
        ) : (
          <div className="flex justify-center items-center text-3xl text-white md:hidden">
            <RxHamburgerMenu onClick={handlerMenu} cursor="pointer" />
          </div>
        )}
      </div>
      {/* Menu Items < md */}
      {isMenuOpen && (
        <div className="md:hidden flex justify-center items-center h-auto w-32 px-8 py-4 absolute top-24 right-4 rounded-lg shadow-md bg-orange-800 z-50">
          <ul className="flex flex-col gap-3">
            {menuItems.map((item, index) => {
              const isActive = item.href === pathname;
              return (
                <li key={index}>
                  <Link href={item.href}>
                    <h1 className={`text-lg text-center font-light text-white duration-100 ${isActive ? "text-orange-300" : ""} ${scrollY > 0 ? "hidden" : ""}`}>{item.name}</h1>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;

import { siteConfig } from "@/constants/siteConfig";
import { ChevronRight, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface IMenu {
  menu: {
    title: string;
    href: string;
    dropdown?: {
      title: string;
      href: string;
    }[];
    secondary?: boolean;
  };
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white z-20">
      <div className="wrapper">
        <div className="flex items-center justify-between py-[5px]">
          <h1 className="mt-[5px]">
            <Link href={"/"}>
              <Image
                src={siteConfig.logo.src}
                width={170}
                height={50}
                alt="Unico Connect Logo"
              />
            </Link>
          </h1>
          
          {/* Hamburger icon for mobile */}
          <button
            className="block md:hidden text-white p-2 focus:outline-none"
            onClick={toggleMenu}
          >
            <MenuIcon className="w-6 h-6 text-black " />
          </button>
          {/* Hidden menu for mobile */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:hidden fixed top-[68px] left-0 w-full h-full bg-black text-white transition-all ease-in-out duration-300`}
          >
            {/* Add your menu items here */}
            <ul className="flex flex-col items-center justify-center h-full space-y-4">
              {siteConfig.nav.map((menu, i) => (
                <Link
                  key={i}
                  href={menu.href}
                  className={`block px-5 py-2 text-white`}
                >
                  {menu.title}
                </Link>
              ))}
              {/* Add more menu items as needed */}
            </ul>
          </div>

          <nav className="hidden md:block">
            <ul className="flex justify-between items-center text-sm font-medium">
              {siteConfig.nav.map((menu) => (
                <Menu key={menu.title} menu={menu} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Menu = ({ menu }: IMenu) => {
  return (
    <li
      className={`${
        menu?.dropdown && menu?.dropdown?.length > 0
          ? "group relative z-10"
          : ""
      }`}
    >
      <Link
        href={menu.href}
        className={`block p-5 ${
          menu?.secondary
            ? "bg-black text-white px-6 py-3.5 ml-2.5 md:hover:bg-sky-600"
            : "text-[#303030]"
        }`}
      >
        {menu.title}
      </Link>
      {Array.isArray(menu.dropdown) && menu.dropdown.length > 0 && (
        <ul
          className={`hidden min-w-[250px] bg-black text-white md:group-hover:flex flex-col absolute top-[80%] left-0 backdrop-blur-xl z-10`}
        >
          {menu.dropdown.map((subMenu) => (
            <li key={subMenu.title}>
              <Link
                href={subMenu.href}
                className="group/submenu flex justify-between px-3.5 py-5 md:hover:bg-[rgba(255,255,255,.1)]"
              >
                <span>{subMenu.title}</span>
                <ChevronRight className="hidden group-hover/submenu:block w-4 h-4" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Header;

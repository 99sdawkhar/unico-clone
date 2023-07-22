import { siteConfig } from "@/constants/siteConfig";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  return (
    <header className="fixed top-0 w-full bg-white z-20">
      <div className="wrapper">
        <div className="flex items-center justify-between py-[5px]">
          <h1 className="mt-[5px]">
            <Link href={"/"}>
              <Image src={siteConfig.logo.src} width={170} height={50} alt='Unico Connect Logo' />
            </Link>
          </h1>
          <nav>
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
      className={`${menu?.dropdown && menu?.dropdown?.length > 0 ? "group relative z-10" : ""}`}
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

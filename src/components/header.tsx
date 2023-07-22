import { siteConfig } from "@/constants/siteConfig";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white">
      <div className="wrapper">
        <div className="flex items-center justify-between py-1.5">
          <h1>
            <Link href={"/"}>
              <Image src={siteConfig.logo.src} width={161} height={49} />
            </Link>
          </h1>
          <nav>
            <ul className="flex justify-between items-center">
              {siteConfig.nav.map((menu) => (
                <li key={menu.title} className="group">
                  <Link
                    href={menu.href}
                    className={`block p-3.5 ${menu.secondary ? "bg-black text-white px-6 ml-2.5" : ""}`}
                  >
                    {menu.title}
                  </Link>
                  {Array.isArray(menu.dropdown) && menu.dropdown.length > 0 && (
                    <ul className="hidden bg-black text-white md:group-hover:flex flex-col absolute top-[90%]">
                      {menu.dropdown.map((subMenu) => (
                        <li key={subMenu.title}>
                          <Link href={subMenu.href} className="block px-3.5 py-5">{subMenu.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

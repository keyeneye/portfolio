"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { SkipLink } from "./SkipLink";
import { Icon } from "../ui/Icon";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (isOpen) setIsOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur-sm border-b border-white/10">
      <SkipLink />
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-[#38BDF8] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-offset-2 focus:ring-offset-[#0F172A] rounded-md"
            aria-label="Home"
          >
            {siteConfig.name}
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-offset-2 focus:ring-offset-[#0F172A] rounded-md"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <Icon name={isOpen ? "chevronRight" : "chevronRight"} size="lg" className={isOpen ? "rotate-180" : ""} />
          </button>

          <ul
            id="mobile-menu"
            role="menubar"
            className={`${isOpen ? "flex" : "hidden"} md:flex absolute md:relative top-16 md:top-0 left-0 right-0 md:bg-transparent flex-col md:flex-row items-center gap-2 md:gap-1 bg-[#0F172A] md:border-none border-t border-white/10 md:border-0 p-4 md:p-0`}
          >
            {siteConfig.navigation.map((item) => {
              const isActive = pathname === `/#${item.id}`;
              return (
                <li role="none" key={item.id} className="w-full md:w-auto">
                  <Link
                    href={`#${item.id}`}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                    className={`block w-full px-4 py-3 md:py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-offset-2 focus:ring-offset-[#0F172A] ${
                      isActive
                        ? "bg-[#2563EB] text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

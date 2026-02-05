"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { SkipLink } from "./SkipLink";
import { Icon } from "../ui/Icon";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (isOpen) setIsOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-stroke-subtle"
          : "bg-transparent"
      }`}
    >
      <SkipLink />
      <nav
        aria-label="Main navigation"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="group flex items-center gap-2 text-light hover:text-accent transition-colors duration-200"
            aria-label="Home"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 text-accent font-mono text-sm font-bold group-hover:bg-accent group-hover:text-void transition-all duration-200">
              {"</>"}
            </span>
            <span className="font-semibold tracking-tight hidden sm:block">
              {siteConfig.name}
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-light-muted hover:text-accent transition-colors duration-200 rounded-lg hover:bg-accent-muted"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <Icon name={isOpen ? "x" : "menu"} size="md" />
          </button>

          <ul
            id="mobile-menu"
            role="menubar"
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex absolute md:relative top-16 md:top-0 left-0 right-0 flex-col md:flex-row items-stretch md:items-center gap-1 glass md:bg-transparent border-b border-stroke-subtle md:border-0 p-4 md:p-0`}
          >
            {siteConfig.navigation.map((item) => {
              const isActive = pathname === `/#${item.id}`;
              return (
                <li role="none" key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-accent bg-accent-muted"
                        : "text-light-muted hover:text-light hover:bg-surface-raised"
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

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { SkipLink } from "./SkipLink";
import { Icon } from "../ui/Icon";
import { HeroProps } from "@/features/profile/domain/Profile";

export default function Navbar({ name }: HeroProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú cuando el foco sale de él (accesibilidad teclado)
  useEffect(() => {
    if (!isOpen) return;

    const handleFocusOut = (event: FocusEvent) => {
      const relatedTarget = event.relatedTarget as HTMLElement;
      
      // Si el foco va a un elemento fuera del menú y no es el botón de menú
      if (
        menuRef.current &&
        !menuRef.current.contains(relatedTarget) &&
        buttonRef.current !== relatedTarget &&
        !buttonRef.current?.contains(relatedTarget)
      ) {
        setIsOpen(false);
      }
    };

    const menuElement = menuRef.current;
    if (menuElement) {
      menuElement.addEventListener("focusout", handleFocusOut);
      return () => menuElement.removeEventListener("focusout", handleFocusOut);
    }
  }, [isOpen]);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (isOpen) setIsOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-void/90 backdrop-blur-md border-b-2 border-stroke shadow-lg"
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
              {name}
            </span>
          </Link>

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2.5 rounded-lg border-2 transition-all duration-200 ${
              isOpen
                ? "text-accent border-accent bg-accent-muted/30"
                : "text-light border-stroke bg-surface hover:border-accent hover:text-accent"
            }`}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <Icon name={isOpen ? "x" : "menu"} size="md" />
          </button>

          <ul
            ref={menuRef}
            id="mobile-menu"
            role="menubar"
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex absolute md:relative top-16 md:top-0 left-0 right-0 flex-col md:flex-row items-stretch md:items-center gap-1 md:gap-1 bg-void/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b-2 border-stroke md:border-0 shadow-2xl md:shadow-none p-4 md:p-0`}
          >
            {siteConfig.navigation.map((item) => {
              const isActive = pathname === `/#${item.id}`;
              return (
                <li role="none" key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                    className={`block px-4 py-3 md:py-2 rounded-lg text-base md:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-accent bg-accent-muted/30 border border-accent/30 md:border-0"
                        : "text-light hover:text-white hover:bg-surface-raised border border-transparent"
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

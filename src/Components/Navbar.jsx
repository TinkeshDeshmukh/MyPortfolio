import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "py-3 shadow-md bg-background/80 backdrop-blur-md" : "py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a className="text-xl font-bold flex items-center" href="#hero">
          <span className="relative z-10">
            <span>Tinkesh</span>{" "}
            <span className="text-violet-700">Portfolio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 ">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="hover:text-violet-600 hover:scale-110 transition-transform duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 z-50 "
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* Mobile Fullscreen Overlay */}
        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto backdrop-blur-lg bg-black/60"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-6 text-2xl text-white">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-violet-400 hover:scale-110 transition-transform duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

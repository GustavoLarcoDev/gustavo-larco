"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/" + href;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-apple-border/50 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, "#hero")}
            className="text-xl font-semibold text-apple-dark tracking-tight"
          >
            GL<span className="text-apple-blue">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className="text-xs text-apple-gray hover:text-apple-dark transition-colors duration-200 tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden md:block">
            <a
              href="/Gustavo-Larco-Resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-white bg-apple-blue rounded-full hover:bg-apple-blue-hover transition-colors duration-200"
            >
              <Download size={12} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-apple-dark p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-b border-apple-border/50 px-6 py-5 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className="block text-sm text-apple-gray hover:text-apple-dark transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Gustavo-Larco-Resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-apple-blue rounded-full mt-2"
          >
            <Download size={12} />
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

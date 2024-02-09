"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateVhProperty = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", updateVhProperty);
    updateVhProperty(); // Call on mount to set initial value

    return () => window.removeEventListener("resize", updateVhProperty);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <nav className="grid grid-cols-3 items-center justify-between bg-primary lg:px-20 md:px-10 sm:px-10 xs:px-10 px-4 py-5 relative z-30">
      {/* Left-aligned menu icon and navigation links */}
      <div className="flex items-center justify-start">
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-block cursor-pointer lg:hidden"
        >
          {/* Toggle menu visibility with dynamic src for the Image */}
          <Image
            src={isMenuOpen ? "/close.png" : "/menu.png"} // Assuming "/close.png" is your close icon
            alt={isMenuOpen ? "Close menu" : "Open menu"}
            width={20}
            height={16}
          />
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <ul className="mobileNav absolute top-full left-0 w-full bg-primary opacity-95 lg:hidden">
            {NAV_LINKS.map((link) => (
              <li
                key={link.key}
                className="text-sm font-sans font-normal tracking-widest uppercase text-gray-700 py-2 px-10 cursor-pointer"
              >
                <Link href={link.href}>
                  <span className="inline-block mt-5 pb-.5 border-b border-transparent hover:border-current transition duration-300 ease-in-out">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <ul className="hidden lg:flex items-center gap-6 sm:gap-7">
          {NAV_LINKS.map((link) => (
            <li
              key={link.key}
              className="text-xs font-sans font-normal tracking-widest uppercase text-gray-50 cursor-pointer transition-all"
            >
              <Link href={link.href}>
                <span className="whitespace-nowrap block pb-.5 border-b border-transparent hover:border-current transition duration-300 ease-in-out">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Centered logo */}
      <div className="flex justify-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </Link>
      </div>

      {/* Right-aligned buttons */}
      <div className="flex items-center justify-end">
        <Button type="button" icon="/search.png" />
        <Button type="button" icon="/user.png" />
        <Button type="button" icon="/cart.png" />
      </div>
    </nav>
  );
};

export default Navbar;

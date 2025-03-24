"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { NAV_LINKS, NAV_ICONS } from "@/constants";
import Button from "./custom/Button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleLogout = () => {
    console.log("logout");

    router.push("/auth/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md py-5 lg:px-32 px-8 flex items-center justify-between z-50">
      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden flex items-center z-50">
        <Image
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          src="/icons/Menu.png"
          alt="Icon_menu"
          width={20}
          height={20}
        />
      </div>

      {/* Logo */}
      <Link className="z-50" href="/">
        <Image src="/images/logo-full.png" alt="Logo" width={145} height={39} />
      </Link>

      {/* Desktop Navigation Links */}
      <div className="lg:flex  items-center gap-14 hidden ml-32">
        {NAV_LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-display-2 cursor-pointer transform transition duration-200 ease-in-out hover:scale-105"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-white flex flex-col items-center pt-10 gap-4 shadow-lg z-40"
          >
            <div className="flex flex-col gap-4 md:w-1/3 w-full md:px-0 px-4">
              {NAV_LINKS.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileNavOpen(false)}
                  className="text-display-2 text-neutral-7 uppercase tracking-wide font-semibold transform transition duration-200 ease-in-out hover:scale-105"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={link?.icon}
                      alt={link.name}
                      width={20}
                      height={20}
                    />

                    <span className="mt-1">{link.name}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="md:w-1/3 w-full md:px-0 px-4">
              <Button onClick={handleLogout} text="Logout" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Icons & Logout Button */}
      <div className="relative flex items-center gap-4">
        <div className="flex items-center gap-2">
          {NAV_ICONS.map((icon, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-center w-10 h-10 ${
                icon.alt !== "Cart" ? "hidden lg:flex" : "flex"
              }`}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>

        <div className="lg:flex hidden">
          <Button onClick={handleLogout} text="Logout" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

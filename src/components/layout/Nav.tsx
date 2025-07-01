import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

interface NavProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  routing: Record<string, { name: string }>;
}

const Nav: React.FC<NavProps> = ({ isOpen, setIsOpen, routing }) => {
  const router = usePathname();

  return (
    <nav
      id="nav"
      className="relative flex flex-row items-start px-0 pb-0 text-base md:text-lg md:overflow-auto"
    >
      {/* Mobile Hamburger Menu */}
      <button
        className="z-50 md:hidden transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={25} /> : <FiMenu size={25} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row space-x-0 gap-4">
        {Object.entries(routing).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className={`${
                router === path
                  ? "font-extrabold underline underline-offset-4"
                  : ""
              } transition-all flex align-middle relative py-1`}
            >
              {name}
            </Link>
          );
        })}
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-light dark:bg-dark flex flex-col items-center justify-center z-40 transition-all duration-300 transform ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        {isOpen &&
          Object.entries(routing).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className={`text-3xl py-4 ${
                router === path ? "font-extrabold underline" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default Nav;

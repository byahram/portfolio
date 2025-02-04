import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navList } from "@/store/store";

const Nav = () => {
  const router = usePathname();

  return (
    <nav
      id="nav"
      className="relative flex flex-row items-start px-0 pb-0 fade text-base md:text-lg md:overflow-auto scroll-pr-6 md:relative"
    >
      <div className="flex flex-row space-x-0">
        {Object.entries(navList).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className={`${
                router === path
                  ? "font-extrabold underline underline-offset-4"
                  : ""
              } transition-all flex align-middle relative py-1 px-2`}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;

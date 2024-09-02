"use client";
import { linkSosmed, linkSidebar } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="flex sticky top-5 flex-col max-w-2/6 h-1/2 m-2 rounded-md border shadow-md dark:border-secondaryDark">
      <div className="h-72 flex items-center justify-center px-4 border-b dark:border-secondaryDark">
        <div className="flex flex-col justify-center items-center px-10">
          <Image
            alt="Profile"
            src="/images/profile.jpg"
            width={500}
            height={500}
            className="rounded-full w-28 h-28 border shadow mb-2 dark:border-secondaryDark"
          />
          <p className="text-xl">Syaid Abdurrohman</p>
          <p className="text-sm mb-3">Front End Developer</p>
          <div className="flex justify-center items-center gap-3">
            {linkSosmed.map((link) => (
              <Link
                href={link.link}
                key={link.id}
                target="_blank"
                className="text-2xl my-1 rounded-md ease-in-out duration-300 bg-slate-100 hover:bg-gradient-to-r from-primary to-secondary hover:text-white hover: px-2 py-1 dark:text-secondaryDark dark:hover:text-white "
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col py-3">
        {linkSidebar.map((link) => (
          <Link
            href={link.path}
            key={link.id}
            className={`p-2 mb-1 rounded-md mx-1 hover:bg-slate-100 dark:hover:bg-gray-200 dark:text-white dark:hover:text-secondaryDark ${
              pathname === link.path
                ? "bg-gradient-to-r from-primary to-secondary text-white dark:hover:text-white"
                : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{link.icon}</span>
              <p>{link.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

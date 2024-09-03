import Link from "next/link";
import React from "react";

const linkFooter = [
  {
    id: 1,
    name: "Source code",
    link: "https://github.com/syaidart123/portofolio",
  },
  {
    id: 2,
    name: "Repository",
    link: "https://github.com/syaidart123?tab=repositories",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Projects",
    link: "/projects",
  },
];

const Footer = () => {
  return (
    <div>
      <hr className="border-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-5" />
      <div className="flex justify-center items-center gap-3 mt-3">
        {linkFooter.map((link) => (
          <Link
            href={link.link}
            key={link.id}
            className="p-2 mb-1 rounded-md hover:underline font-light"
            target="_blank"
          >
            <p className="text-base md:text-lg">{link.name}</p>
          </Link>
        ))}
      </div>
      <p className="text-center text-sm">
        Copyright ©{" "}
        <span className="italic underline">Syaid Abdurrohman 2024</span>. All
        rights reserved.
      </p>
    </div>
  );
};

export default Footer;

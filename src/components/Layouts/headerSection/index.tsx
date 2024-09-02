"use client";
import { useDarkMode } from "@/components/darkMode/darkMode";
import React, { useEffect, useState } from "react";

type propTypes = {
  title: string;
  subtitle: string;
};

const Header = (props: propTypes) => {
  const { title, subtitle } = props;
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <div className="relative p-4">
        <p className="text-2xl font-bold">{title}</p>
        <p className="font-light mt-3">{subtitle}</p>
        <button
          onClick={toggleDarkMode}
          className="absolute top-2 right-3 text-2xl px-2 py-1 border rounded-full shadow-md dark:border-gray-600"
        >
          {darkMode ? (
            <i className="bx bx-sun"></i>
          ) : (
            <i className="bx bx-moon"></i>
          )}
        </button>
      </div>
      <hr className="border-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-3" />
    </>
  );
};

export default Header;

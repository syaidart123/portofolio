"use client";
import { truncateText } from "@/components/truncate";
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

type propTypes = {
  image: string;
  title: string;
  link: string;
  desc: string;
  tech: any;
  id: number;
};

const Card = (props: propTypes) => {
  const { image, title, link, desc, tech, id } = props;
        useEffect(() => {
        Aos.init({
          duration: 1000,
          once: true,
        })
      }, [])
  return (
    <Link className="cursor-pointer" href={link} target="_blank" data-aos="fade-up" data-aos-delay={`${id * 100}`}>
      <div className="flex flex-col bg-white h-full border rounded-xl hover:shadow-secondary hover:shadow-md hover:animate-flicker hover:scale-105 hover:duration-500 hover:ease-in-out dark:bg-secondaryDark shadow-secondary shadow dark:border-gray-500">
        <Image
          className="w-full max-h-44 rounded-t-xl image-contain object-cover"
          src={image}
          width={500}
          height={500}
          alt="Card image"
        />
        <div className="p-4 md:p-3">
          <p className="text-lg font-bold">{title}</p>
          <p className="mt-1 text-gray-500 text-sm md:text-base dark:text-gray-200 line-clamp-6 text-justify">
            {truncateText(desc, 30)}
          </p>
          <div className="flex flex-wrap gap-3 mt-2 xl:gap-2">
            {tech.map((item: any) => (
              <div key={item.name}>
                <div className="relative inline-block group">
                  <button
                    type="button"
                    className="h-8 w-8 inline-flex justify-center items-center rounded-full bg-gray-50 border border-gray-200 text-gray-600 shadow dark:border-secondaryDark"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                    />
                  </button>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-white text-sm font-medium py-1 px-2 rounded-lg shadow-lg pointer-events-none z-10">
                    {item.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

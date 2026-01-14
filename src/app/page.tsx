"use client";
import Image from "next/image";
import { dataExperience, techStack } from "@/data";
import Marquee from "react-fast-marquee";
import Footer from "@/components/Layouts/footerSection";
import Header from "@/components/Layouts/headerSection";
import EmailSection from "@/components/Layouts/emailSection";
import { useEffect, useMemo } from "react";
import AOS from 'aos'
export default function Home() {
  const shuffleArray = (techStack: any) => {
    return [...techStack].sort(() => Math.random() - 0.5);
  };
  const shuffledTechStack1 = useMemo(
    () => shuffleArray(techStack),
    [techStack]
  );
  const shuffledTechStack2 = useMemo(
    () => shuffleArray(techStack),
    [techStack]
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <>
      <Header
        title="Home"
        subtitle="Introduction and Professional Experience"
      />
      <div className="flex flex-col border rounded-md p-4 dark:border-secondaryDark shadow-secondary shadow animate-flicker">
        <div className="py-5">
          <h1 className="text-4xl font-bold mb-4 fade-left" data-aos="fade-left">
            Hallo, I&apos;m Syaid Abdurrohman
          </h1>
          <p className="text-justify font-light py-2" data-aos="zoom-in">
            Web Developer with 2+ years of experience building high-performing, visually engaging web applications — from campaign landing pages to data-driven dashboards.

          </p>

          <p className="text-justify font-light py-2" data-aos="zoom-in">
            <span className="font-bold"> What I bring:</span>
            <ul className="list-disc list-inside mt-2">
              <li>Strong attention to UI detail and visual consistency</li>
              <li>Experience turning designs (Figma) into responsive, production-ready code</li>
              <li>Ability to balance creativity with performance and usability</li>
            </ul>
          </p>

          <p>
            Currently open to opportunities as a Web Developer / Frontend Developer, especially roles that value creative UI, strong visual storytelling, and user-centered design.
          </p>

          <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-md my-3 shadow-md" data-aos="fade-up">
            <a href="/images/CV _SYAID ABDURROHMAN.pdf" target="_blank" download>
            Download CV
            </a>
          </button>
        </div>
        <div className="mt-3 py-5 border-t dark:border-secondaryDark" data-aos="fade-up">
          <p className="text-2xl font-medium mb-3">
            <span>
              <i className="bx bx-briefcase text-2xl font-bold mr-2 flex items-center"></i>
            </span>
            Experience
          </p>
          {dataExperience.map((item) => (
            <ol
              key={item.id}
              className="relative -z-10 border-s border-gray-200 dark:border-gray-700"
              data-aos="fade-up"
            >
              <li className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {item.time}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title} at {item.company}
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {item.desc}
                </p>
              </li>
            </ol>
          ))}
        </div>

        <div className="py-5 border-t dark:border-secondaryDark">
          <p className="text-2xl font-medium mb-3">
            <span>
              <i className="bx bx-code-block text-2xl font-bold mr-2 "></i>
            </span>
            Tech Stack
          </p>
          <div className="relative overflow-hidden">
            <Marquee pauseOnHover direction="left" className="my-3 -z-10">
              {[...shuffledTechStack1, ...shuffledTechStack1].map(
                (tech, index) => (
                  <div
                    key={index}
                    className="flex border w-40 rounded-md shadow-md justify-center py-1 mx-2 cursor-pointer hover:border-primary hover:shadow-secondary hover:ease-in-out dark:border-secondaryDark"
                  >
                    <Image
                      alt={tech.name}
                      src={tech.image}
                      width={500}
                      height={500}
                      className="w-8 h-8 mr-4 object-contain"
                    />
                    <div className="flex items-center justify-center">
                      <p>{tech.name}</p>
                    </div>
                  </div>
                )
              )}
            </Marquee>

            <Marquee className="my-3 -z-10" pauseOnHover direction="right">
              {[...shuffledTechStack2, ...shuffledTechStack2].map(
                (tech, index) => (
                  <div
                    key={index}
                    className=" flex border w-40 rounded-md shadow-md justify-center py-1 mx-2 cursor-pointer hover:border-primary hover:shadow-secondary hover:ease-in-out dark:border-secondaryDark"
                  >
                    <Image
                      alt={tech.name}
                      src={tech.image}
                      width={500}
                      height={500}
                      className="w-8 h-8 mr-4 object-contain"
                      loading="lazy"
                    />
                    <div className="flex items-center justify-center">
                      <p>{tech.name}</p>
                    </div>
                  </div>
                )
              )}
            </Marquee>
          </div>
        </div>
        <div className="py-3 border-t dark:border-secondaryDark" data-aos="fade-up">
          <EmailSection />
        </div>
      </div>
      <Footer />
    </>
  );
}

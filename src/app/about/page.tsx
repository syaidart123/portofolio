import Footer from "@/components/Layouts/footerSection";
import Header from "@/components/Layouts/headerSection";
import { techStack } from "@/data";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Header title="About" subtitle="A glimpse into my personal journey" />
      <div className="flex flex-col border rounded-md shadow-md p-4 dark:border-secondaryDark">
        <div className="py-5 flex flex-col gap-3 text-justify font-light">
          <p>
            Hi everyone, I&apos;em Syaid Abdurrohman. My coding journey began as
            a self-taught developer, diving deep into countless YouTube
            tutorials. These videos opened my eyes to the vast world of frontend
            development. The more I explored, the more fascinated I became with
            the countless concepts and technologies I could learn.{" "}
          </p>
          <p>
            {" "}
            I&apos;ve chosen to specialize in frontend development because I
            genuinely enjoy creating user-friendly interfaces and interactions.
            There&apos;s a unique satisfaction in crafting responsive and
            visually appealing UI elements.
          </p>
          <p>
            {" "}
            To further enhance my skills, I actively participate in online
            courses that offer in-depth learning. These platforms allow me to
            connect with other developers and gain a more comprehensive
            understanding of the subject matter.{" "}
          </p>
          <p>
            {" "}
            I believe that sharing knowledge is the best way to learn.
            Therefore, I&apos;ll be using this website to document my learning
            journey, from small-scale projects to more complex ones. I hope that
            the content I share will be helpful to anyone aspiring to become a
            frontend developer.
          </p>
        </div>
        <div className="py-5 border-t dark:border-secondaryDark">
          <p className="text-xl font-medium">
            <span className="mr-2">
              <i className="bx bx-code"></i>
            </span>{" "}
            Favorite Tech Stacks
          </p>
          <div className="flex gap-3 py-3">
            {techStack
              .filter((e: any) => e.favorite)
              .map((item: any, index: any) => (
                <div key={index}>
                  <div className="col-start-2">
                    <div className="relative inline-block group">
                      <button
                        type="button"
                        className="size-10 inline-flex justify-center items-center gap-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 shadow hover:shadow-md hover:shadow-secondary hover:border-primary dark:border-secondaryDark"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={100}
                          height={100}
                        />
                      </button>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-white text-sm font-medium py-1 px-2 rounded-lg shadow-lg pointer-events-none z-10 ">
                        {item.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;

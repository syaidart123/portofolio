import Image from "next/image";
import { techStack } from "@/data";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Footer from "@/components/Layouts/footerSection";
import Header from "@/components/Layouts/headerSection";
import EmailSection from "@/components/Layouts/emailSection";

export default function Home() {
  return (
    <>
      <Header
        title="Home"
        subtitle="Introduction and Professional Experience"
      />
      <div className="flex flex-col border rounded-md shadow-md p-4 dark:border-secondaryDark">
        <div className="py-5">
          <h1 className="text-4xl font-bold mb-4">
            Hello, I&apos;m Syaid Abdurrohman
          </h1>
          <p className="text-justify font-light py-2">
            I&apos;m frontend developer with a passion for transforming ideas
            into engaging and responsive digital experiences. I specialize in
            crafting user interfaces that are not only visually striking but
            also intuitive and efficient.
          </p>
          <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-md my-3 shadow-md">
            Download CV
          </button>
        </div>
        <div className="mt-3 py-5 border-t dark:border-secondaryDark">
          <p className="text-2xl font-medium mb-3">
            <span>
              <i className="bx bx-briefcase text-2xl font-bold mr-2 flex items-center"></i>
            </span>
            Experience
          </p>
          <div className="flex border shadow rounded-md p-4 w-full  lg:w-3/4 my-3 dark:border-secondaryDark">
            <Image
              alt="profile"
              src="/images/hi.png"
              width={500}
              height={500}
              className=" w-20 h-20 mb-2 mr-4 object-contain"
            />
            <div>
              <p className="font-semibold text-lg">Fullstack Developer</p>
              <Link
                href={"https://human-initiative.org/"}
                className=" my-1 text-base underline hover:cursor-pointer"
              >
                Human Initiative Jawa Barat
              </Link>
              <p className="text-base">Maret 2024 - Juli 2024</p>
            </div>
          </div>
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
              {[...techStack, ...techStack].map((tech, index) => (
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
              ))}
            </Marquee>

            <Marquee className="my-3 -z-10" pauseOnHover direction="right">
              {[...techStack, ...techStack].map((tech, index) => (
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
              ))}
            </Marquee>
          </div>
        </div>
        <div className="py-3 border-t dark:border-secondaryDark">
          <EmailSection />
        </div>
      </div>
      <Footer />
    </>
  );
}

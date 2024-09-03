import Footer from "@/components/Layouts/footerSection";
import Header from "@/components/Layouts/headerSection";
import React from "react";
import { dataProjects } from "@/data";
import Card from "./card";

const ProjectPage = () => {
  return (
    <div className="">
      <Header title="About" subtitle="Portfolio of my projects" />
      <div className="flex flex-col border rounded-md shadow-md p-4 min-h-[70vh] dark:border-secondaryDark">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 py-5 px-1">
          {dataProjects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;

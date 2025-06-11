"use client";

import { Code } from "lucide-react";
import { Navbar } from "@/_components/navbar";
import { Button } from "@/_components/button";
import { WorkExperienceList } from "@/_components/work-experience-list/work-experience-list";
import { ArticleList } from "@/_components/article-list/article-list";
import projects from "@/projects.json";
import { ProjectCard } from "@/_components/project-card";

export default function Home() {
  const renderHeader = () => {
    return (
      <header className="w-full lg:w-[60%] lg:sticky top-0">
        <h1 className="text-5xl xl:text-7xl font-bold text-slate-300 leading-none">
          Gbenga Anifowoshe
        </h1>
        <p className="mb-4 mt-1 animation-delay-500 text-cyan-400 leading-none">
          Software Engineer
        </p>

        <p className="w-full lg:w-2/3 mb-10 leading-normal">
          Experienced Fullstack Software Engineer with over 6 years of hands-on
          experience in building scalable, high- performance web applications
          and infrastructure
        </p>

        <Button>
          <Code className="mr-2" /> View side projects
        </Button>
      </header>
    );
  };

  const renderProjects = () => {
    return (
      <section id="projects" className="mt-20 lg:mt-44">
        <div className="flex items-center mb-6 lg:mb-12 justify-center">
          <hr className="mr-2 w-10" />
          <h6 className="text-xl font-semibold text-center animate-fade-in-up flex items-center">
            My Side Projects
          </h6>
          <hr className="ml-2 w-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              tools={project.tools}
              githubLink={project.githubLink}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </section>
    );
  };

  const renderFooter = () => {
    return (
      <footer className="pb-8 px-4 sm:px-6 lg:px-8 text-center text-gray-400 relative text-sm mt-40">
        <p>
          &copy; {new Date().getFullYear()} Gbenga Anifowoshe. All rights
          reserved.
        </p>
        <p className="mt-1">
          Built with <span className="text-cyan-400">Next.js</span> and{" "}
          <span className="text-cyan-400">TailwindCss</span>
        </p>
      </footer>
    );
  };

  return (
    <>
      <Navbar />
      <div className="pt-18 px-6 md:px-12 xl:w-[1396px] mx-auto">
        <div className="flex flex-col gap-y-24 lg:flex-row lg:gap-x-4 lg:gap-y-0">
          {renderHeader()}

          <div className="w-full lg:w-[40%]">
            <WorkExperienceList />

            <div className="mt-20 lg:t-40">
              <ArticleList />
            </div>
          </div>
        </div>

        {renderProjects()}
        {renderFooter()}
      </div>
    </>
  );
}

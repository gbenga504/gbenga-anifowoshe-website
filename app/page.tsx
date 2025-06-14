import { Code } from "lucide-react";
import { Navbar } from "@/_components/navbar";
import { Button } from "@/_components/button";
import { WorkExperienceList } from "@/_components/work-experience-list/work-experience-list";
import { ArticleList } from "@/_components/article-list/article-list";
import projects from "@/projects.json";
import { ProjectCard } from "@/_components/project-card";
import { Socials } from "./_components/socials";
import { SectionHeader } from "./_components/section-header";

export default function Home() {
  const renderHeader = () => {
    return (
      <header className="w-full pt-18 lg:w-[60%] lg:sticky lg:top-0 lg:max-h-screen">
        <h1 className="text-5xl xl:text-7xl font-bold text-slate-300 leading-none">
          Gbenga Anifowoshe
        </h1>
        <p className="mb-4 mt-1 animation-delay-500 text-cyan-400 leading-none">
          Software Engineer
        </p>

        <p className="w-full lg:w-2/3 mb-6 leading-normal">
          Experienced Fullstack Software Engineer with over 6 years of hands-on
          experience in building scalable, high- performance web applications
          and infrastructure
        </p>

        <section className="mb-10">
          <Socials />
        </section>

        <Button href="#projects">
          <Code className="mr-2" /> View side projects
        </Button>
      </header>
    );
  };

  const renderProjects = () => {
    return (
      <section id="projects" className="mt-20 lg:mt-44">
        <SectionHeader title="Hobby Projects" className="mb-6 lg:mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              tools={project.tools}
              githubLink={project.githubLink}
              projectLink={project.projectLink}
              year={project.year}
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
          <span className="text-cyan-400">TailwindCss</span> and inspired by{" "}
          <a
            className="text-cyan-400"
            target="_blank"
            rel="noreferrer"
            href="https://brittanychiang.com/"
          >
            Brittany Chiang
          </a>{" "}
          and{" "}
          <a
            className="text-cyan-400"
            target="_blank"
            rel="noreferrer"
            href="https://overreacted.io/"
          >
            Dan&apos;s overreacted
          </a>
        </p>
      </footer>
    );
  };

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-12 xl:w-[1396px] mx-auto">
        <div className="flex flex-col gap-y-24 lg:flex-row lg:gap-x-4 lg:gap-y-0">
          {renderHeader()}

          <div className="w-full lg:pt-18 lg:w-[40%]">
            <SectionHeader title="Experiences" className="mb-6" />
            <WorkExperienceList />

            <div className="mt-20 lg:t-40">
              <SectionHeader title="Articles" className="mb-6" />
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

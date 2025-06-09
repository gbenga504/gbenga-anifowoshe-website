"use client";

import { Code, ExternalLink, Github, Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/_components/navbar";
import { Button } from "./_components/button";
import { WorkExperienceList } from "./_components/work-experience-list/work-experience-list";
import { ArticleList } from "./_components/article-list/article-list";

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

  const renderFooter = () => {
    return (
      <footer className="pb-8 px-4 sm:px-6 lg:px-8 text-center text-gray-400 relative text-sm mt-40">
        <p>
          &copy; {new Date().getFullYear()} Gbenga Anifowoshe. All rights
          reserved.
        </p>
        <p className="mt-1">
          Built with <span className="text-red-500">&hearts;</span> and{" "}
          <span className="text-cyan-400">React.js</span>
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

        {/* Projects Section */}
        {/* <section id="projects" className="mt-44 lg:w-[1400px] mx-auto relative">
          <div className="flex items-center mb-12 justify-center">
            <hr className="mr-2 w-10" />
            <h6 className="text-3xl font-medium text-center animate-fade-in-up flex items-center">
              My Side Projects
            </h6>
            <hr className="ml-2 w-10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard />
          </div>
        </section> */}

        {renderFooter()}
      </div>
    </>
  );
}

const ProjectCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect after it's visible once
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Ensure className is on a single line to prevent compilation errors
  const cardClassName = `bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`;

  return (
    <div
      ref={cardRef}
      className={cardClassName}
      style={{ position: "relative", transitionDelay: `100ms` }}
    >
      <h3 className="text-2xl font-semibold mb-3 text-white">
        <Lightbulb className="inline-block mr-2 text-cyan-400" size={20} />
        E-commerce Platform
      </h3>
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        A full-stack e-commerce application with user authentication, product
        listings, shopping cart, and secure payment processing.
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-4 py-1 bg-cyan-800/40 text-cyan-200 rounded-sm inset-shadow-sm text-xs">
          React
        </span>
        <span className="px-4 py-1 bg-cyan-800/40 text-cyan-200 rounded-sm inset-shadow-sm text-xs">
          Typescript
        </span>
      </div>
      <div className="flex justify-end gap-3 items-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 cursor-pointer bg-gray-700 hover:bg-gray-600 text-white font-semibold text-sm rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-1000"
        >
          <Github className="mr-2" size={18} /> GitHub
        </a>

        <a className="inline-flex items-center px-4 py-2 cursor-pointer bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-sm rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-1000">
          <ExternalLink className="mr-2" size={14} /> View side projects
        </a>
      </div>
    </div>
  );
};

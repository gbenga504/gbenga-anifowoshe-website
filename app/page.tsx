"use client";

import { Code, Dot, ExternalLink, Github, Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const renderHeader = () => {
    return (
      <header className="w-[60%] leading-none sticky top-0">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold animate-fade-in-up">
          Gbenga Anifowoshe
        </h1>
        <p className="mb-4 mt-1 animate-fade-in-up animation-delay-500 text-cyan-400">
          Software Engineer
        </p>

        <p className="w-2/3 text-sm mb-10">
          Experienced Fullstack Software Engineer with over 6 years of hands-on
          experience in building scalable, high- performance web applications
          and infrastructure
        </p>

        <a className="inline-flex items-center px-4 py-2 cursor-pointer bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-sm rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-1000">
          <Code className="mr-2" /> View side projects
        </a>
      </header>
    );
  };

  const renderWorkExperience = () => {
    return (
      <a className="flex gap-x-5 cursor-pointer">
        <div className="w-36 h-36 bg-gray-800 rounded-sm inset-shadow-sm" />
        <div className="flex-1">
          <h6 className="flex items-center text-cyan-400 font-bold">
            Senior Software Engineer <Dot /> Wunderflats{" "}
            <ExternalLink className="ml-2" size={16} />
          </h6>
          <p className="text-sm mt-1">
            Build and maintain critical components used to construct Klaviyo’s
            frontend, across the whole product. Work closely with
            cross-functional teams, including developers, designers, and product
            managers, to implement and advocate for best practices in web
            accessibility.
          </p>
          <div className="mt-2">
            <span className="px-4 py-1 bg-cyan-800/40 text-cyan-200 rounded-sm inset-shadow-sm text-xs">
              React
            </span>
          </div>
        </div>
      </a>
    );
  };

  const renderArticle = () => {
    return (
      <a className="flex gap-x-5 cursor-pointer items-center">
        <div className="w-36 h-20 bg-gray-800 rounded-sm inset-shadow-sm" />
        <div className="flex-1">
          <h6 className="flex items-center text-cyan-400 font-bold">2024</h6>
          <p className="text-sm mt-1 flex items-center">
            5 Common Accessibility Pitfalls and How to Avoid them{" "}
            <ExternalLink className="ml-2" size={14} />
          </p>
        </div>
      </a>
    );
  };

  const renderRightSection = () => {
    return (
      <div className="w-[40%]">
        <ol>
          <li>{renderWorkExperience()}</li>
        </ol>
        <a className="mt-2 inline-flex items-center px-4 py-2 cursor-pointer bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-sm rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-1000">
          View resume <ExternalLink className="ml-2" size={14} />
        </a>

        <ol className="mt-40">
          <li>{renderArticle()}</li>
        </ol>
        <a className="mt-2 inline-flex items-center px-4 py-2 cursor-pointer bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-sm rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-1000">
          View all articles <ExternalLink className="ml-2" size={14} />
        </a>
      </div>
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

  const renderNavbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full flex items-center py-4 px-6">
        <span className="italic">by</span>
        <div className="bg-gray-500 w-10 h-10 rounded-full ml-3"></div>
      </nav>
    );
  };

  return (
    <>
      {renderNavbar()}
      <div className="lg:w-[1400px] mx-auto pt-18">
        <div className="flex gap-x-4">
          {renderHeader()}
          {renderRightSection()}
        </div>

        {/* Projects Section */}
        <section id="projects" className="mt-44 lg:w-[1400px] mx-auto relative">
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
        </section>

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

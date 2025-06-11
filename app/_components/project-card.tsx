import classNames from "classnames";
import { ExternalLink, Github, Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { Tag } from "./tag";

interface IProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  githubLink?: string;
  projectLink?: string;
}

export const ProjectCard = ({
  title,
  description,
  tools,
  githubLink,
  projectLink,
}: IProjectCardProps) => {
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

    const card = cardRef.current;

    if (card) {
      observer.observe(card);
    }

    return () => {
      if (card) {
        observer.unobserve(card);
      }
    };
  }, []);

  const renderCTAs = () => {
    return (
      <div className="flex justify-end gap-3 items-center">
        {githubLink && (
          <Button>
            <Github className="mr-2" size={18} /> GitHub
          </Button>
        )}

        {projectLink && (
          <Button>
            <ExternalLink className="mr-2" size={14} /> Explore
          </Button>
        )}
      </div>
    );
  };

  return (
    <div
      ref={cardRef}
      className={classNames(
        "relative bg-light-background rounded-md p-6",
        "delay-100 transition-all duration-500 ease-in-out",
        {
          "opacity-100 translate-y-0": isVisible,
          "opacity-0 translate-y-10": !isVisible,
        }
      )}
    >
      <h3 className="text-base font-bold mb-3 text-slate-300 flex items-center">
        <Lightbulb className="inline-block mr-2 text-cyan-400" size={20} />
        {title}
      </h3>
      <p className="text-slate-400 mb-4 text-sm leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {tools.map((tool, i) => (
          <Tag key={i}>{tool}</Tag>
        ))}
      </div>
      {renderCTAs()}
    </div>
  );
};

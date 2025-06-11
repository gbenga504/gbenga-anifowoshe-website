import { Github, Linkedin, Twitter } from "lucide-react";

export const Socials: React.FC = () => {
  return (
    <div className="flex gap-x-4">
      <a
        className="cursor-pointer text-gray-400 hover:text-primary"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/gbenga504"
      >
        <Github size={20} />
      </a>

      <a
        className="cursor-pointer text-gray-400 hover:text-primary"
        target="_blank"
        rel="noreferrer"
        href="https://x.com/David_Ani_s"
      >
        <Twitter size={20} />
      </a>

      <a
        className="cursor-pointer text-gray-400 hover:text-primary"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/gbenga-anifowoshe-78bb83106/"
      >
        <Linkedin size={20} />
      </a>
    </div>
  );
};

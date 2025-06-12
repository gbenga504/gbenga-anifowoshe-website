import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

interface IListItemProps {
  leftSection: ReactNode;
  title: string;
  description: ReactNode;
  href: string;
}

export const ListItem: React.FC<IListItemProps> = ({
  leftSection,
  title,
  description,
  href,
}) => {
  return (
    <a
      className="flex flex-col md:flex-row gap-x-5 cursor-pointer"
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      <div className="w-36 rounded-sm inset-shadow-sm">{leftSection}</div>
      <div className="flex-1">
        <h6 className="flex items-center text-slate-300">
          {title} <ExternalLink className="ml-2" size={16} />
        </h6>
        <main className="text-sm mt-1">{description}</main>
      </div>
    </a>
  );
};

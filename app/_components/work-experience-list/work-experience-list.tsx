import { Tag } from "../tag";
import { ListItem } from "../list-item";
import data from "./data.json";
import { Fragment } from "react";
import { Button } from "../button";
import { ExternalLink } from "lucide-react";

export const WorkExperienceList = () => {
  return (
    <Fragment>
      <ol>
        {data.map((w, i) => (
          <li key={i} className="mb-12">
            <ListItem
              leftSection={
                <span className="uppercase flex items-center text-xs">
                  {w.startPeriod}
                  <div className="w-3 border-b border-slate-400 mx-2" />
                  {w.endPeriod}
                </span>
              }
              title={`${w.title} @ ${w.company}`}
              description={
                <p>
                  {w.description}
                  <span className="mt-3 flex flex-wrap gap-2">
                    {w.tools.map((t, i) => (
                      <Tag key={i}>{t}</Tag>
                    ))}
                  </span>
                </p>
              }
              href={w.link}
            />
          </li>
        ))}
      </ol>

      <Button target="_blank" rel="noreferrer" href="/resume.pdf">
        View resume <ExternalLink className="ml-2" size={14} />
      </Button>
    </Fragment>
  );
};

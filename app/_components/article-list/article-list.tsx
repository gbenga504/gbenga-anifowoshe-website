import { ListItem } from "../list-item";
import data from "./data.json";
import { Fragment } from "react";
import { Button } from "../button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export const ArticleList = () => {
  return (
    <Fragment>
      <ol>
        {data.map((a, i) => (
          <li key={i}>
            <ListItem
              leftSection={
                a.imageLink && (
                  <Image
                    src={a.imageLink}
                    width={144}
                    height={80}
                    alt="article"
                  />
                )
              }
              title={a.year}
              description={a.title}
              href={a.link}
            />
          </li>
        ))}
      </ol>

      <Button className="mt-6">
        View all articles <ExternalLink className="ml-2" size={14} />
      </Button>
    </Fragment>
  );
};

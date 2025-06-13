import classNames from "classnames";

export const Header: React.FC<{ title: string; className?: string }> = ({
  title,
  className,
}) => {
  return (
    <div className={classNames("flex items-center justify-center", className)}>
      <hr className="mr-2 w-10" />
      <h6 className="text-lg font-semibold">{title}</h6>
      <hr className="ml-2 w-10" />
    </div>
  );
};

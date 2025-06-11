import classNames from "classnames";

export const Button: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props
) => {
  const { children, className, ...rest } = props;

  return (
    <a
      className={classNames(
        "inline-flex items-center px-4 py-2 cursor-pointer bg-primary text-white font-semibold text-sm rounded-sm",
        "transition-all duration-300 ease-in-out",
        "hover:bg-primary-dark hover:-translate-y-0.5",
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
};

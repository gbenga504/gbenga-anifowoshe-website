import classNames from "classnames";

export const Button: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props
) => {
  const { children, className, ...rest } = props;

  return (
    <a
      className={classNames(
        "inline-flex items-center px-4 py-2 cursor-pointer bg-primary text-white font-semibold text-sm rounded-sm shadow-sm",
        "hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-1000",
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
};

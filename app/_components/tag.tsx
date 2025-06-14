import { ReactNode } from "react";

export const Tag: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span className="px-4 py-1 bg-cyan-800/40 text-cyan-200 rounded-sm inset-shadow-sm text-xs h-max">
      {children}
    </span>
  );
};

import type { FC, PropsWithChildren } from "react";

import type { ExtraClassProps } from "utils/types";

const Row: FC<PropsWithChildren & ExtraClassProps> = ({ children, className = "" }) => {
  return <div className={`flex items-center ${className}`}>{children}</div>;
};

export default Row;

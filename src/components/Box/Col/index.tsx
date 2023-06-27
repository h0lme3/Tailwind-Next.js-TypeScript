import type { FC, PropsWithChildren } from "react";

import type { ExtraClassProps } from "utils/types";

const Col: FC<PropsWithChildren & ExtraClassProps> = ({ children, className = "" }) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
};

export default Col;

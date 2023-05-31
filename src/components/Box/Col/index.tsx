import type { FC, PropsWithChildren } from "react";

import type { ExtraClassProps } from "utils/types";

const Col: FC<PropsWithChildren & ExtraClassProps> = ({ children, className }) => {
  return <div className={`flex flex-col space-y-4 ${className}`}>{children}</div>;
};

export default Col;

import type { FC, PropsWithChildren } from "react";
import { createContext, useContext, useMemo, useState } from "react";

// create context
export const TempContext = createContext({
  temp: "temp",
  setTemp: (value: string) => {
    value;
  },
});

export const TempProvider: FC<PropsWithChildren> = ({ children }) => {
  const [temp, setTemp] = useState<string>("temp");
  const value = useMemo(() => ({ temp, setTemp }), [temp]);
  return <TempContext.Provider value={value}>{children}</TempContext.Provider>;
};

// use context
export const useTemp = () => {
  return useContext(TempContext);
};

export default TempProvider;

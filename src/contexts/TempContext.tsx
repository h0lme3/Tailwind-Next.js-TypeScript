import { createContext, useContext, useState } from 'react'
import type { FC, PropsWithChildren } from 'react'

// create context
export const TempContext = createContext({})

export const TempProvider: FC<PropsWithChildren> = ({ children }) => {
  const [temp, setTemp] = useState('temp')
  return <TempContext.Provider value={{ temp, setTemp }}>{children}</TempContext.Provider>
}

// use context
export const useTemp = () => {
  return useContext(TempContext)
}

export default TempProvider

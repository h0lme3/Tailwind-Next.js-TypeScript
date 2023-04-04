import type { FC, PropsWithChildren } from 'react'
import React from 'react'

import { extraClassProps } from 'utils/types'

const Col: FC<PropsWithChildren & extraClassProps> = ({ children, className }) => {
  return <div className={`flex flex-col space-y-4 ${className}`}>{children}</div>
}

export default Col

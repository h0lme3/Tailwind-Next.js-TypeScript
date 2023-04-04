import type { FC, PropsWithChildren } from 'react'
import React from 'react'

import type { extraClassProps } from 'utils/types'

const Row: FC<PropsWithChildren & extraClassProps> = ({ children, className }) => {
  return <div className={`flex items-center space-x-4 ${className}`}>{children}</div>
}

export default Row

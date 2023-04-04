import dynamic from 'next/dynamic'

export const Col = dynamic(() => import('./Box/Col'))
export const Row = dynamic(() => import('./Box/Row'))

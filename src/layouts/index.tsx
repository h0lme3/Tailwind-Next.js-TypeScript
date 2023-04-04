import type { FC, PropsWithChildren } from 'react'

import Header from './header'
import Footer from './footer'
import { Col } from 'components'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Col className="h-screen">
      <Header />
      {children}
      <Footer />
    </Col>
  )
}

export default Layout

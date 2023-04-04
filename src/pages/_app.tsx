import type { AppProps } from 'next/app'

import Layout from 'layouts'
import { TempProvider } from 'contexts'

import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <TempProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TempProvider>
    </>
  )
}

export default MyApp

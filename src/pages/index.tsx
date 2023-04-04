import type { NextPage } from 'next'
import Head from 'next/head'

import { ProView } from 'views'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TNT</title>
        <meta name="description" content="This is template for Tailwind CSS + Next.js + TypeScript." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProView />
    </>
  )
}

export default Home

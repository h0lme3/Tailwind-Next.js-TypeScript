import type { NextPage } from "next";
import Head from "next/head";

import { ProView } from "views";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TNTs</title>
        <meta name="description" content="Built by TNTs(TypeScript, Next.js, Tailwind CSS, and styled-components)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProView />
    </>
  );
};

export default Home;

import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* meta tags for SEO */}
          <meta httpEquiv="Cache-control" content="max-age=3153600" />
          <meta name="title" content="TNTs" />
          <meta name="description" content="TypeScript + Next.js + Tailwind CSS + styled-components" key="desc" />
          <meta name="keywords" content="tech stack, frontend" />
          <meta property="og:url" content="" />
          <meta property="og:type" content="template site" />
          <meta property="og:site_name" content="tnts" />

          <link rel="publisher" href="" />
          <meta name="robots" content="index,follow" />
          <meta name="GOOGLEBOT" content="index,follow" />

          {/* icon */}
          <link rel="icon" href="/favicon.ico" type="image/ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

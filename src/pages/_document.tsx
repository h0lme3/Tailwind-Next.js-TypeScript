import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`;

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
          <meta name="title" content="TNTs | Holmes" />
          <meta
            name="description"
            content="Built by TNTs(TypeScript, Next.js, Tailwind CSS, and styled-components)"
            key="desc"
          />
          <meta name="keywords" content="tech stack, frontend" />
          <meta property="og:url" content="https://tnts.holmes007.online" />
          <meta property="og:type" content="template site" />
          <meta property="og:site_name" content="TNTs" />

          <link rel="publisher" href="https://holmes007.online" />
          <meta name="robots" content="index,follow" />
          <meta name="GOOGLEBOT" content="index,follow" />

          {/* icon */}
          <link rel="icon" href="/favicon.ico" type="image/ico" />

          {/* google tagmanager and google analytics*/}
          {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
            <>
              <Script async src={gtag} strategy="beforeInteractive" />
              <Script
                id="google-analytics"
                dangerouslySetInnerHTML={{
                  __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments)}
              gtag("js", new Date());
              gtag("config", '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
            `,
                }}
                strategy="beforeInteractive"
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

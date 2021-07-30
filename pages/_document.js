import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" prefix="og: http://ogp.me/ns#">
        <Head>
          <meta property="og:title" content="Events Website" />
          <meta name="image" property="og:image" content="/mysite.png" />
          <meta name="author" content="Sagar Dalal" />
          <meta
            property="og:description"
            content="Website created using NextJS"
          />
          <meta
            property="og:url"
            content="https://nextjs-events-firebase-api-mongodb.vercel.app"
          />
        </Head>
        <body>
          <div id="overlays"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

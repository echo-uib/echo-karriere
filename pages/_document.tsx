import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link
            rel="alternate icon"
            type="image/png"
            href="/icon.png"
            sizes="512x512"
          />
          <link href="/icon.png" rel="apple-touch-icon" sizes="180x180" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

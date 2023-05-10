import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
          ></link>
        </Head>
        <body style={{ background: "#F6F4EE" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

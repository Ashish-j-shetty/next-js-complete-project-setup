/**
 * This page is auto hanled by next js
 * use this fiel onlu if absolutely necessory.
 */
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main></Main>
        </body>
        <NextScript />
      </Html>
    );
  }
}

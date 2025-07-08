import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { EN_LANGUAGE, LANGUAGE_PATH_MAP, validLanguages } from "@/config";
class MyDocument extends Document<{
  lang: string;
}> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const lang = detectLanguage(ctx);
    return { ...initialProps, lang };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

function detectLanguage(ctx: DocumentContext): string {
  const path = ctx.asPath;

  if (path) {
    const detectedLanguage = validLanguages.find((lang) =>
      path.startsWith(`/${LANGUAGE_PATH_MAP[lang]}`)
    );

    if (detectedLanguage) {
      return detectedLanguage;
    }
  }
  // 默认语言
  return EN_LANGUAGE;
}

export default MyDocument;

import React from "react";
import Script from "next/script";

import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}
          <title>wurdz</title>
        </Head>
        <body>
          <div>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-GYZJJ8LCHY"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-GYZJJ8LCHY');
            `}
            </Script>
            <Script id="my-custom-script" strategy="afterInteractive">
              {`
                window.pokeDex = {
                  capture: () => {
                    console.log('Captured!!')
                  }
                }
                alert('Sup');
              `}
            </Script>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

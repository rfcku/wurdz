import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

import Layout from "../providers/layout.provider";
import ThemeProvider from "../providers/theme.provider";
import AlertTemplate from "../providers/alert.provider";

import { transitions, positions, Provider as AlertProvider } from "react-alert";

import "./style.css";
import "./markdown-editor.css";
import "./markdown.css";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <NextUIProvider>
          <AlertProvider template={AlertTemplate} {...options}>
            <Layout session={session} {...pageProps}>
              <Component {...pageProps} />
            </Layout>
          </AlertProvider>
        </NextUIProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;

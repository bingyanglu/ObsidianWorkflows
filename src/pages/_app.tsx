import React from "react";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;

import React from "react";
import Layout from "../components/Layout";
import { wrapper } from "../store";
import { useRouter } from "next/router";
import "../styles/globals.css";
function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Layout>
        <Component key={router.asPath} {...pageProps} />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(App);

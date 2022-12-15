import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { DefaultSeo } from "next-seo";
import Layout from "../components/layout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <DefaultSeo
        titleTemplate="%s - Tyresöguiden.se"
        openGraph={{
          type: "website",
          locale: "sv_SE",
          url: "http://www.tyresoguiden.se",
        }}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

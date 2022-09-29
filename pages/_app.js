import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/style.css";
import Layout from "../components/Layout/layout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Layout from "../components/Layout/layout";
import Loading from "../components/LoadingScreen/loading-screen";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Layout>
      <Loading />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

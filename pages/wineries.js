import Head from "next/head";
import Wineries from "../components/WIneries/wineries";

function WineriesPage() {
  return (
    <>
      <Head>
        <title>Wineata - Wineries</title>
        <meta property="og:title" content="Wineata - Wineries" key="title" />
      </Head>
      <Wineries />
    </>
  );
}

export default WineriesPage;

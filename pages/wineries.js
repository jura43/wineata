import Head from "next/head";
import Wineries from "../components/WIneries/wineries";

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.jsonbin.io/v3/b/637536cc2b3499323b01bff4"
  );
  const data = await res.json();
  return {
    props: { wineries: data },
  };
}

function WineriesPage({ wineries }) {
  return (
    <>
      <Head>
        <title>Wineata - Wineries</title>
        <meta property="og:title" content="Wineata - Wineries" key="title" />
      </Head>
      <Wineries wineries={wineries.record} />
    </>
  );
}

export default WineriesPage;

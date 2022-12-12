import Head from "next/head";
import Wineries from "../components/Wineries/wineries";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.jsonbin.io/v3/b/637536cc2b3499323b01bff4"
  );
  const res1 = await fetch(
    "https://api.jsonbin.io/v3/b/63948d0c6a51bc4f704c0044"
  );
  const data = await res.json();
  const counties = await res1.json();
  return {
    props: { wineries: data, counties: counties },
  };
}

function WineriesPage({ wineries, counties }) {
  const router = useRouter();

  let selectedCounties = wineries.record.wineries;

  if (!!router.query.county) {
    selectedCounties = wineries.record.wineries.filter(
      (winery) => winery.county == router.query.county
    );
  }

  return (
    <>
      <Head>
        <title>Wineata - Wineries</title>
        <meta property="og:title" content="Wineata - Wineries" key="title" />
      </Head>
      <Wineries
        wineries={selectedCounties}
        counties={counties.record.counties}
      />
    </>
  );
}

export default WineriesPage;

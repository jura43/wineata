import Head from "next/head";
import Shop from "../../components/Shop/shop";

function ShopPage() {
  return (
    <>
      <Head>
        <title>Wineata - Shop</title>
        <meta property="og:title" content="Wineata - Shop" key="title" />
      </Head>
      <Shop />
    </>
  );
}

export default ShopPage;

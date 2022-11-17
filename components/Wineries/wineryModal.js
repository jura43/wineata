import Image from "next/future/image";
import style from "./wineryModal.module.css";
import Head from "next/head";

// Shows winery informations in modal

function WineryModal(props) {
  if (!props.winery) return <div>Loading...</div>;
  return (
    <>
      <Head>
        <title>Wineata - {props.winery.title}</title>
        <meta property="og:title" content={props.winery.title} key="title" />
      </Head>
      <div className={style.modal}>
        <h1 className={style.title}>{props.winery.title}</h1>
        <h4>About Us</h4>
        <p className={style.about}>{props.winery.about}</p>
        <h4>Rating: {props.winery.rating}/5</h4>
        <h4>Distance from you: {props.winery.distance} km</h4>
        <Image
          src={props.winery.images[0]}
          alt={props.winery.name}
          width={350}
          height={230}
          layout="intrinsic"
          className={style.image}
        />
        <Image
          src={props.winery.images[1]}
          alt={props.winery.name}
          width={350}
          height={230}
          layout="intrinsic"
          className={style.image}
        />
      </div>
    </>
  );
}

export default WineryModal;
import Image from "next/image";
import style from "./background-image.module.css";

function BackgroundImage(props) {
  return (
    <>
      <div className={style.overlay}></div>
      <div className={style.bgWrap}>
        <Image
          src={props.src}
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
    </>
  );
}

export default BackgroundImage;

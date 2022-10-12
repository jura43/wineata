import Image from "next/future/image";
import { motion } from "framer-motion";
import style from "./item.module.scss";
import Link from "next/link";

const buttonVariant = {
  hover: {
    color: "#FFF6BF",
  },
};

function Item(props) {
  return (
    <div className={props.type === "White wine" ? style.bgWhite : style.bgRed}>
      <div className={style.image}>
        <Image
          src={props.src}
          alt="shop_item_image"
          width={200}
          height={200}
          objectFit="contain"
        />
      </div>
      <Link href={`/shop/?item=${props.name}`}>
        <a>
          <h2 className={style.name}>{props.name}</h2>
        </a>
      </Link>
      <div>
        <p className={style.price}>Price:</p>
        <div>
          <h3 className={style.priceValue}>{props.price.toFixed(2)} €</h3>
          <motion.button
            className={style.button}
            variants={buttonVariant}
            whileHover="hover"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Item;

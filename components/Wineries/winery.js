import { motion } from "framer-motion";
import Link from "next/link";
import style from "./winery.module.scss";

const buttonVariant = {
  hover: {
    color: "#4a2a2a",
    backgroundColor: "#c4c4c4",
  },
};

// Winery card in wineries page

function Winery(props) {
  return (
    <div className={style.winerie}>
      <h2>{props.title}</h2>

      <h5>{props.rating}/5</h5>
      <h5>{props.distance} km</h5>
      <div className={style.buttonHolder}>
        <Link href={`/wineries/?winery=${props.name}`}>
          <motion.button
            className={style.button}
            variants={buttonVariant}
            whileHover="hover"
          >
            More info
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default Winery;

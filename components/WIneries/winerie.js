import { motion } from "framer-motion";
import style from "./winerie.module.scss";

const buttonVariant = {
  hover: {
    color: "#4a2a2a",
    backgroundColor: "#c4c4c4",
  },
};

function Wineries(props) {
  return (
    <div className={style.winerie}>
      <h2>{props.title}</h2>
      <h5>{props.rating}/5</h5>
      <h5>{props.distance} km</h5>
      <div className={style.buttonHolder}>
        <motion.button
          className={style.button}
          variants={buttonVariant}
          whileHover="hover"
        >
          More info
        </motion.button>
      </div>
    </div>
  );
}

export default Wineries;

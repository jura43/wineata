import Atlas from "../../public/wineata1.svg";
import Info from "./info";
import style from "./wine-atlas.module.css";
import { useState } from "react";
import { motion, AnimatePresence, useWillChange } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";

const atlasVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", delay: 1 },
  },
  maximize: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween" },
  },
  minimized: {
    opacity: 0.4,
    scale: 0.7,
    transition: { type: "tween" },
  },
};

const infoVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const overlayVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 0.7,
  },
};

function WineAtlas(props) {
  const willChange = useWillChange();
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);
  const [regionSlug, setRegionSlug] = useState();
  const [regionInfo, setRegionInfo] = useState();

  function openRegion(event) {
    console.log("open");
    const region = event.target.id
      .replace("wineata1_svg__", "")
      .replace("_x5F", "");
    setRegionSlug("../../SVG/".concat(region, ".svg"));
    setRegionInfo(props.regions.regions.find((r) => r.name === region));
    setOverlayIsOpen(true);
  }

  function closeRegion() {
    setOverlayIsOpen(false);
    console.log("close");
  }

  return (
    <Container fluid className={style.background}>
      <Row>
        <Col id={style.wineata} xs={12} sm={12} md={12} lg={7}>
          <motion.div
            layout
            variants={atlasVariant}
            initial="hidden"
            animate={overlayIsOpen ? "minimized" : "maximize"}
            style={{ willChange }}
            id={style.atlasWrap}
            className={style.overlay}
          >
            <Atlas onClick={openRegion} id={style.atlas} />
          </motion.div>
          <AnimatePresence>
            {overlayIsOpen && (
              <motion.div
                layout
                onClick={closeRegion}
                id={style.overlay}
                className={style.overlay}
                variants={overlayVariant}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
              >
                <img alt="region" src={regionSlug} id={style.region} />
              </motion.div>
            )}
          </AnimatePresence>
        </Col>
        {overlayIsOpen && (
          <AnimatePresence>
            <motion.div
              layout
              className="col"
              variants={infoVariant}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              {regionInfo ? (
                <Info region={regionInfo} />
              ) : (
                <h1>No information found</h1>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </Row>
    </Container>
  );
}

export default WineAtlas;

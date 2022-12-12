import { Container, Row, Col } from "react-bootstrap";
import Modal from "react-modal";
import { useRouter } from "next/router";
import Winery from "./winery";

import Filter from "./filter";
import style from "./wineries.module.scss";
import WineryModal from "./wineryModal";

Modal.setAppElement("#__next");

function Wineries(props) {
  const router = useRouter();

  return (
    <Container fluid className={style.background}>
      <Row>
        <Col sm={12} md={12} lg={2} xl={2} id={style.filter}>
          <Filter counties={props.counties} />
        </Col>
        <Col sm={12} md={9} lg={10} xl={10} id={style.wineries}>
          {props.wineries.map((winery) => (
            <Winery
              title={winery.title}
              distance={winery.distance}
              rating={winery.rating}
              key={winery.title}
              name={winery.name}
              slug={router.asPath}
              filters={!!Object.keys(router.query).length}
            />
          ))}
        </Col>
        <Modal
          isOpen={!!router.query.winery}
          onRequestClose={() => router.back()}
          className={style.modal}
          overlayClassName={style.overlay}
        >
          <WineryModal
            winery={props.wineries.find(
              (winery) => winery.name === router.query.winery
            )}
          />
        </Modal>
      </Row>
    </Container>
  );
}

export default Wineries;

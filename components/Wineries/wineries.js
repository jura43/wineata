import { Container, Row, Col, Modal } from "react-bootstrap";
import { useRouter } from "next/router";
import Winerie from "./winery";
import Filter from "./filter";
import style from "./wineries.module.scss";

function Wineries(props) {
  const router = useRouter();
  return (
    <Container fluid className={style.background}>
      <Row>
        <Col sm={12} md={3} lg={2} xl={2} id={style.filter}>
          <Filter />
        </Col>
        <Col sm={12} md={9} lg={10} xl={10} id={style.wineries}>
          {props.wineries.wineries.map((winery) => (
            <Winerie
              title={winery.title}
              distance={winery.distance}
              rating={winery.rating}
              key={winery.title}
            />
          ))}
        </Col>
        <Modal
          show={!!router.query.winery}
          onHide={() => router.push("/wineries")}
          dialogClassName="modal-90w"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!
            </p>
          </Modal.Body>
        </Modal>
      </Row>
    </Container>
  );
}

export default Wineries;

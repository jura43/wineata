import { Container, Row, Col } from "react-bootstrap";
import Winerie from "./winerie";
import Filter from "./filter";
import style from "./wineries.module.scss";

function Wineries() {
  return (
    <Container fluid className={style.background}>
      <Row>
        <Col sm={12} md={3} lg={2} xl={2} id={style.filter}>
          <Filter />
        </Col>
        <Col sm={12} md={9} lg={10} xl={10} id={style.wineries}>
          <Winerie title="Winerie Mirić" distance="23km" rating="4.5" />
          <Winerie title="Winerie Horvat" distance="8km" rating="3" />
          <Winerie title="Winerie Kalić" distance="59km" rating="5" />
        </Col>
      </Row>
    </Container>
  );
}

export default Wineries;

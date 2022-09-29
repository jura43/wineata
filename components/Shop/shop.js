import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import Modal from "react-modal";
import Item from "./item";
import ItemModal from "./itemModal";
import Filter from "./filter";
import style from "./shop.module.scss";
import data from "../../utils/data";

Modal.setAppElement("#__next");

function Shop() {
  const router = useRouter();

  return (
    <Container fluid className={style.background}>
      <Row>
        <Col lg={2} id={style.filter}>
          <Filter />
        </Col>
        <Col lg={10} id={style.items}>
          {data.products.map((product, index) => (
            <Item
              key={index}
              name={product.name}
              price={product.price}
              src={product.image}
              type={product.type}
            />
          ))}
          <Modal
            isOpen={!!router.query.item}
            onRequestClose={() => router.push("/shop")}
            className={style.modal}
            overlayClassName={style.overlay}
          >
            <ItemModal name={router.query.item} />
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;

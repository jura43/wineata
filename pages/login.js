import Head from "next/head";
import LoginFrom from "../components/Forms/login-from";
import BackgroundImage from "../components/background-image";
import { Container, Row, Col } from "react-bootstrap";

function LoginPage() {
  return (
    <>
      <Head>
        <title>Wineata - Login</title>
        <meta property="og:title" content="Wineata - Login" key="title" />
      </Head>
      <BackgroundImage src="/bg1.jpg" />
      <Container fluid>
        <Row>
          <Col></Col>

          <LoginFrom />
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginPage;

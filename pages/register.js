import Link from "next/link";
import Head from "next/head";
import RegisterForm from "../components/Forms/register-form";
import BackgroundImage from "../components/background-image";
import { Container, Row, Col } from "react-bootstrap";

function RegisterPage() {
  return (
    <>
      <Head>
        <title>Wineata - Register</title>
        <meta property="og:title" content="Wineata - Register" key="title" />
      </Head>
      <BackgroundImage src="/bg2.jpg" />
      <Container fluid>
        <Row>
          <Col></Col>
          <RegisterForm />
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default RegisterPage;

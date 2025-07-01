import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import FindMeOnSocials from "./FindMeOnSocials";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Aliyan Gohar</title>
        <meta
          name="description"
          content="Get in touch with Aliyan Gohar. Use the contact form to reach out about opportunities, collaborations, or questions."
        />
        <link rel="canonical" href="https://aliyannn.vercel.app/#contact" />
      </Helmet>

      <section id="contact" className="pt-40 pb-20">
        <Container>
          <h1 className="heading text-center mb-5">
            <strong className="spanText">Let's</strong> Connect
          </h1>
          <Row className="justify-content-center">
            <Col md={8}>
              <Form action="https://formspree.io/f/your-form-id" method="POST">
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" required />
                </Form.Group>

                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" required />
                </Form.Group>

                <Form.Group controlId="message" className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={5} required />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <FindMeOnSocials />
      </section>
    </>
  );
}

export default Contact;

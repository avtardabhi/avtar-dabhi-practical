import { Container, Row, Col, Form, Button } from "react-bootstrap";

import subscribeImage from "../../assets/images/subscribe.png";

export default function Subscribe() {
  return (
    <section className="subscribe-section p-0">
      <Container fluid className="p-0">
        <Row className="g-0 align-items-stretch">
          <Col lg={7}>
            <div className="subscribe-image-wrapper">
              <img
                src={subscribeImage}
                alt="Subscribe"
                className="subscribe-image"
              />
            </div>
          </Col>

          <Col lg={5}>
            <div className="subscribe-content">
              <div className="subscribe-form-wrapper">
                <h2>Smart insights, in your inbox</h2>

                <p className="subscribe-description">
                  Subscribe to get the latest on projects, technology, and real
                  estate trends.
                </p>

                <Form>
                  <Form.Group className="mb-4">
                    <Form.Label>Email</Form.Label>

                    <Form.Control
                      type="email"
                      placeholder="Type your email address"
                    />
                  </Form.Group>

                  <p className="subscribe-note">
                    By subscribing, you agree to receive our newsletter and you
                    can unsubscribe at any time.
                  </p>

                  <Button variant="danger">Submit</Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

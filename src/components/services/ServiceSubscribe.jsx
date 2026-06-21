import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ServiceSubscribe = () => {
  return (
    <section className="service-subscribe-section">
      <Container>
        <Row className="align-items-center gy-4">
          <Col lg={6}>
            <div className="service-subscribe-content">
              <span className="service-subscribe-label">NEWSLETTER</span>

              <h2 className="service-subscribe-title">
                Smart insights, in your inbox
              </h2>

              <p className="service-subscribe-description">
                Sign up for our newsletter to get the latest on projects,
                technology, and real estate trends.
              </p>
            </div>
          </Col>

          <Col lg={6}>
            <div className="service-subscribe-form-wrapper">
              <Form>
                <div className="service-subscribe-input-group">
                  <Form.Control
                    type="email"
                    placeholder="Type your email address"
                  />

                  <Button variant="danger">
                    SUBSCRIBE <i class="fa-solid fa-chevron-right"></i>
                  </Button>
                </div>

                <p className="service-subscribe-note">
                  By subscribing, you agree to receive our newsletter and can
                  unsubscribe at any time.
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceSubscribe;

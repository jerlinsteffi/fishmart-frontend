import { NextPageWithLayout } from "@/types/page";
import { Layout } from "@/libs/dashboard-layout";
import { PROFILE_PAGE } from "@/contants/meta-data";
import styles from "@/styles/profile.module.css";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const ProfilePage: NextPageWithLayout = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.sectionTitle} p-3`}>
          <h2>My Account</h2>
        </div>

        <Row>
          <Col lg={12} xs={12}>
            <div>
              <Form>
                <Card className={`${styles.cardSection} border-0 shadow-sm`}>
                  <Card.Body>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="first-name" className="mb-3">
                          <Form.Label className={styles.infoLabel}>
                            First Name
                          </Form.Label>
                          <Form.Control
                            className={`${styles.formControl}`}
                            type="text"
                            name="first-name"
                            placeholder="Your First Name"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group controlId="last-name" className="mb-3">
                          <Form.Label className={styles.infoLabel}>
                            Last Name
                          </Form.Label>
                          <Form.Control
                            className={`${styles.formControl}`}
                            type="text"
                            name="last-name"
                            placeholder="Your Last Name"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="email" className="mb-3">
                          <Form.Label className={styles.infoLabel}>
                            Email Address
                          </Form.Label>
                          <Form.Control
                            className={`${styles.formControl}`}
                            type="email"
                            name="email"
                            placeholder="Your Email"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group controlId="phone" className="mb-3">
                          <Form.Label className={styles.infoLabel}>
                            Phone Number
                          </Form.Label>
                          <Form.Control
                            className={`${styles.formControl}`}
                            type="tel"
                            name="phone"
                            placeholder="Your Phone Number"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group controlId="address" className="mb-3">
                      <Form.Label className={styles.infoLabel}>
                        Street Address
                      </Form.Label>
                      <Form.Control
                        className={`${styles.formControl}`}
                        type="text"
                        name="address"
                        placeholder="Street Address"
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="apartment" className="mb-3">
                      <Form.Label className={styles.infoLabel}>
                        Apartment, Suite, etc. (optional)
                      </Form.Label>
                      <Form.Control
                        className={`${styles.formControl}`}
                        type="text"
                        name="apartment"
                        placeholder="Apartment, Suite, Unit, etc."
                      />
                    </Form.Group>

                    <Row>
                      <Col md={4}>
                        <Form.Group controlId="city" className="mb-3">
                          <Form.Label className={styles.infoLabel}>
                            City
                          </Form.Label>
                          <Form.Control
                            className={`${styles.formControl}`}
                            type="text"
                            name="city"
                            placeholder="City"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group controlId="state" className="mb-3">
                          <Form.Label className={styles.infoLabel}>
                            State
                          </Form.Label>
                          <Form.Control
                            className={`${styles.formControl}`}
                            type="text"
                            name="state"
                            placeholder="State"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group controlId="zip" className="mb-3">
                          <Form.Label className={styles.infoLabel}>
                            ZIP Code
                          </Form.Label>
                          <Form.Control
                            className={`${styles.formControl}`}
                            type="text"
                            name="zip"
                            placeholder="ZIP Code"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <div className="mt-3 d-grid gap-2 d-md-flex justify-content-md-end">
                      <Button className={`px-4 ${styles.saveChange}`}>
                        Save Changes
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

ProfilePage.metadata = PROFILE_PAGE;
ProfilePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ProfilePage;

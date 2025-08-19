import { NextPageWithLayout } from "@/types/page";
import { Layout } from "@/libs/dashboard-layout";
import { CHECKOUT_PAGE } from "@/contants/meta-data";
import styles from "../../styles/checkout.module.css";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useState } from "react";
import Image from "next/image";

const CheckoutPage: NextPageWithLayout = () => {
  const [selected, setSelected] = useState("credit-card");

  const orderItems = [
    {
      id: 1,
      name: "Fish Curry Meal",
      quantity: 1,
      price: 299.0,
      image: "/images/demo_3.jpg",
      // image: "/fishmart-frontend/images/demo_3.jpg",
    },
    {
      id: 2,
      name: "Fried Pomfret",
      quantity: 2,
      price: 199.0,
      image: "/images/demo_2.jpg",
      // image: "/fishmart-frontend/images/demo_2.jpg",
    },
  ];

  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.sectionTitle} p-3`}>
          <h2>Checkout</h2>
        </div>
        <Row>
          <Col lg={7} xs={12}>
            <div>
              <Form>
                <Card className={`${styles.cardSection} border-0 shadow-sm`}>
                  <Card.Header className={`${styles.cardHeader}`}>
                    <h3>Customer Information</h3>
                  </Card.Header>
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
                  </Card.Body>
                </Card>

                <Card className={`${styles.cardSection} border-0 shadow-sm`}>
                  <Card.Header className={`${styles.cardHeader}`}>
                    <h3>Payment Method</h3>
                  </Card.Header>
                  <Card.Body>
                    <Row className="g-3">
                      {/* Credit / Debit Card */}
                      <Col xs={12} sm={4} lg={4}>
                        <Card
                          className={`text-center p-3 border-2 rounded-4 ${
                            selected === "credit-card" ? styles.activeCard : ""
                          }`}
                          style={{ cursor: "pointer" }}
                          onClick={() => setSelected("credit-card")}
                        >
                          <div className={`${styles.paymentIcons} mb-2`}>
                            <i className="bi bi-credit-card-2-front"></i>
                          </div>
                          <Card.Text className="fw-semibold">
                            Credit / Debit Card
                          </Card.Text>
                        </Card>
                      </Col>

                      {/* PayPal */}
                      <Col xs={12} sm={4} lg={4}>
                        <Card
                          className={`text-center p-3 border-2 rounded-4 ${
                            selected === "paypal" ? styles.activeCard : ""
                          }`}
                          style={{ cursor: "pointer" }}
                          onClick={() => setSelected("paypal")}
                        >
                          <div className={`${styles.paymentIcons} mb-2`}>
                            <i className="bi bi-paypal"></i>
                          </div>
                          <Card.Text className="fw-semibold">PayPal</Card.Text>
                        </Card>
                      </Col>

                      {/* Apple Pay */}
                      <Col xs={12} sm={4} lg={4}>
                        <Card
                          className={`text-center p-3 border-2 rounded-4 ${
                            selected === "apple-pay" ? styles.activeCard : ""
                          }`}
                          style={{ cursor: "pointer" }}
                          onClick={() => setSelected("apple-pay")}
                        >
                          <div className={`${styles.paymentIcons} mb-2`}>
                            <i className="bi bi-apple"></i>
                          </div>
                          <Card.Text className="fw-semibold">
                            Apple Pay
                          </Card.Text>
                        </Card>
                      </Col>
                    </Row>

                    {/* Payment Details Form */}
                    <div className="mt-4">
                      {selected === "credit-card" && (
                        <>
                          <Form.Group className="mb-3">
                            <Form.Label className={styles.infoLabel}>
                              Card Number
                            </Form.Label>
                            <Form.Control
                              className={`${styles.formControl}`}
                              type="text"
                              placeholder="1234 5678 9012 3456"
                              required
                            />
                          </Form.Group>

                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label className={styles.infoLabel}>
                                  Expiration Date
                                </Form.Label>
                                <Form.Control
                                  className={`${styles.formControl}`}
                                  type="text"
                                  placeholder="MM/YY"
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label className={styles.infoLabel}>
                                  Security Code (CVV)
                                </Form.Label>
                                <Form.Control
                                  className={`${styles.formControl}`}
                                  type="text"
                                  placeholder="123"
                                  required
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className="mb-3">
                            <Form.Label className={styles.infoLabel}>
                              Name on Card
                            </Form.Label>
                            <Form.Control
                              className={`${styles.formControl}`}
                              type="text"
                              placeholder="John Doe"
                              required
                            />
                          </Form.Group>
                        </>
                      )}

                      {selected === "paypal" && (
                        <p>
                          You will be redirected to PayPal to complete your
                          purchase securely.
                        </p>
                      )}

                      {selected === "apple-pay" && (
                        <p>
                          You will be prompted to authorize payment with Apple
                          Pay.
                        </p>
                      )}
                    </div>
                  </Card.Body>
                </Card>

                <Card
                  className={`${styles.cardSection} border-0 shadow-sm d-none d-md-block`}
                >
                  <Card.Header className={`${styles.cardHeader}`}>
                    <h3>Review & Place Order</h3>
                  </Card.Header>
                  <Card.Body>
                    <p>
                      You’re just one step away! Click the button below to
                      confirm your order.
                    </p>

                    <Button
                      variant="primary"
                      className={`w-100 d-flex justify-content-between align-items-center px-4 ${styles.orderButton}`}
                    >
                      <span>Place Order</span>
                      <span className="fw-bold fs-5 text-white">₹777.00</span>
                    </Button>
                  </Card.Body>
                </Card>
              </Form>
            </div>
          </Col>
          <Col lg={5} xs={12}>
            <div className={styles.stickyWrapper}>
              <Card className={`${styles.cardSection} border-0 shadow-sm`}>
                <Card.Header
                  className={`${styles.cardHeader} d-flex justify-content-between align-items-center`}
                >
                  <h3>Order Summary</h3>
                  <span className={styles.itemCount}>2 Items</span>
                </Card.Header>
                <Card.Body>
                  {orderItems.map((item) => (
                    <Row key={item.id} className="mb-3 align-items-center">
                      <Col xs={3}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={150}
                          height={150}
                          className="img-fluid rounded border-2"
                        />
                      </Col>
                      <Col xs={9}>
                        <h6 className="mb-1 fw-semibold">{item.name}</h6>
                        <div className="d-flex justify-content-between mt-1">
                          <span>
                            {item.quantity} × ₹{item.price.toFixed(2)}
                          </span>
                          <span className="fw-bold">
                            ₹{(item.quantity * item.price).toFixed(2)}
                          </span>
                        </div>
                      </Col>
                    </Row>
                  ))}

                  {/* Promo Code */}
                  <InputGroup className="my-4">
                    <Form.Control
                      placeholder="Promo Code"
                      className={`${styles.formControl}`}
                    />
                    <Button
                      variant="primary"
                      className={`${styles.promoButton}`}
                    >
                      Apply
                    </Button>
                  </InputGroup>

                  {/* Totals */}
                  <div className="d-flex justify-content-between mb-1">
                    <span>Item Total</span>
                    <span>₹697.00</span>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <span>Delivery Charge</span>
                    <span>₹50.00</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between fw-bold fs-5">
                    <span>Total</span>
                    <span>₹777.00</span>
                  </div>

                  {/* Secure Checkout */}
                  <div className="mt-3 d-flex align-items-center justify-content-center">
                    <i className="bi bi-shield-lock-fill text-success me-2"></i>
                    <span>Secure Checkout</span>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col>
            {" "}
            <Card
              className={`${styles.cardSection} border-0 shadow-sm d-md-none d-block`}
            >
              <Card.Header className={`${styles.cardHeader}`}>
                <h3>Review & Place Order</h3>
              </Card.Header>
              <Card.Body>
                <p>
                  You’re just one step away! Click the button below to confirm
                  your order.
                </p>

                <Button
                  variant="primary"
                  className={`w-100 d-flex justify-content-between align-items-center px-4 ${styles.orderButton}`}
                >
                  <span>Place Order</span>
                  <span className="fw-bold fs-5 text-white">₹777.00</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

CheckoutPage.metadata = CHECKOUT_PAGE;
CheckoutPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CheckoutPage;

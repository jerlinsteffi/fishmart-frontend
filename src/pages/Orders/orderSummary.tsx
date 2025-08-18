import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Layout } from "@/libs/dashboard-layout";
import { RemoveIcon } from "@/icons/removeIcon";
import styles from "@/styles/cart.module.css";
import { useRouter } from "next/router";

const OrderSummaryPage = () => {
  const { cart, updateQty, removeFromCart , clearCart} = useCart();
  const [shipping, setShipping] = useState("standard");
  const router = useRouter();

  const handleQtyChange = (id: number, value: number) => {
    const qty = Math.max(1, Math.min(10, value));
    updateQty(id, qty);
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + (item.discountPrice || item.price) * item.qty,
    0
  );

  const shippingCharge =
    subtotal > 500
      ? 0
      : shipping === "standard"
      ? 4.99
      : shipping === "express"
      ? 12.99
      : 0;

  const tax = subtotal * 0.1;
  const total = subtotal + shippingCharge + tax;

  return (
    <Container className="py-4">
      <h3 className="mb-4">Cart</h3>
      {cart.length === 0 ? (
        <div className="text-center">
          <h5>Your cart is empty</h5>
          <Link href="/" className="btn btn-success mt-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <Row>
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Header>
                <Row className="fw-bold">
                  <Col md={5}>Product</Col>
                  <Col md={2} className="text-center">Price</Col>
                  <Col md={3} className="text-center">Quantity</Col>
                  <Col md={2} className="text-end">Total</Col>
                </Row>
              </Card.Header>

              {cart.map((item) => (
                <Card.Body key={item.id} className="border-bottom">
                  <Row className="align-items-center">
                    <Col md={5} className="d-flex align-items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`me-3 ${styles.itemImage}`}
                      />
                      <div>
                        <h6 className="mb-1">{item.name}</h6>
                        <small className="text-muted">
                          {item.discountPrice ? `₹${item.discountPrice}` : `₹${item.price}`} x {item.qty}
                        </small>
                        <div>
                          <button
                            className={styles.deleteBtn}
                            onClick={() => removeFromCart(item.id)}
                          >
                            <RemoveIcon />
                            Remove
                          </button>
                        </div>
                      </div>
                    </Col>

                    <Col md={2} className="text-center">
                      {item.discountPrice ? (
                        <>
                          <span className="text-danger fw-bold">
                            ₹{item.discountPrice}
                          </span>
                          <br />
                          <small className="text-muted text-decoration-line-through">
                            ₹{item.price}
                          </small>
                        </>
                      ) : (
                        <span>₹{item.price}</span>
                      )}
                    </Col>

                    <Col md={3} className="text-center">
                      <div className="d-inline-flex align-items-center">
                        <button
                          className={styles.qtyBtn}
                          onClick={() => handleQtyChange(item.id, item.qty - 1)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.qty}
                          min={1}
                          max={10}
                          onChange={(e) =>
                            handleQtyChange(item.id, Number(e.target.value))
                          }
                          className={styles.qtyInput}
                        />
                        <button
                          className={styles.qtyBtn}
                          onClick={() => handleQtyChange(item.id, item.qty + 1)}
                        >
                          +
                        </button>
                      </div>
                    </Col>

                    <Col md={2} className="text-end fw-bold">
                      ₹{((item.discountPrice || item.price) * item.qty).toFixed(2)}
                    </Col>
                  </Row>
                </Card.Body>
              ))}
            </Card>

            <div className="d-flex justify-content-between align-items-center mt-3">
              <Form.Control placeholder="Coupon code" className="w-50 me-2" />
              <Button variant="dark">Apply Coupon</Button>
            </div>
            <div className="mt-3 d-flex gap-2">
              <Button 
               variant="outline-secondary"
               onClick={() => router.push("/")} 
              >
                Update Cart
              </Button>
              <Button 
               variant="outline-danger"
               onClick={clearCart}
              >
                Clear Cart
             </Button>
            </div>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Header>
                <strong>Order Summary</strong>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    label="Standard Delivery - ₹4.99"
                    checked={shipping === "standard"}
                    onChange={() => setShipping("standard")}
                    disabled={subtotal > 500}
                  />
                  <Form.Check
                    type="radio"
                    label="Express Delivery - ₹12.99"
                    checked={shipping === "express"}
                    onChange={() => setShipping("express")}
                    disabled={subtotal > 500}
                  />
                  <Form.Check
                    type="radio"
                    label="Free Shipping (Orders over ₹500)"
                    checked={subtotal > 500 || shipping === "free"}
                    onChange={() => setShipping("free")}
                  />
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span>{shippingCharge === 0 ? "Free" : `₹${shippingCharge.toFixed(2)}`}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Tax (10%)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-3">
                  <strong>Total</strong>
                  <strong>₹{total.toFixed(2)}</strong>
                </div>

                <Button className={`${styles.checkoutBtn} w-100 mb-2`}>
                  Proceed to Checkout
                </Button>
                <Link href="/" className="btn btn-outline-secondary w-100">
                  Continue Shopping
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

OrderSummaryPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default OrderSummaryPage;

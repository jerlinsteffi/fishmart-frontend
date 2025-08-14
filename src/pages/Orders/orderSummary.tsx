// pages/Orders/orderSummary.tsx
import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Layout } from "@/libs/dashboard-layout";

const OrderSummaryPage = () => {
  const { cart, updateQty } = useCart();

  const handleQtyChange = (id: number, value: number) => {
    const qty = Math.max(1, Math.min(10, value));
    updateQty(id, qty);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryCharge = subtotal > 500 ? 0 : 40;
  const total = subtotal + deliveryCharge;

  return (
    <Container className="py-4">
      <h3 className="mb-4">Order Summary</h3>
      {cart.length === 0 ? (
        <div className="text-center">
          <h5>Your cart is empty</h5>
          <Link href="/" className="btn btn-success mt-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <Row>
          {/* Left: Cart Items */}
          <Col md={8}>
            {cart.map((item) => (
              <Card className="mb-3 shadow-sm" key={item.id}>
                <Card.Body className="d-flex align-items-center">
                  <img
                    src={`/images/image_${item.id}.jpg`}
                    alt={item.name}
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    className="me-3 rounded"
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{item.name}</h6>
                    <p className="mb-1 text-muted">₹{item.price} each</p>
                    <div className="d-flex align-items-center quantity-box">
                      <button
                        className="qty-btn"
                        onClick={() => handleQtyChange(item.id, item.qty - 1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.qty}
                        min={1}
                        max={10}
                        onChange={(e) => handleQtyChange(item.id, Number(e.target.value))}
                        className="qty-input"
                      />
                      <button
                        className="qty-btn"
                        onClick={() => handleQtyChange(item.id, item.qty + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-end ms-3">
                    <h6>₹{item.price * item.qty}</h6>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>

          {/* Right: Price Details */}
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Header>
                <strong>Price Details</strong>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Delivery Charges</span>
                  {deliveryCharge === 0 ? (
                    <Badge bg="success">Free</Badge>
                  ) : (
                    <span>₹{deliveryCharge}</span>
                  )}
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <strong>Total</strong>
                  <strong>₹{total}</strong>
                </div>
                <Button
                  style={{ backgroundColor: "#e07844", borderColor: "#e07844" }}
                  className="w-100 mb-2"
                >
                  Checkout
                </Button>
                <Link href="/" className="btn btn-outline-secondary w-100">
                  Continue Shopping
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      <style jsx>{`
        .quantity-box {
          display: inline-flex;
          border: 1px solid #e07844; /* orange border */
          border-radius: 4px;
          overflow: hidden;
          width: 100px;
        }

        .qty-input {
          width: 40px;
          text-align: center;
          border: none;
          outline: none;
        }

        .qty-btn {
          background: none;
          color: #000;
          border: none;
          padding: 4px 8px;
          cursor: pointer;
          font-weight: bold;
          
        }

        .qty-btn:hover {
          color: #e07844;
        }
        
      `}</style>
    </Container>
  );
};

OrderSummaryPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default OrderSummaryPage;

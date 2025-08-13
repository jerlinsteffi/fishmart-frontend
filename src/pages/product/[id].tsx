import { Layout } from "@/libs/dashboard-layout";
import { Container, Row, Col, Button, Image, Badge } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "@/types/page";
import { PRODUCT_DETAIL_PAGE } from "@/contants/meta-data";
import styles from "../../styles/home.module.css";

const ProductDetailPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  const productId = Number(id) || 1;

  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const product = {
    id: productId,
    name: "Rohu Medium 800 - 1100 Gms (Cleaned & Cut)",
    image:
      "https://freshma-web-bucket.s3.ap-south-1.amazonaws.com/freshma/media/products/image/50ead38e-7346-4eff-87cd-1d8a80fbd896.jpg",
    netWeight: "600-840 gms",
    price: 299,
    discountedPrice: 239,
    offer: 20,
    inStock: true,
    description:
      "Delicious homemade fish curry with authentic spices and fresh ingredients.",
  };

  const quantity = quantities[productId] || 0;

  const increment = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrement = (id: number) => {
    setQuantities((prev) => {
      const currentQty = prev[id] || 0;
      if (currentQty <= 1) {
        const copy = { ...prev };
        delete copy[id]; // remove from state if zero or less
        return copy;
      }
      return { ...prev, [id]: currentQty - 1 };
    });
  };

  const handleInputChange = (id: number, value: string) => {
    const numberValue = Math.max(1, Math.min(10, Number(value)));
    setQuantities((prev) => ({
      ...prev,
      [id]: numberValue,
    }));
  };

  return (
    <Container className="py-4">
      <div className="bg-white p-4 rounded shadow-sm">
        <Row>
          {/* Left side - Product Image */}
          <Col md={6}>
            <div className="mb-3 position-relative">
              <Image src={product.image} fluid />
              <Badge
                bg="success"
                className={`position-absolute ${styles.offerBadge}`}
              >
                {product.offer}% OFF
              </Badge>
            </div>
          </Col>

          {/* Right side - Product Info */}

          <Col md={6}>
            <h5 className="mb-3">{product.name}</h5>

            <Badge bg="light" text="dark" className="mb-3">
              {product.inStock ? "In Stock" : "Out of Stock"}
            </Badge>

            <div className="mb-2 d-flex align-items-baseline">
              <span className={`fs-6 ${styles.oldPrice}`}>
                ₹{product.price.toFixed(2)}
              </span>
              <span className={`text-danger fs-4 ${styles.price}`}>
                ₹{product.discountedPrice.toFixed(2)}
              </span>
            </div>

            <div className="mb-2 text-muted">
              Net Weight: {product.netWeight}
            </div>

            <div className="mb-3">
              <h6>Health Benefits of Rohu</h6>
              <ul>
                <li>Rich in Vitamin D, helps nutrient absorption</li>
                <li>Supports mental health and prevents depression</li>
                <li>Contains Omega-3 fatty acids and DHA</li>
              </ul>
            </div>

            {product.inStock ? (
              quantity === 0 ? (
                <Button
                  variant="success"
                  size="sm"
                  className="d-flex align-items-center"
                  onClick={() => increment(product.id)}
                >
                  {/* SVG icon */}
                  Add to Cart
                </Button>
              ) : (
                <div className="text-center">
                  <div className={styles.quantitySelector}>
                    <button
                      className={styles.quantityBtn}
                      onClick={() => decrement(product.id)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className={styles.quantityInput}
                      value={quantity}
                      min={1}
                      max={10}
                      onChange={(e) =>
                        handleInputChange(product.id, e.target.value)
                      }
                    />
                    <button
                      className={styles.quantityBtn}
                      onClick={() => increment(product.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              )
            ) : (
              <Button variant="light" size="sm" disabled>
                Out Of Stock
              </Button>
            )}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

ProductDetailPage.metadata = PRODUCT_DETAIL_PAGE;
ProductDetailPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ProductDetailPage;

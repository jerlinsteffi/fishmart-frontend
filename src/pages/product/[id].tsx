import { Layout } from "@/libs/dashboard-layout";
import { Container, Row, Col, Button, Image, Figure } from "react-bootstrap";
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
    name: "Mangur Fish Curry",
    image: "/images/demo_3.jpg",
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
        delete copy[id];
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
    <section className={`${styles.section}`}>
      <Container>
        <Row>
          {/* Product Image */}
          <Col md={6}>
            <Figure className={`m-0 rounded-4 ${styles.dishDetailsPhoto}`}>
              <Image
                src={product.image}
                alt="Dish Item"
                fluid
                className={`${styles.dishDetailsImage}`}
              />
              {/* Offer Badge */}
              {product.offer && (
                <div className={`${styles.dishDetailsBadge} position-absolute`}>
                  <span
                    className={`${styles.dishDetailsPill} text-white bg-success rounded-pill`}
                  >
                    {product.offer}% OFF
                  </span>
                </div>
              )}
            </Figure>
          </Col>

          {/* Product Info */}
          <Col md={6}>
            <h3 className="fw-bold">{product.name}</h3>

            {/* Price Display */}
            <div className="mb-2 d-flex align-items-baseline">
              <span className={`fs-6 ${styles.oldPrice}`}>
                ₹{product.price.toFixed(2)}
              </span>
              <span className={`fs-4 ${styles.price}`}>
                ₹{product.discountedPrice.toFixed(2)}
              </span>
            </div>

            {/* Add to Cart / Quantity Selector */}
            {product.inStock ? (
              quantity === 0 ? (
                <Button
                  variant="primary"
                  className={`${styles.addButton} d-flex align-items-center px-4 my-4`}
                  onClick={() => increment(product.id)}
                >
                  ADD <i className="bi bi-plus"></i>
                </Button>
              ) : (
                <div className="text-center my-4" style={{ width: "94px"}}>
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

            {/* Details Section */}
            <div className="mb-3">
              <h6 className="fw-bold text-uppercase">
                DETAILS ABOUT THIS MEAL
              </h6>
              <p>
                Experience the authentic flavors of India with our Mangur Fish
                Curry. Made with fresh catfish and simmered in a blend of
                aromatic spices, this curry delivers a perfect balance of tangy,
                spicy, and savory notes. Infused with the subtle richness of
                mustard oil and a hint of tamarind, every bite bursts with
                traditional South Indian flavors. Ideal to pair with steamed
                rice or your favorite bread, this dish promises a delightful
                seafood.
              </p>
            </div>

            {/* Ingredients Section */}
            <div className="mb-3">
              <h6 className="fw-bold text-uppercase">INGREDIENTS</h6>
              <p>
                Mangur (catfish), onion, garlic, tomatoes, turmeric, red chili
                powder, tamarind.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

ProductDetailPage.metadata = PRODUCT_DETAIL_PAGE;
ProductDetailPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ProductDetailPage;

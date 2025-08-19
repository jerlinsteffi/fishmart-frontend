import { HOME_META_DATA } from "@/contants/meta-data";
import { Layout } from "@/libs/dashboard-layout";
import { NextPageWithLayout } from "@/types/page";
import React, { useState } from "react";
import Link from "next/link";
import {
  Badge,
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import styles from "../styles/home.module.css";
import { useCart } from "@/context/CartContext";
// import image3 from "../../public/images"

const products = [
  {
    id: 1,
    name: "Fish Fry",
    // image: "/images/demo_1.jpg",
    image: "/fishmart-frontend/images/demo_1.jpg",
    netWeight: "340-390 gms",
    price: 320,
    discountedPrice: 299,
    offer: 0,
    inStock: true,
  },
  {
    id: 2,
    name: "Fish Curry",
    // image: "/images/demo_2.jpg",
    image: "../../public/images/demo_2.jpg",
    netWeight: "340-390 gms",
    price: 299,
    discountedPrice: 280,
    offer: 15,
    inStock: true,
  },
  {
    id: 3,
    name: "Mangur fish curry",
    // image: "images/demo_3.jpg",
    image: "../../public/images/demo_3.jpg",
    netWeight: "340-390 gms",
    price: 299,
    discountedPrice: 249,
    offer: 0,
    inStock: true,
  },
  {
    id: 4,
    name: "Chettinad Fish Curry",
    image: "/images/demo_4.avif",
    netWeight: "480-500 gms",
    price: 600,
    discountedPrice: 579,
    offer: 20,
    inStock: true,
  },
  {
    id: 5,
    name: "Kerala Meen Moilee",
    image: "/images/demo_3.jpg",
    netWeight: "290-350 gms",
    price: 349,
    discountedPrice: 329,
    offer: 15,
    inStock: true,
  },
  {
    id: 6,
    name: "Fish Masala Curry",
    image: "images/demo_4.avif",
    netWeight: "340 gms",
    price: 299,
    discountedPrice: 289,
    offer: 0,
    inStock: true,
  },
  {
    id: 7,
    name: "Fish Curry",
    image: "/images/demo_3.jpg",
    netWeight: "450-550 gms",
    price: 310,
    discountedPrice: 280,
    offer: 10,
    inStock: true,
  },
  {
    id: 8,
    name: "Fish Curry",
    image: "/images/demo_2.jpg",
    netWeight: "650-750 gms",
    price: 299,
    discountedPrice: 259,
    offer: 15,
    inStock: false,
  },
  {
    id: 9,
    name: "Masala Fish Curry",
    image: "images/demo_1.jpg",
    netWeight: "750-850 gms",
    price: 299,
    discountedPrice: 239,
    offer: 0,
    inStock: true,
  },
];

const Home: NextPageWithLayout = () => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const { addToCart, updateQty } = useCart();

  const increment = (product: (typeof products)[0]) => {
    setQuantities((prev) => {
      const newQty = (prev[product.id] || 1) + 1;
      updateQty(product.id, newQty);
      return { ...prev, [product.id]: newQty };
    });
  };

  const decrement = (product: (typeof products)[0]) => {
    setQuantities((prev) => {
      const currentQty = prev[product.id] || 1;
      if (currentQty <= 1) {
        // Remove from cart if quantity goes to 0
        updateQty(product.id, 0);
        const copy = { ...prev };
        delete copy[product.id];
        return copy;
      }
      updateQty(product.id, currentQty - 1);
      return { ...prev, [product.id]: currentQty - 1 };
    });
  };

  const handleInputChange = (product: (typeof products)[0], value: string) => {
    const numberValue = Math.max(1, Math.min(10, Number(value)));
    setQuantities((prev) => ({ ...prev, [product.id]: numberValue }));
    updateQty(product.id, numberValue);
  };

  const handleAddToCart = (product: (typeof products)[0]) => {
    const qty = 1;
    setQuantities((prev) => ({ ...prev, [product.id]: qty }));
    addToCart(
      {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
      },
      qty
    );
  };

  return (
    <>
      <Container fluid className="p-0">
        <section className={styles.hero}>
          <Carousel fade interval={5000}>
            {/* Slide 1 */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/demo.jpg"
                alt="Banner 1"
              />
              <Carousel.Caption className="text-center d-flex flex-column justify-content-center align-items-center h-100 px-3">
                <h1 className="text-white fw-bold display-5 d-none d-md-block">
                  Welcome to SeaDelights!
                </h1>
                <h2 className="text-white fw-bold h4 d-block d-md-none">
                  Welcome to SeaDelights!
                </h2>
                <p className="text-light d-none d-md-block lead">
                  Authentic cooked seafood dishes delivered fresh to your
                  doorstep.
                </p>
                <p className="text-light d-block d-md-none small">
                  Authentic cooked seafood dishes delivered fresh.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/demo.jpg"
                alt="Banner 2"
              />
              <Carousel.Caption className="text-center d-flex flex-column justify-content-center align-items-center h-100 px-3">
                <h1 className="text-white fw-bold display-5 d-none d-md-block">
                  Delicious Fish Curry
                </h1>
                <h2 className="text-white fw-bold h4 d-block d-md-none">
                  Delicious Fish Curry
                </h2>
                <p className="text-light d-none d-md-block lead">
                  Authentic flavors straight from the Goan coast, cooked to
                  perfection.
                </p>
                <p className="text-light d-block d-md-none small">
                  Goan coastal flavors, cooked to perfection.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </Container>

      <Container>
        {/* Products Grid */}
        <section className="pt-4">
          <Row>
            {products.map((product) => {
              const quantity = quantities[product.id] || 0;
              return (
                <Col key={product.id} xs={12} lg={4} md={6} className="mb-4">
                  <Card
                    className={`h-100 shadow-sm border-0 ${styles.customCard}`}
                  >
                    <div className={styles.imageWrapper}>
                      <Link href={`/product/${product.id}`}>
                        <Card.Img
                          variant="top"
                          src={product.image}
                          alt={product.name}
                          className={`w-100 ${styles.image}`}
                        />
                      </Link>
                      {product.offer > 0 && (
                        <Badge
                          bg="success"
                          className={`position-absolute ${styles.offerBadge}`}
                        >
                          {product.offer}% OFF
                        </Badge>
                      )}

                      {!product.inStock && (
                        <div className={styles.outOfStockOverlay}>
                          Out of Stock
                        </div>
                      )}
                    </div>

                    <Card.Body>
                      {product.inStock ? (
                        <Card.Title>
                          <Link
                            href={`/product/${product.id}`}
                            className={`${styles.menuTitle} text-decoration-none`}
                          >
                            <h4>{product.name}</h4>
                          </Link>
                        </Card.Title>
                      ) : (
                        <Card.Title>
                          <span className={`${styles.menuTitle}`}>
                            <h4>{product.name}</h4>
                          </span>
                        </Card.Title>
                      )}

                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          {product.discountedPrice &&
                          product.discountedPrice < product.price ? (
                            <>
                              <span className={styles.oldPrice}>
                                ₹{product.price}
                              </span>
                              <span className={`${styles.price}`}>
                                ₹{product.discountedPrice}
                              </span>
                            </>
                          ) : (
                            <span className={`${styles.price}`}>
                              ₹{product.price}
                            </span>
                          )}
                        </div>

                        {product.inStock &&
                          (quantity === 0 ? (
                            <Button
                              variant="success"
                              size="sm"
                              onClick={() => handleAddToCart(product)}
                              className={`${styles.cartButton}`}
                            >
                              ADD <i className="bi bi-plus"></i>
                            </Button>
                          ) : (
                            <div className="text-center">
                              <div className={styles.quantitySelector}>
                                <button
                                  className={styles.quantityBtn}
                                  onClick={() => decrement(product)}
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
                                    handleInputChange(product, e.target.value)
                                  }
                                />
                                <button
                                  className={styles.quantityBtn}
                                  onClick={() => increment(product)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </section>
      </Container>
    </>
  );
};

Home.metadata = HOME_META_DATA;
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;

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

const products = [
  {
    id: 1,
    name: "Sankara / Pink Perch",
    image: "/images/image_1.jpg",
    netWeight: "340-390 gms",
    price: 320,
    discountedPrice: 299,
    offer: 0,
    inStock: true,
  },
  {
    id: 2,
    name: "Kendal Fish",
    image: "/images/image_2.jpg",
    netWeight: "340-390 gms",
    price: 299,
    discountedPrice: 280,
    offer: 15,
    inStock: false,
  },
  {
    id: 3,
    name: "Murrel /Oosi kola",
    image: "images/image_3.jpg",
    netWeight: "340-390 gms",
    price: 299,
    discountedPrice: 249,
    offer: 0,
    inStock: true,
  },
  {
    id: 4,
    name: "Seer Fish / Vanjaram / Nei Meen",
    image: "/images/image_4.jpg",
    netWeight: "480-500 gms",
    price: 600,
    discountedPrice: 579,
    offer: 20,
    inStock: true,
  },
  {
    id: 5,
    name: "Emperor / Vilaimeen",
    image: "/images/image_5.jpg",
    netWeight: "290-350 gms",
    price: 349,
    discountedPrice: 329,
    offer: 15,
    inStock: false,
  },
  {
    id: 6,
    name: "Anchovy / Nethili / Netholi",
    image: "images/image_6.jpg",
    netWeight: "340 gms",
    price: 299,
    discountedPrice: 289,
    offer: 0,
    inStock: true,
  },
  {
    id: 7,
    name: "Rohu Fish",
    image: "/images/image_7.jpg",
    netWeight: "450-550 gms",
    price: 310,
    discountedPrice: 279,
    offer: 10,
    inStock: true,
  },
  {
    id: 8,
    name: "Catla Large ( Cleaned & Cut )",
    image: "/images/image_8.jpg",
    netWeight: "650-750 gms",
    price: 299,
    discountedPrice: 259,
    offer: 15,
    inStock: false,
  },
  {
    id: 9,
    name: "River Pomfret ( Cleaned & Cut )",
    image: "images/image_9.jpg",
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

  const increment = (product: typeof products[0]) => {
    setQuantities((prev) => {
      const newQty = (prev[product.id] || 1) + 1;
      updateQty(product.id, newQty);
      return { ...prev, [product.id]: newQty };
    });
  };

  const decrement = (product: typeof products[0]) => {
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

  const handleInputChange = (product: typeof products[0], value: string) => {
    const numberValue = Math.max(1, Math.min(10, Number(value)));
    setQuantities((prev) => ({ ...prev, [product.id]: numberValue }));
    updateQty(product.id, numberValue);
  };

  const handleAddToCart = (product: typeof products[0]) => {
    const qty = 1;
    setQuantities((prev) => ({ ...prev, [product.id]: qty }));
    addToCart({ id: product.id, name: product.name, price: product.discountedPrice || product.price }, qty);
  };

  return (
    <Container>
      {/* Banner */}
      <section className={`pt-4 ${styles.hero}`}>
        <Carousel fade interval={5000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://freshma-web-bucket.s3.ap-south-1.amazonaws.com/freshma/media/banners/web/85b4db20-b3f1-45d9-aea7-e1a24df2c388.jpg"
              alt="Banner 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://freshma-web-bucket.s3.ap-south-1.amazonaws.com/freshma/media/banners/web/17282acb-d274-4090-b517-700280f2cf3b.jpg"
              alt="Banner 2"
            />
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Products Grid */}
      <section className="pt-4">
        <Row>
          {products.map((product) => {
            const quantity = quantities[product.id] || 0;
            return (
              <Col key={product.id} xs={12} md={4} className="mb-4">
                <Card className={`h-100 shadow-sm border-0 bg-white ${styles.customCard}`}>
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
                      <Badge bg="success" className={`position-absolute ${styles.offerBadge}`}>
                        {product.offer}% OFF
                      </Badge>
                    )}
                  </div>

                  <Card.Body>
                    <Card.Title>
                      <Link
                        href={`/product/${product.id}`}
                        className="text-success text-decoration-none"
                      >
                        <h6>{product.name}</h6>
                      </Link>
                    </Card.Title>

                    <p>
                      <Badge className={styles.netBadge}>Net Weight: {product.netWeight}</Badge>
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        {product.discountedPrice && product.discountedPrice < product.price ? (
                          <>
                            <span className={styles.oldPrice}>₹{product.price}</span>
                            <span className={`${styles.price} text-danger`}>₹{product.discountedPrice}</span>
                          </>
                        ) : (
                          <span className={`${styles.price} text-danger`}>₹{product.price}</span>
                        )}
                      </div>

                      {product.inStock ? (
                        quantity === 0 ? (
                          <Button variant="success" size="sm" onClick={() => handleAddToCart(product)}>
                            Add to Cart
                          </Button>
                        ) : (
                          <div className="text-center">
                            <div className={styles.quantitySelector}>
                              <button className={styles.quantityBtn} onClick={() => decrement(product)}>
                                -
                              </button>
                              <input
                                type="number"
                                className={styles.quantityInput}
                                value={quantity}
                                min={1}
                                max={10}
                                onChange={(e) => handleInputChange(product, e.target.value)}
                              />
                              <button className={styles.quantityBtn} onClick={() => increment(product)}>
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
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </section>
    </Container>
  );
};

Home.metadata = HOME_META_DATA;
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;

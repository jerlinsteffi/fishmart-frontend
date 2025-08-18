import { Layout } from "@/libs/dashboard-layout";
import { Container, Row, Col, Button, Image, Figure } from "react-bootstrap";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "@/types/page";
import { PRODUCT_DETAIL_PAGE } from "@/contants/meta-data";
import styles from "../../styles/home.module.css";
import { useCart } from "@/context/CartContext";

const ProductDetailPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const { cart, addToCart, updateQty } = useCart();
  const productId = Number(id) || 1;

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

  // Get current quantity from the cart
  const cartItem = cart.find((i) => i.id === productId);
  const quantity = cartItem ? cartItem.qty : 0;

  // Increment quantity
  const increment = () => {
    if (quantity === 0) {
      addToCart(
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        },
        1
      );
    } else {
      updateQty(product.id, quantity + 1);
    }
  };

  // Decrement quantity
  const decrement = () => {
    if (quantity > 1) {
      updateQty(product.id, quantity - 1);
    } else if (quantity === 1) {
      updateQty(product.id, 0); // remove from cart
    }
  };

  // Handle manual input
  const handleInputChange = (value: string) => {
    const numberValue = Math.max(1, Math.min(10, Number(value)));
    updateQty(product.id, numberValue);
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

            {/* Price */}
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
                  onClick={increment}
                >
                  ADD <i className="bi bi-plus"></i>
                </Button>
              ) : (
                <div className="text-center my-4" style={{ width: "94px" }}>
                  <div className={styles.quantitySelector}>
                    <button className={styles.quantityBtn} onClick={decrement}>
                      -
                    </button>
                    <input
                      type="number"
                      className={styles.quantityInput}
                      value={quantity}
                      min={1}
                      max={10}
                      onChange={(e) => handleInputChange(e.target.value)}
                    />
                    <button className={styles.quantityBtn} onClick={increment}>
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
              <h6 className="fw-bold text-uppercase">DETAILS ABOUT THIS MEAL</h6>
              <p>
                Experience the authentic flavors of India with our Mangur Fish Curry. Made
                with fresh catfish and simmered in a blend of aromatic spices, this curry
                delivers a perfect balance of tangy, spicy, and savory notes. Infused with
                the subtle richness of mustard oil and a hint of tamarind, every bite
                bursts with traditional South Indian flavors. Ideal to pair with steamed
                rice or your favorite bread, this dish promises a delightful seafood.
              </p>
            </div>

            {/* Ingredients Section */}
            <div className="mb-3">
              <h6 className="fw-bold text-uppercase">INGREDIENTS</h6>
              <p>Mangur (catfish), onion, garlic, tomatoes, turmeric, red chili powder, tamarind.</p>
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

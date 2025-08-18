import React, { useState } from "react";
import { LocationIcon } from "@/icons/LocationIcon";
import { ProfileIcon } from "@/icons/ProfileIcon";
import { CartIcon } from "@/icons/CartIcon";
import styles from "@/styles/header.module.css";
import { Squash as Hamburger } from "hamburger-react";
import OffCanvasMenu from "./offCanvasMenu";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/router";
import OffCanvasLogin from "./offCanvasLogin";
import { Container } from "react-bootstrap";

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { cart } = useCart();
  const router = useRouter();

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handleCartClick = () => {
    router.push("/Orders/orderSummary");
  };

  return (
    <header className={`${styles.headerSection} dark-background sticky-top`}>
      <div className={styles.mainHeader}>
        <Container>
          <div className={`${styles.headerWrapper} py-3`}>
            <div className={styles.logoSection}>
              <a href="/" className={styles.logo}>
                <h1>
                  <span className={styles.headingColor}>FISH</span> MART
                </h1>
              </a>

              <div className={`${styles.location} d-none d-md-block`}>
                <LocationIcon />
                <span className={`${styles.locationText}`}>
                  Select Location
                </span>
              </div>
            </div>

            <div className={`${styles.headerActions}`}>
              <button
                className={styles.headerActionBtn}
                onClick={() => setLoginOpen(true)}
              >
                <ProfileIcon />
              </button>

              <a onClick={handleCartClick} className={styles.headerActionBtn}>
                {totalItems > 0 ? (
                  <div className={styles.cartBadge}>
                    <CartIcon />
                    <div className={styles.cartBadgeText}>
                      <span>
                        {totalItems} item{totalItems > 1 ? "s" : ""}
                      </span>
                      <span>₹{totalPrice}</span>
                    </div>
                  </div>
                ) : (
                  <CartIcon />
                )}
              </a>

              <div className={styles.sideMenuBar}>
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <OffCanvasMenu isOpen={isOpen} onClose={() => setOpen(false)} />
      <OffCanvasLogin isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </header>
  );
};

export default Header;

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
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
              {router.pathname === "/dashboard" ? (
                // My Account dropdown
                <div className="position-relative">
                  <button
                    className={styles.headerActionBtn}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <ProfileIcon />
                    <span className="ms-1 d-none d-md-inline">My Account</span>
                  </button>

                  {dropdownOpen && (
                    <div
                      className="dropdown-menu show"
                      style={{
                        position: "absolute",
                        top: "100%",
                        right: 0,
                        display: "block",
                      }}
                    >
                      <a
                        className="dropdown-item d-flex align-items-center"
                        onClick={() => router.push("/profile")}
                      >
                        My Account
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                      >
                        Logout
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  className={styles.headerActionBtn}
                  onClick={() => setLoginOpen(true)}
                >
                  <ProfileIcon />
                  <span className="ms-1 d-none d-md-inline">Login</span>
                </button>
              )}

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
                  <>
                    <CartIcon />
                    <span className="ms-1 d-none d-md-inline">Cart</span>
                  </>
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

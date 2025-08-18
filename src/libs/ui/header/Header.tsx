import React, { useState } from "react";
import { LocationIcon } from "@/icons/LocationIcon";
import { ProfileIcon } from "@/icons/ProfileIcon";
import { CartIcon } from "@/icons/CartIcon";
import styles from "@/styles/header.module.css";
import { Squash as Hamburger } from "hamburger-react";
import OffCanvasMenu from "./offCanvasMenu";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/router";
import OffCanvasLogin  from "./offCanvasLogin";


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
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <span className={styles.fish}>FISH</span>
          <span className={styles.mart}> MART</span>
        </h1>

        <div className={styles.location}>
          <LocationIcon />
          <span className={styles.locationText}>Select Location</span>
        </div>

        <div className={styles.headerIcons}>
          <div
          className={styles.iconTextGroup}
          style={{ cursor: "pointer" }}
          onClick={() => setLoginOpen(true)} 
          >
            <ProfileIcon />
            <span className="user-text">Login</span>
          </div>

          <div
            className={styles.iconTextGroup}
            style={{ position: "relative", cursor: "pointer" }}
            onClick={handleCartClick}
          >
            {totalItems > 0 ? (
              <div className={styles.cartBadge}>
                <CartIcon />
                <div className={styles.cartBadgeText}>
                  <span>{totalItems} item{totalItems > 1 ? "s" : ""}</span>
                  <span>₹{totalPrice}</span>
                </div>
              </div>
            ) : (
              <CartIcon />
            )}
          </div>

          <div className={styles.iconTextGroup}>
            <Hamburger toggled={isOpen} toggle={setOpen} size={24} color="#e07844" />
          </div>
        </div>
      </header>

      <OffCanvasMenu isOpen={isOpen} onClose={() => setOpen(false)} />
      <OffCanvasLogin isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
};

export default Header;



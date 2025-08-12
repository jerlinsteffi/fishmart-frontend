import React from "react";
import { LocationIcon } from "@/icons/LocationIcon";
import {ProfileIcon} from "@/icons/ProfileIcon";
import {CartIcon} from "@/icons/CartIcon";

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <header className="header">
        <h1 className="logo">
          <span className="fish">FISH</span>
          <span className="mart"> MART</span>
        </h1>

        <div className="location">
          <LocationIcon />
          <span className="location-text">Select Location</span>
        </div>

        <div className="header-icons">
          <div className="icon-text-group">
            <ProfileIcon />
            <span className="user-text">Login</span>
          </div>
          <div className="icon-text-group">
            <CartIcon />
            <span className="cart-text">Cart</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;


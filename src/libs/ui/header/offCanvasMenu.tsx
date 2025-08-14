import React, { useState } from "react";
import styles from "@/styles/header.module.css";
import Link from "next/link";

interface OffCanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const OffCanvasMenu: React.FC<OffCanvasMenuProps> = ({ isOpen, onClose }) => {
  const [active, setActive] = useState<string>("Home");

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/Menu/about" }, // Navigate to /about
    { name: "Contact", path: "/contact" }
  ];

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
      onClick={onClose}
    >
      <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
        <h2>Menu</h2>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={active === item.name ? styles.active : ""}
              onClick={() =>{
                setActive(item.name)
                onClose;
              }} 
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OffCanvasMenu;



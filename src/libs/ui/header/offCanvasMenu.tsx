import React, { useState } from "react";
import styles from "@/styles/offcanvas.module.css";
import Link from "next/link";

interface OffCanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const OffCanvasMenu: React.FC<OffCanvasMenuProps> = ({ isOpen, onClose }) => {
  const [active, setActive] = useState<string>("Home");

  const menuItems = [
    { name: "Home", path: "/" },
    /*{ name: "Shop", path: "/shop" },*/
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
      onClick={onClose}
    >
      <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
        
        <video
          autoPlay
          loop
          muted
          playsInline
          preload = "auto"
          className={styles.bgVideo}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>

        {/* Menu Content */}
        <div className={styles.menuContent}>
          <h2>Menu</h2>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={active === item.name ? styles.active : ""}
                onClick={() => {
                  setActive(item.name);
                  onClose(); // ✅ fix missing function call
                }}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OffCanvasMenu;




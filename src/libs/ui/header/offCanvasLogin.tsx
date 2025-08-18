import React from "react";
import styles from "@/styles/offcanvas.module.css"; // reuse your offcanvas CSS
import Link from "next/link";

interface OffCanvasLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

const OffCanvasLogin: React.FC<OffCanvasLoginProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
      onClick={onClose} 
    >
      <div className={`${styles.menu} ${styles.menuRight}`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.menuContent}>
          <h2>Login</h2>
          <form className="d-flex flex-column gap-2">
            <input type="email" placeholder="Email" className="form-control" />
            <input type="password" placeholder="Password" className="form-control" />
            <button type="submit" className="btn btn-primary mt-2">
              Login
            </button>
          </form>
          <p className="mt-3">
            New user? <Link href="/signup">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OffCanvasLogin;

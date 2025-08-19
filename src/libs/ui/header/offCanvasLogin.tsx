import React from "react";
import styles from "@/styles/user.module.css"; 
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
      <div
        className={`${styles.loginPanel} ${isOpen ? styles.show : ""}`} 
        onClick={(e) => e.stopPropagation()} 
      >
        <div className={styles.loginContent}>
          <h2>Login</h2>

          <div className="mb-3">
            <input
              type="tel"
              placeholder="Enter mobile number"
              className="form-control"
            />
          </div>

          
          <button type="submit" className={styles.blackButton}>
            Send OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default OffCanvasLogin;

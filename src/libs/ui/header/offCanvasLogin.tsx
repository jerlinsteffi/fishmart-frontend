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

          {/* Mobile Number Input */}
          <div className="mb-3">
            <input
              type="tel"
              placeholder="Enter mobile number"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Send OTP
          </button>

          <p className="mt-3 text-center">
            New user? <Link href="/signup">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OffCanvasLogin;







import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/user.module.css";

interface OffCanvasLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

const OffCanvasLogin: React.FC<OffCanvasLoginProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const router = useRouter();

  // Send OTP (demo)
  const handleSendOtp = () => {
    if (phone.trim().length === 10) {
      setStep("otp");
      setOtp(["", "", "", ""]);
      setError("");
    } else {
      setError("Enter a valid 10 digit phone number");
    }
  };

  // Handle OTP input
  const handleOtpChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // auto focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  // Verify OTP on Submit button
  const handleVerifyOtp = () => {
    if (otp.join("") === "1234") {
      setError("");
      onClose();
      router.push("/"); // redirect to home page
    } else {
      setError("Enter correct OTP");
    }
  };

  // Resend OTP resets everything
  const handleResendOtp = () => {
    setPhone("");
    setOtp(["", "", "", ""]);
    setStep("phone");
    setError("");
  };

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
          <h2 className={styles.title}>Login</h2>

          {step === "phone" ? (
            <>
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.input}
              />
              <button onClick={handleSendOtp} className={styles.blackButton}>
                Send OTP
              </button>
            </>
          ) : (
            <>
              <div className={styles.otpContainer}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    className={styles.otpBox}
                  />
                ))}
              </div>
              <button onClick={handleVerifyOtp} className={styles.blackButton}>
                Submit OTP
              </button>
              <button onClick={handleResendOtp} className={styles.resendButton}>
                Resend OTP
              </button>
            </>
          )}

          {error && <p className={styles.error}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default OffCanvasLogin;



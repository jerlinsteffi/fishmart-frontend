import styles from "@/styles/footer.module.css";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer className={`dark-background ${styles.footerSection}`}>
      <Container>
        <div>
          <Row className="gy-4">
            <Col lg={5} md={12}>
              <div>
                <Link
                  href="/"
                  className={`${styles.logo} d-flex align-items-center mb-md-4 mb-lg-4 mb-0`}
                >
                  <span className={styles.siteName}>Fish Mart</span>
                </Link>
                <p className={`${styles.siteContent} mb-4 d-none d-md-block`}>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae. Donec velit neque auctor sit
                  amet aliquam vel ullamcorper sit amet ligula. Donec velit
                  neque auctor sit amet aliquam vel ullamcorper sit amet ligula.
                </p>
              </div>
            </Col>

            <Col lg={2} md={5} className="d-none d-md-block">
              <div className={styles.footerLinks}>
                <h4>Useful Links</h4>
                <ul className="p-0 m-0">
                  <li className="d-flex align-items-center">
                    <Link
                      href="/"
                      className="d-flex align-items-center text-decoration-none"
                    >
                      <i className="bi bi-chevron-right"></i> Home
                    </Link>
                  </li>
                  <li className="d-flex align-items-center">
                    <Link
                      href="/about"
                      className="d-flex align-items-center text-decoration-none"
                    >
                      <i className="bi bi-chevron-right"></i> About
                    </Link>
                  </li>
                  <li className="d-flex align-items-center">
                    <Link
                      href="/contact"
                      className="d-flex align-items-center text-decoration-none"
                    >
                      <i className="bi bi-chevron-right"></i> Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={5} md={7}>
              <div className={styles.footerContact}>
                <h4>Get in Touch</h4>
                <div className={`d-flex ${styles.contactItem}`}>
                  <div
                    className={`d-flex align-items-center justify-content-center ${styles.contactIcon}`}
                  >
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className={styles.contactInfo}>
                    <p>2847 Maple Avenue Los Angeles, CA 90210 United States</p>
                  </div>
                </div>
                <div className={`d-flex ${styles.contactItem}`}>
                  <div
                    className={`d-flex align-items-center justify-content-center ${styles.contactIcon}`}
                  >
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className={styles.contactInfo}>
                    <Link
                      href="tel:+15559876543"
                      className="text-decoration-none"
                    >
                      <p>+1 (555) 987-6543</p>
                    </Link>
                  </div>
                </div>
                <div className={`d-flex ${styles.contactItem}`}>
                  <div
                    className={`d-flex align-items-center justify-content-center ${styles.contactIcon}`}
                  >
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className={styles.contactInfo}>
                    <Link
                      href="mailto:contact@example.com"
                      className="text-decoration-none"
                    >
                      <p>contact@example.com</p>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div className={`${styles.footerBottom}`}>
        <Container className="align-items-center">
          <div className={styles.copyright}>
            <p className="text-center">
              &copy; {year} Copyright{" "}
              <strong className="px-1">Fish Mart</strong>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

import { NextPageWithLayout } from "@/types/page";
import { Layout } from "@/libs/dashboard-layout";
import { CONTACT_PAGE } from "@/contants/meta-data";
import styles from "../../styles/contact.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";

const ContactPage: NextPageWithLayout = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.sectionTitle} p-3`}>
          <h2>Contact</h2>
        </div>
        <Row className="gy-4 mb-5">
          <Col lg={4}>
            <div className={`mb-4 ${styles.contactBox}`}>
              <div className={styles.iconBox}>
                <i className="bi bi-geo-alt"></i>
              </div>
              <div className={styles.infoContent}>
                <h4>Our Address</h4>
                <p>1842 Maple Avenue, Portland, Oregon 97204</p>
              </div>
            </div>

            <div className={`mb-4 ${styles.contactBox}`}>
              <div className={styles.iconBox}>
                <i className="bi bi-envelope"></i>
              </div>
              <div className={styles.infoContent}>
                <h4>Email Address</h4>
                <p>info@example.com</p>
                <p>contact@example.com</p>
              </div>
            </div>

            <div className={`mb-4 ${styles.contactBox}`}>
              <div className={styles.iconBox}>
                <i className="bi bi-headset"></i>
              </div>
              <div className={styles.infoContent}>
                <h4>Hours of Operation</h4>
                <p>Sunday-Fri: 9 AM - 6 PM</p>
                <p>Saturday: 9 AM - 4 PM</p>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <div className={styles.mapSection}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.684949335945!2d-73.98658242357565!3d40.75853057126168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMwLjciTiA3M8KwNTknMDcuNyJX!5e0!3m2!1sen!2sus!4v1654321234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

ContactPage.metadata = CONTACT_PAGE;
ContactPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ContactPage;

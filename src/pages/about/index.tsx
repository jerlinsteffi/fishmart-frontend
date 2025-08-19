import { ABOUT_PAGE } from "@/contants/meta-data";
import { Layout } from "@/libs/dashboard-layout";
import { NextPageWithLayout } from "@/types/page";
import styles from "../../styles/about.module.css";
import { Col, Container, Image, Row } from "react-bootstrap";

const AboutPage: NextPageWithLayout = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.sectionTitle} p-3`}>
          <h2>About</h2>
        </div>
        <Row className="gy-4 mb-5">
          <Col lg={5}>
            <div className={styles.aboutGallery}>
              <Image
                src="/images/about.webp"
                // src="/fishmart-frontend/images/about.webp"
                className="img-fluid rounded"
                alt="About Image"
              />
            </div>
          </Col>
          <Col lg={7}>
            <div className={styles.aboutContent}>
              <h2>Experience Our Unique Approach</h2>
              <p>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem
                lacinia quam venenatis vestibulum. Curabitur blandit tempus
                porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum
                at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia
                quam venenatis vestibulum. Morbi leo risus, porta ac consectetur
                ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare
                sem lacinia quam venenatis vestibulum. Curabitur blandit tempus
                porttitor.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

AboutPage.metadata = ABOUT_PAGE;
AboutPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AboutPage;

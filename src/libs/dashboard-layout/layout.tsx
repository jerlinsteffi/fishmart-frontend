import { LayoutProps } from "@/types/page";
import Header from "../ui/header/Header";
import Footer from "../ui/Footer";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </div>
  );
};

export { Layout };

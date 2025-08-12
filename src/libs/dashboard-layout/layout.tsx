import { LayoutProps } from "@/types/page";
import Header from "../ui/Header";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">{children}</main>
      <h1>Footer</h1>
    </div>
  );
};

export { Layout };

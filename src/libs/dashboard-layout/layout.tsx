import { LayoutProps } from "@/types/page";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <h1>Header</h1>
      <main className="flex-grow-1">{children}</main>
      <h1>Footer</h1>
    </div>
  );
};

export { Layout };

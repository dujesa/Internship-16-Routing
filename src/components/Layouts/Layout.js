import Footer from "./Footer";
import Header from "./Header";
import { ContentContainer } from "./index.styled";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </div>
  );
};

export default Layout;

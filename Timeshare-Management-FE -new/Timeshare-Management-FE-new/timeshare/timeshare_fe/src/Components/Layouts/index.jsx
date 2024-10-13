import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;

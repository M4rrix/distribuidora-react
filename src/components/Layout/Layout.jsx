import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "100px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
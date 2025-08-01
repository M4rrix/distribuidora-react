import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";


const Layout = () => {
  return (
    <>
    <div className="app-wrapper">
      <Header />
      <main style={{ paddingTop: "100px" }}>
        <Outlet />     
      </main>
      <Footer />
      </div>
    </>
  );
};

export default Layout;
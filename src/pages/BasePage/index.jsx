import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./BasePage.module.css";

function BasePage() {
  return (
    <>
      <div className={styles.basePage}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default BasePage;

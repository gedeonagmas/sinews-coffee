import { Fragment, useEffect } from "react";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation, stickyNav } from "../utils";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import MobileMenu from "./header/MobileMenu";
import ScrollTop from "./ScrollTop";
const Layout = ({ children, header, footer }) => {
  useEffect(() => {
    animation();
    stickyNav();
  }, []);

  return (
    <Fragment>
      <ImageView />
      <VideoPopup />
      <Header header={header} />
      <MobileMenu />
      {children}
      <Footer footer={footer} />
      <ScrollTop />
    </Fragment>
  );
};
export default Layout;

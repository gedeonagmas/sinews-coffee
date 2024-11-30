import DefaultFooter from "./DefaultFooter";
import Footer1 from "./Footer1";
import Footer3 from "./Footer3";
const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer3 />;
    case 3:
      return <Footer3 />;

    default:
      return <Footer3 />;
  }
};
export default Footer;

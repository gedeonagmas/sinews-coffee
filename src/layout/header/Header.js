import DefaultHeader from "./DefaultHeader";
import Header2 from "./Header2";
import Header3 from "./Header3";
import LandingHeader from "./LandingHeader";
const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header3 />;
    case 2:
      return <Header2 />;
    case 3:
      return <Header3 />;
    case 4:
      return <LandingHeader />;

    default:
      return <Header3 />;
  }
};
export default Header;

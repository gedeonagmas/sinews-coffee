import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div className="mobile-menu-area d-sm-block d-md-block d-lg-none header____">
      <div className="mobile-menu mean-container">
        <div className="mean-bar">
          <a
            href="#nav"
            className={`meanmenu-reveal ${toggle ? "meanclose" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              "X"
            ) : (
              <Fragment>
                <span /> <span /> <span />
              </Fragment>
            )}
          </a>
          <nav className="mean-nav">
            <ul
              className="nav_scroll"
              style={{ display: toggle ? "block" : "none" }}
            >
              <li>
                <a style={{ color: currentURL === "/" ? "red" : "" }} href="/">
                  Home{" "}
                </a>
              </li>
              <li>
                <a
                  style={{ color: currentURL === "/about" ? "red" : "" }}
                  href="/about"
                >
                  About{" "}
                </a>
              </li>
              {/* <li>
                <a href="/team">Team </a>
              </li> */}
              <li>
                <a
                  style={{ color: currentURL === "/service" ? "red" : "" }}
                  href="/service"
                >
                  Services{" "}
                </a>
              </li>
              <li>
                <a
                  style={{ color: currentURL === "/product" ? "red" : "" }}
                  href="/product"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  style={{ color: currentURL === "/blog" ? "red" : "" }}
                  href="/blog"
                >
                  News & Event{" "}
                </a>
              </li>
              <li className="mean-last">
                <a
                  style={{ color: currentURL === "/contact" ? "red" : "" }}
                  href="contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mean-push" />
      </div>
    </div>
  );
};
export default MobileMenu;

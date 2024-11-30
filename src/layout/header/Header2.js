import Link from "next/link";
import { Fragment, useState } from "react";
import { DaskTopMenusMenus } from "./Menus";
const Header2 = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="header_top_menu d-flex align-items-center ">
        <div className="container">
          <div className="row d-flex align-items-cente">
            <div className="col-lg-8 col-sm-8">
              <div className="header_top_menu_address">
                <div className="header_top_menu_text">
                  <p>Welcome! to Consen Finance Consultant.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 pr-0">
              <div className="header_top_menu_icon text-right">
                <div className="menu-title">
                  <h6>FOLLOW US</h6>
                </div>
                <div className="header_top_menu_icon_inner">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook" />
                      </a>
                    </li>
                    <li className="menu-icon">
                      <a href="#">
                        <i className="bi bi-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-twitter" />
                      </a>
                    </li>
                    <li className="menu-icon">
                      <a href="#">
                        <i className="bi bi-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Header Top Menu Area Css */}
      {/*===================================================*/}
      {/*==================================================*/}
      {/* Start consen Main Menu Area */}
      {/*==================================================*/}
      <div id="sticky-header" className="consen_nav_manu style-two header____">
        <div className="container">
          <div className="row header-bg align-items-center">
            <div className="col-lg-3">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a className="logo_img" title="consen">
                    <img src="assets/images/logo2.png" alt="logo" />
                  </a>
                </Link>
                <Link legacyBehavior href="/">
                  <a className="main_sticky" title="consen">
                    <img src="assets/images/logo2.png" alt="logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-9 pl-0 pr-0">
              <nav className="consen_menu">
                <DaskTopMenusMenus />
                <div className="search-box-btn search-box-outer">
                  <div className="nav-btn navSidebar-button">
                    <a className="c-pointer" onClick={() => setToggle(true)}>
                      <i className="fas fa-align-left" />
                    </a>
                  </div>
                </div>
                <div className="header-button">
                  <Link legacyBehavior href="contact">
                    Request a Quote
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`xs-sidebar-group info-group ${toggle ? "isActive" : ""}`}
      >
        <div
          className="xs-overlay xs-bg-black"
          onClick={() => setToggle(false)}
        />
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a
                href="#"
                className="close-side-widget"
                onClick={() => setToggle(false)}
              >
                <i className="far fa-times-circle" />
              </a>
            </div>
            <div className="sidebar-textwidget">
              {/* Sidebar Info Content */}
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="nav-logo">
                    <a href="index.html">
                      <img src="assets/images/logo.png" alt="logo" />
                    </a>
                  </div>
                  <div className="content-box">
                    <h2>About Us</h2>
                    <p className="text">
                      The argument in favor of using filler text goes something
                      like this: If you use real content in the Consulting
                      Process, anytime you reach a review point you’ll end up
                      reviewing and negotiating the content itself and not the
                      design.
                    </p>
                    <a href="index" className="theme-btn btn-style-two">
                      <span>Consultation</span> <i className="fas fa-heart" />
                    </a>
                  </div>
                  <div className="contact-info">
                    <h2>Contact Info</h2>
                    <ul className="list-style-one">
                      <li>
                        <span className="icon flaticon-email" />
                        Chicago 12, Melborne City, USA
                      </li>
                      <li>
                        <span>
                          {" "}
                          <i className="bi bi-telephone-inbound" />{" "}
                        </span>
                        (+001) 123-456-7890
                      </li>
                      <li>
                        <span>
                          <i className="bi bi-geo-alt" />
                        </span>
                        Example @gmail.com
                      </li>
                      <li>
                        <span>
                          <i className="bi bi-clock" />
                        </span>
                        Week Days: 09.00 to 18.00 Sunday: Closed
                      </li>
                    </ul>
                  </div>
                  {/* Social Box */}
                  <ul className="social-box">
                    <li className="facebook">
                      <a href="#" className="fab fa-facebook-f" />
                    </li>
                    <li className="twitter">
                      <a href="#" className="fab fa-instagram" />
                    </li>
                    <li className="linkedin">
                      <a href="#" className="fab fa-twitter" />
                    </li>
                    <li className="instagram">
                      <a href="#" className="fab fa-pinterest-p" />
                    </li>
                    <li className="youtube">
                      <a href="#" className="fab fa-linkedin-in" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Header2;

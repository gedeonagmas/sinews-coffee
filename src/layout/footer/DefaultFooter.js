import Link from "next/link";

const DefaultFooter = () => {
  return (
    <div className="footer-middle style-two">
      <div className="container">
        <div className="footer-bg">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="widget widgets-company-info mb-4 mb-lg-0">
                <div className="company-info-desc pr-2">
                  <h4 className="widget-title"> About Us </h4>
                  <p>
                    Busines Consulting is optimize standing manufactured
                    products and installation synergy. Professionally predominat
                    why professional business
                  </p>
                </div>
                <div className="follow-company-icon">
                  <a className="social-icon-color" href="#">
                    {" "}
                    <i className="bi bi-facebook" />{" "}
                  </a>
                  <a className="social-icon-color2" href="#">
                    {" "}
                    <i className="bi bi-instagram"> </i>{" "}
                  </a>
                  <a className="social-icon-color1" href="#">
                    {" "}
                    <i className="bi bi-twitter" />{" "}
                  </a>
                  <a className="social-icon-color3" href="#">
                    {" "}
                    <i className="bi bi-youtube" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="widget widget-nav-menu">
                <h4 className="widget-title">Company</h4>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu">
                    <li>
                      <Link legacyBehavior href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="contact">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="service">
                        Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="widget widget-nav-menu">
                <h4 className="widget-title"> Services </h4>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu">
                    <li>
                      <a href="#"> Strategy &amp; Planing </a>
                    </li>
                    <li>
                      <a href="#"> Consumer Market </a>
                    </li>
                    <li>
                      <a href="#"> Data Analysis </a>
                    </li>
                    <li>
                      <a href="#"> Corporate Finance </a>
                    </li>
                    <li>
                      <a href="#"> Market Research </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div id="em-recent-post-widget" className="mt-5 mt-sm-0">
                <div className="single-widget-item">
                  <h4 className="widget-title pb-2">Popular Posts</h4>
                  <div className="contact-form-footer ">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="subscribe_form">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          required=""
                          data-error="Please enter your email"
                          placeholder="Enter E-Mail"
                        />
                        <button type="submit" className="btn">
                          {" "}
                          <i className="bi bi-send-check" />
                        </button>
                      </div>
                      <div className="subscribe_form_send"></div>
                    </form>
                  </div>
                  <div className="recent-post-item">
                    <div className="recent-post-thumb1">
                      <a href="#">
                        <img
                          src="assets/images/resource/google-play.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="recent-post-thumb">
                      <a href="#">
                        <img
                          src="assets/images/resource/app-store.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="foorer-shape">
            <div className="footer-thumb">
              <img src="assets/images/resource/red-dot.png" alt="" />
            </div>
            <div className="footer-thumb1 bounce-animate2">
              <img src="assets/images/resource/all-shape.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area d-flex align-items-center">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4">
              <div className="consen-logo">
                <Link legacyBehavior href="/">
                  <a className="logo_thumb" title="consen">
                    <img src="assets/images/logo.png" alt="logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-8">
              <div className="footer-bottom-content">
                <div className="footer-bottom-content-copy">
                  <p>
                    © 2023 <span>Consen</span> all rights reserved. Design By
                    Dream-IT.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DefaultFooter;

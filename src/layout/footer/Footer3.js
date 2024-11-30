import axios from "axios";
import { useEffect, useState } from "react";

const Footer3 = () => {
  const [contact, setContact] = useState();

  useEffect(() => {
    const fetchCategory = async () => {
      const response2 = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/business-setup`
      );
      setContact(response2?.data);
    };
    fetchCategory();
  }, []);

  return (
    <div className="footer-middle new-style">
      <div className="container">
        <div className="footer-bg">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="widget widgets-company-info mb-4 mb-lg-0">
                <div className="footer-new-logo">
                  <img src="assets/images/logo.png" alt="" />
                </div>
                <div className="company-info-desc">
                  <p>
                    Sinews exports premium coffee beans, connecting farmers with
                    the world’s finest markets, sustainably and reliably.
                  </p>
                </div>
                <div className="follow-company-icon">
                  {contact?.facebookLink && (
                    <a target="_blank" href={contact?.facebookLink}>
                      <i className="fab fa-facebook-f" />
                    </a>
                  )}
                  {contact?.twitterLink && (
                    <a target="_blank" href={contact?.twitterLink}>
                      <i className="fab fa-twitter" />
                    </a>
                  )}
                  {contact?.instagramLink && (
                    <a target="_blank" href={contact?.instagramLink}>
                      <i className="fab fa-instagram" />
                    </a>
                  )}
                  {contact?.linkedInLink && (
                    <a target="_blank" href={contact?.linkedInLink}>
                      <i className="fab fa-linkedin" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="widget widget-nav-menu one">
                <h4 className="widget-title">Explore</h4>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu">
                    <li>
                      <a href="#"> Home </a>
                    </li>
                    <li>
                      <a href="/team"> Team </a>
                    </li>
                    <li>
                      <a href="/contact"> Contact Us </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="widget widget-nav-menu">
                <h4 className="widget-title"> Useful Links </h4>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu">
                    <li>
                      <a href="/about"> About </a>
                    </li>
                    <li>
                      <a href="/product"> Product </a>
                    </li>
                    <li>
                      <a href="/service"> Service </a>
                    </li>
                    <li>
                      <a href="/blog"> News & Events </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div id="em-recent-post-widget" className="mt-5 mt-sm-0">
                <div className="single-widget-item">
                  <h4 className="widget-title">Get In Touch</h4>
                </div>
                <div className="widget-location">
                  <h4>Contacts</h4>
                  <span>{contact?.phone1}</span>
                  <p>{contact?.email}</p>
                </div>
                <div className="widget-location">
                  <h4>Locations</h4>
                  <span>{contact?.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop:'-70px'}} className="footer-bottom-area d-flex align-items-center">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-7">
              <div className="footer-bottom-content">
                <div className="footer-bottom-content-copy">
                  <p>Copyright © Sinews all rights reserved.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="footer-bottom-menu">
                <p>
                  Developed by{" "}
                  <a
                    target="_blank"
                    href="https://keradiondesigns.com"
                    style={{ color: "white" }}
                  >
                    Keradion Technologies.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer3;

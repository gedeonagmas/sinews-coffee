import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { DaskTopMenusMenus } from "./Menus";
import axios from "axios";
const Header3 = () => {
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
    <Fragment>
      <div style={{height:'44px'}} className="header-top-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="header-top-address">
                <ul>
                  {contact?.email && (
                    <li>
                      <p>
                        <span>
                          <i className="far fa-envelope"></i>
                          <a href={`mailto:${contact?.email}`}>
                            {contact?.email}
                          </a>
                        </span>
                      </p>
                    </li>
                  )}
                  {contact?.address && (
                    <li>
                      <i className="fas fa-map-marker-alt" />{" "}
                      <span>{contact?.address}</span>
                    </li>
                  )}
                  {contact?.phone1 && (
                    <li>
                      <a href="#">
                        <i className="fas fa-phone" /> {contact?.phone1}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="header-top-social">
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
        </div>
      </div>
      {/*==================================================*/}
      {/* Start Consen Main Menu Area */}
      {/*==================================================*/}
      <div
        style={{height:'70px',marginTop:'-15px'}}
        id="sticky-header"
        className="consen_nav_manu style-three header____"
      >
        <div className="container">
          <div className="row align-items-center">
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
                <div className="header-button">
                  <Link legacyBehavior href="contact">
                    Need Help?
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Header3;

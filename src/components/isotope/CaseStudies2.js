import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const CaseStudies2 = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".image_load", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current_menu_item" : "");
  return (
    <Fragment>
      <div className="row prtb-bg align-items-center">
        <div className="col-lg-7">
          <div className="consen-section-title pb-50">
            <h5> Case Studies </h5>
            <h2>
              {" "}
              We Serve Best <span> Case Studies </span>
            </h2>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="portfolio_nav">
            <div className="portfolio_menu">
              <ul className="menu-filtering">
                <li
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  {" "}
                  All items{" "}
                </li>
                <li
                  className={`c-pointer ${activeBtn("physics")}`}
                  onClick={handleFilterKeyChange("physics")}
                >
                  {" "}
                  Web Design{" "}
                </li>
                <li
                  className={`c-pointer ${activeBtn("chemistry")}`}
                  onClick={handleFilterKeyChange("chemistry")}
                >
                  {" "}
                  UX Strategy{" "}
                </li>
                <li
                  className={`c-pointer ${activeBtn("math")}`}
                  onClick={handleFilterKeyChange("math")}
                >
                  {" "}
                  Software{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row image_load">
        <div className="col-lg-3 col-md-6 grid-item physics math">
          <div className="single-portfolio">
            <div className="portfolio-thumb">
              <img src="assets/images/project/prt1.jpg" alt />
              <div className="portfolio-content">
                <div className="portfolio-content-inner">
                  <div className="portfolio-title">
                    <h3>
                      {" "}
                      <Link legacyBehavior href="/portfolio-details">
                        <a> Tech Conference</a>
                      </Link>{" "}
                    </h3>
                    <span>Technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 grid-item chemistry math">
          <div className="single-portfolio">
            <div className="portfolio-thumb">
              <img src="assets/images/project/prt2.jpg" alt />
              <div className="portfolio-content">
                <div className="portfolio-content-inner">
                  <div className="portfolio-title">
                    <h3>
                      {" "}
                      <Link legacyBehavior href="/portfolio-details">
                        <a> Business Development </a>
                      </Link>{" "}
                    </h3>
                    <span>IT Consulting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 grid-item chemistry physics">
          <div className="single-portfolio">
            <div className="portfolio-thumb">
              <img src="assets/images/project/prt3.jpg" alt />
              <div className="portfolio-content">
                <div className="portfolio-content-inner">
                  <div className="portfolio-title">
                    <h3>
                      {" "}
                      <Link legacyBehavior href="/portfolio-details">
                        <a> Marketing Agency</a>
                      </Link>{" "}
                    </h3>
                    <span>Marketer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 grid-item physics math">
          <div className="single-portfolio">
            <div className="portfolio-thumb">
              <img src="assets/images/project/prt4.jpg" alt />
              <div className="portfolio-content">
                <div className="portfolio-content-inner">
                  <div className="portfolio-title">
                    <h3>
                      {" "}
                      <Link legacyBehavior href="/portfolio-details">
                        <a> IT Consulting</a>
                      </Link>{" "}
                    </h3>
                    <span>IT Solution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CaseStudies2;

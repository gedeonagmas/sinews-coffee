import Breadcumb from "@/src/components/Breadcumb";
import Counter from "@/src/components/Counter";
import Faqs from "@/src/components/Faqs";
import LogoSlider from "@/src/components/LogoSlider";
import TestimonialHome from "@/src/components/TestimonialHome";
import Layout from "@/src/layout/Layout";
import { caseStudyProps, testimonial_list_slider } from "@/src/sliderProps";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
const About = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/teams-list`
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchEvents();
  }, []);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

  const currentEvents = events.slice(indexOfFirstProduct, indexOfLastProduct);

  // Total number of pages
  const totalPages = Math.ceil(events.length / itemsPerPage);

  // Logic for handling page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const truncateText = (text, length) => {
    if (typeof text !== "string") {
      return "";
    }
    return text.length > length ? `${text.substring(0, length)}...` : text;
  };
  return (
    <Layout>
      <Breadcumb pageName={"About Us"} />
      {/* ========================================================= */}
      {/* Start abouts area  */}
      {/* ========================================================= */}

      {/*=================================================*/}
      {/* START  feture-area Section */}
      {/*=================================================*/}
      <div className="feature-area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title">
                <h5> Features </h5>
                <h2>
                  We Are Global Stakeholder Over 2000+{" "}
                  <span> Coffee Suppliers </span>
                </h2>
                <p className="about-text1">
                  Leading the way in sustainable coffee trade and innovations,
                  delivering quality beans worldwide.
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Sourcing high-quality coffee beans </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span>
                      {" "}
                      Supporting sustainable coffee farming practices{" "}
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Expanding global coffee supply chain </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              {/* Hero */}
              <Tab.Container defaultActiveKey={"t1"}>
                <div className="tab">
                  <Nav as="ul" className="tabs">
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={"t1"}>
                        Our Exporting Process
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={"t2"}>
                        Our Mission
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={"t3"}>
                        Our Vision
                      </Nav.Link>
                    </li>
                  </Nav>{" "}
                  {/* / tabs */}
                  <Tab.Content className="tab_content">
                    <Tab.Pane eventKey={"t1"} className="tabs_item">
                      <img
                        style={{
                          width: "200px",
                          borderRadius: "50%",
                          height: "200px",
                        }}
                        src="/assets/images/resource/img-11.png"
                        alt="coffee sourcing process"
                      />

                      <ul className="tabs-inner-list">
                        <li>
                          <i className="fas fa-check" />
                          <span> Ethical and sustainable sourcing.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span> Quality assurance at every stage.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span> Expanding market access for coffee.</span>
                        </li>

                        <li>
                          <i className="fas fa-check" />
                          <span> Building strong farmer partnerships.</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Shipping premium coffee worldwide.</span>
                        </li>
                      </ul>
                    </Tab.Pane>{" "}
                    {/* / tabs_item */}
                    <Tab.Pane eventKey={"t2"} className="tabs_item">
                      <img
                        src="assets/images/resource/img-22.png"
                        alt="Our mission"
                      />
                      <p>
                        To support sustainable coffee farming. To ensure fair
                        trade practices for To provide the highest quality
                        coffee.
                      </p>
                      <p>
                        To support sustainable coffee farming. To ensure fair
                        trade practices for To provide the highest quality
                        coffee.
                      </p>
                    </Tab.Pane>{" "}
                    {/* / tabs_item */}
                    <Tab.Pane eventKey={"t3"} className="tabs_item">
                      <img
                        src="assets/images/resource/img-33.png"
                        alt="Our vision"
                      />
                      <p>
                        To support sustainable coffee farming. To ensure fair
                        trade practices for To provide the highest quality
                        coffee.
                      </p>
                      <p>
                        To support sustainable coffee farming. To ensure fair
                        trade practices for To provide the highest quality
                        coffee.
                      </p>
                    </Tab.Pane>{" "}
                    {/* / tabs_item */}
                  </Tab.Content>{" "}
                  {/* / tab_content */}
                </div>
              </Tab.Container>
              {/* / tab */}
            </div>
          </div>
        </div>
      </div>

      {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <TestimonialHome />
      {/*==================================================*/}
      {/* End consen Testimonial Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/*  Start  Counter Section */}
      {/*===================================================*/}
      <div className="counter-section style-33 pt-30 pb-80">
        <div className="container">
          <div className="counter-container">
            <div className="row hr pt-40">
              <div className="col-md-6 col-lg-4">
                <div className="counter-single-item-inner d-flex">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h1>
                        <span className="counter">
                          <Counter end={60} />
                        </span>
                      </h1>
                      <span />
                      <div className="counter-title">
                        <h4>Member</h4>
                        <h3>Experts</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="counter-single-item-inner d-flex">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h1>
                        <span className="counter">
                          <Counter end={1350} />
                        </span>
                      </h1>
                      <span />
                      <div className="counter-title">
                        <h4>Happy</h4>
                        <h3>Customers</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="counter-single-item-inner d-flex">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h1>
                        <span className="counter">
                          <Counter end={12} />
                        </span>
                      </h1>
                      <span />
                      <div className="counter-title">
                        <h4>Years</h4>
                        <h3>Experience</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen Team Area */}
      {/*==================================================*/}
      <div className="team_area style-two upp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="consen-section-title upper text-center pb-60">
                <h5> Team Member </h5>
                <h2>
                  {" "}
                  Let’s Meet with Our <span> Experts </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper {...caseStudyProps} className="case-study owl-carousel">
              {currentEvents?.map((item) => {
                return (
                  <SwiperSlide>
                    <div className="case-study-single-box">
                      <div className="case-study-thumb">
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.image}`}
                          alt="logo"
                        />
                        <div className="case-study-content">
                          <div className="case-study-title">
                            <h6>
                              {" "}
                              {item?.title} {item?.full_name}{" "}
                            </h6>
                            <h3>
                              {" "}
                              <Link legacyBehavior href="/">
                                <a> {item?.position}</a>
                              </Link>
                            </h3>
                          </div>
                          <div className="case-button">
                            <Link legacyBehavior href="/">
                              <a></a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div
          style={{ marginBottom: "30px", marginTop: "40px" }}
          className="d-flex justify-content-center"
        >
          {currentEvents?.length > 6 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Team Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start  FAQ Section */}
      {/*===================================================*/}

      {/*==================================================*/}
      {/*Start  Brand Section */}
      {/*===================================================*/}

      {/*==================================================*/}
      {/* Start consen Subscribe Area */}
      {/*==================================================*/}
      
      {/*==================================================*/}
      {/* End consen Subscribe Area */}
      {/*==================================================*/}
    </Layout>
  );
};
export default About;

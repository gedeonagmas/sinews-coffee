import Counter from "@/src/components/Counter";
import ProssessBar from "@/src/components/ProssessBar";
import Layout from "@/src/layout/Layout";
import {
  brandListProps,
  caseStudyProps,
  testimonial_list_slider,
} from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Service from "./service";
import ServiceHome from "@/src/components/ServiceHome";
import BlogHome from "@/src/components/BlogHome";
import ProductHome from "@/src/components/ProductHome";
import Testimonial from "./testimonial";
import TestimonialHome from "@/src/components/TestimonialHome";
import Cta from "@/src/components/Cta";
const Index = () => {
  return (
    <Layout footer={1}>
      {/*==================================================*/}
      {/* Start consen slider Area */}
      {/*==================================================*/}
      <div className="slider-area d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="slider-content">
                <h3> Work With SINEWS </h3>
                <h1> Taste the Excellence </h1>
                <h1>
                  {" "}
                  of Sinews <span>Coffee</span>{" "}
                </h1>
                <p>
                  {" "}
                  Sinews exports premium coffee beans, connecting farmers with
                  the world’s finest markets, sustainably and reliably.
                </p>
              </div>
              <div className="lines pt-20 pb-40">
                <div className="line" />
              </div>
              <div className="banner-buttons">
                <div className="slider-button">
                  <Link legacyBehavior href="/service">
                    <a>
                      {" "}
                      Work Together <i className="bi bi-plus" />{" "}
                    </a>
                  </Link>
                </div>
                <div className="slider-contact-box">
                  <a className="contact-icon" href="tel:+983217690326">
                    <img src="assets/images/slider/call.png" alt="call icon" />
                  </a>
                  <div className="contact-number">
                    <span> Call Everyday </span>
                    <h3>
                      <a href="tel:+983217690326">+251 954 204 637</a>{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 ">
              <div className="slider-thumb">
                <img src="assets/images/slider/hero-img.jpg" alt />
              </div>
            </div>
            {/* slider shape */}
            <div className="slider-shape">
              <div className="slider-shape-thumb">
                <img src="assets/images/slider/hero-shape.png" alt />
              </div>
              <div className="slider-shape-thumb2">
                <img src="assets/images/slider/hero-shape2.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceHome />
      <div className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div style={{ padding: "40px" }} className="dreamit-about-thumb">
                <img
                  style={{
                    marginLeft: "100px",
                    marginRight: "100px",
                    height: "450px",
                    width: "500px",
                  }}
                  src="assets/images/about/about-img.png"
                  alt
                />
                {/* about-shape */}
                <div className="about-shape-thumb1 bounce-animate2">
                  <img src="assets/images/about/about-shape2.png" alt />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title white pb-10">
                <h2> We Offer a Range of Coffee </h2>
                <h2>
                  {" "}
                  Services, From Farm<span> to Cup. </span>
                </h2>
                <p>
                  From sourcing the finest beans to delivering premium coffee to
                  your doorstep, we provide end-to-end services that ensure
                  quality and freshness at every step.
                </p>
              </div>
              <div className="lines style-two pb-15">
                <div className="line" />
              </div>
              <div className="dreamit-icon-title">
                <h4>
                  {" "}
                  We are Since <span>2008 G.C to Present</span> in Ethiopia{" "}
                </h4>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span>
                      {" "}
                      Building strong partnerships for the best coffee.{" "}
                    </span>
                  </li>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span>
                      {" "}
                      Delivering exceptional coffee with quality and insights.
                    </span>
                  </li>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span>
                      {" "}
                      Fostering sustainability in the coffee industry.{" "}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    Learn More <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
            {/* about thumb */}
            <div className="about-shape-thumb2 bounce-animate4">
              <img src="assets/images/resource/all-shape.png" alt />
            </div>
          </div>
          <div className="row counter-vip">
            <div className="col-lg-12">
              <div className="couter-top-title">
                <h3> Sinews Finished this Achievement in 16 Years </h3>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={1372} />
                  </h4>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={23} />
                  </h4>
                  <span>+</span>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={38} />
                  </h4>
                  <span>+</span>
                  <p>Export Member</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={1372} />
                  </h4>
                  <span>+</span>
                  <p>Satisfactions Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}

      {/*==================================================*/}
      {/* Start consen case study Area */}
      {/*==================================================*/}
      <div className="blog-area blog-new">
        <div className="container">
          <div className="row align-items-center mb-40">
            <div className="col-lg-7 col-md-8">
              <div className="consen-section-title mobile-center">
                <h2>
                  {" "}
                  Our Latest Coffee <span> Offerings </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="consen-button text-right">
                <Link legacyBehavior href="/blog-grid">
                  <a>
                    {" "}
                    View all Products <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <ProductHome />
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      <TestimonialHome />
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen process Area */}
      {/*==================================================*/}
      <div style={{ marginTop: "-70px" }} className="process-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="row process-bg">
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box">
                    <div className="process-number">
                      <span>1</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        Coffee <span> Sourcing </span>
                      </h3>
                      <p>Partnering with trusted farmers for the best beans.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper">
                    <div className="process-number">
                      <span>2</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        Quality <span> Roasting </span>
                      </h3>
                      <p>Expert roasting to bring out the best flavors.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper1">
                    <div className="process-number">
                      <span>3</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        Freshness <span> Guarantee </span>
                      </h3>
                      <p>
                        Ensuring our coffee reaches you at its peak freshness.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper2">
                    <div className="process-number">
                      <span>4</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        Global <span> Delivery </span>
                      </h3>
                      <p>
                        Shipping premium coffee worldwide, straight from the
                        source.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="process-shape">
                  <div className="process-thumb">
                    <img src="assets/images/resource/process-shape.png" alt />
                  </div>
                  <div className="process-thumb1">
                    <img src="assets/images/resource/dreamit-shape.png" alt />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-lg-50">
              <div className="consen-section-title mt-4 mt-lg-0">
                <h2> The Fastest Way to Enjoy </h2>
                <h2>
                  Premium <span> Coffee </span>
                </h2>
              </div>
              <div className="lines style-three pt-30 pb-10">
                <div className="line" />
              </div>
              <div className="dreamit-smart-title">
                <h4>
                  Why Choose <span>Sinews</span> for Your Coffee Needs?
                </h4>
                <p>
                  Vertical coffee sourcing is a notion that we live by at SINEWS
                  BUSINESS PLC. We believe in bridging the gap between farmers
                  and coffee drinkers nd advocates by sourcing exquisite coffee
                  that is fully compliant with larger ideals of sustainability.
                  both in terms of the environment and our personal health. it's
                  a philosophy in which quality goes hand in hand with
                  thoughtful sourcing. long term relations with importers,
                  origin commitment, and sustainable sourcing practices.
                </p>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    More About <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen process Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Skills Area Css */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* End consen Skill Area Css */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Blog Area */}
      {/*==================================================*/}
      <div style={{ marginTop: "-140px" }} className="blog-area blog-new">
        <div className="container">
          <div className="row align-items-center mb-40">
            <div className="col-lg-7 col-md-8">
              <div className="consen-section-title mobile-center">
                <h2> We’re here to share story </h2>
                <h2>
                  {" "}
                  from Latest <span> News </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="consen-button text-right">
                <Link legacyBehavior href="/blog-grid">
                  <a>
                    {" "}
                    View all Blog <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <BlogHome />
        </div>
      </div>
    </Layout>
  );
};
export default Index;

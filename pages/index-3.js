import Counter from "@/src/components/Counter";
import Faqs from "@/src/components/Faqs";
import ProssessBar from "@/src/components/ProssessBar";
import Layout from "@/src/layout/Layout";
import {
  brandListProps2,
  heroSlider,
  testimonial_list_slider,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const CaseStudies2 = dynamic(
  () => import("@/src/components/isotope/CaseStudies2"),
  {
    ssr: false,
  }
);
const Index3 = () => {
  return (
    <Layout header={3} footer={3}>
      <Swiper {...heroSlider} className="banner-list">
        <SwiperSlide>
          <div className="banner-area d-flex align-items-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="banner-content">
                    <h3> FOR YOUR BUSINES SOLUTIONS</h3>
                    <h1> Recruit the Best</h1>
                    <h1> Employees</h1>
                    <p> Shared time the best human Resource Management </p>
                  </div>
                  <div className="banner-button">
                    <Link legacyBehavior href="/service">
                      <a> Discover More </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 ">
                  <div className="banner-year-thumb rotateme">
                    <img src="assets/images/slider/banner-sp.png" alt />
                  </div>
                  <div className="banner-thumb">
                    <img src="assets/images/slider/banner-img.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-area style-two d-flex align-items-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="banner-content">
                    <h3> FOR YOUR BUSINES SOLUTIONS</h3>
                    <h1> Recruit the Best</h1>
                    <h1> Employees</h1>
                    <p> Shared time the best human Resource Management </p>
                  </div>
                  <div className="banner-button">
                    <Link legacyBehavior href="/service">
                      <a> Discover More </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 ">
                  <div className="banner-year-thumb rotateme">
                    <img src="assets/images/slider/banner-sp.png" alt />
                  </div>
                  <div className="banner-thumb">
                    <img src="assets/images/slider/banner-img2.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/*==================================================*/}
      {/*End consen slider Area  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen feature Area */}
      {/*==================================================*/}
      <div className="feature-area new-style">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="single-feature-icon">
                  <img src="assets/images/resource/fv1.png" alt />
                </div>
                <div className="single-feature-content">
                  <h3>01</h3>
                  <h2>Live Chat Platforms</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="single-feature-icon">
                  <img src="assets/images/resource/fv2.png" alt />
                </div>
                <div className="single-feature-content">
                  <h3>02</h3>
                  <h2>Ask Now Professionals</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="single-feature-icon">
                  <img src="assets/images/resource/fv3.png" alt />
                </div>
                <div className="single-feature-content">
                  <h3>03</h3>
                  <h2>Get Technical Supports</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen feature Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="about-area new-style">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-thumb">
                <img src="assets/images/about/about3.png" alt />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="consen-section-title">
                <h5> ABOUT OUR COMPANY</h5>
                <h2> We Execuite Our Ideas From</h2>
                <h2>
                  {" "}
                  The Start to <span> Finishes </span>
                </h2>
                <p className="about-text2 pt-3">
                  {" "}
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override digital divide with
                  additional clickthroughs
                </p>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="about-icon-box pt-3">
                    <div className="about-icon-thumb">
                      <img src="assets/images/about/ab1.png" alt />
                    </div>
                    <div className="about-box-content">
                      <h2>Manage Tech Services</h2>
                      <p>
                        Ballpark value added activity to the override digital
                        divide with
                      </p>
                    </div>
                  </div>
                  <div className="about-icon-box border-non">
                    <div className="about-icon-thumb">
                      <img src="assets/images/about/ab2.png" alt />
                    </div>
                    <div className="about-box-content">
                      <h2>Worldwide Networks</h2>
                      <p>
                        Ballpark value added activity to the override digital
                        divide with
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="awoard-thumb pt-3">
                    <img src="assets/images/about/awoard.jpg" alt />
                  </div>
                </div>
              </div>
              <div className="abouts-button">
                <div className="new-button">
                  <Link legacyBehavior href="/about">
                    <a>Discover More</a>
                  </Link>
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
      {/* End Consen Service Area */}
      {/*==================================================*/}
      <div className="service-area new-style">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="consen-section-title upper text-center mb-40">
                <h5> OUR SERVICES</h5>
                <h2> Amazing IT Solutions we Provide</h2>
                <h2>
                  {" "}
                  That We <span> Stand Behind </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-service-box">
                <div className="service-box-thumb">
                  <img src="assets/images/resource/sr1.jpg" alt />
                </div>
                <div className="service-icon-thumb">
                  <img src="assets/images/resource/srv1.png" alt />
                </div>
                <div className="service-content">
                  <h2>Product Development</h2>
                  <p>
                    Capitalize low hanging fruit to identify beta test. Override
                    digital
                  </p>
                  <Link legacyBehavior href="/service">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-box">
                <div className="service-box-thumb">
                  <img src="assets/images/resource/sr2.jpg" alt />
                </div>
                <div className="service-icon-thumb">
                  <img src="assets/images/resource/srv2.png" alt />
                </div>
                <div className="service-content">
                  <h2>Marketing Strategy</h2>
                  <p>
                    Capitalize low hanging fruit to identify beta test. Override
                    digital
                  </p>
                  <Link legacyBehavior href="/service">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-box">
                <div className="service-box-thumb">
                  <img src="assets/images/resource/sr3.jpg" alt />
                </div>
                <div className="service-icon-thumb">
                  <img src="assets/images/resource/srv3.png" alt />
                </div>
                <div className="service-content">
                  <h2>Corporate Solutions</h2>
                  <p>
                    Capitalize low hanging fruit to identify beta test. Override
                    digital
                  </p>
                  <Link legacyBehavior href="/service">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Consen Service Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Skills Area Css */}
      {/*==================================================*/}
      <div className="skill-area style-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="extra-animation-div">
                <div className="consen-section-title white">
                  <h5>POPULAR SKILLS</h5>
                  <h2> We Are Professionals And </h2>
                  <h2>
                    {" "}
                    more <span>Experiences</span>
                  </h2>
                </div>
                <div className="dreamit-smart-title pt-2">
                  <p className="slill-text">
                    Continually generate 2.0 communities and client-focused
                    products. In synergize strategic manufactured products
                    whereas levera.
                  </p>
                </div>
              </div>
              <ProssessBar />
            </div>
            <div className="col-md-6">
              <div className="slill-single-thumb mt-4 mt-lg-0 pl-50 ml-1">
                <img src="assets/images/resource/skill.png" alt />
                {/* thumb content */}
                <div className="skill-thumb-content">
                  <div className="skill-title">
                    <h3 className="counter">
                      {" "}
                      <Counter end={17} />{" "}
                    </h3>
                    <span>+</span>
                    <h5> YEARS EXPERIENCE </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Skill Area Css */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Call Do Action Area Css */}
      {/*==================================================*/}
      <div className="call-do-action-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="consen-section-title white upper text-center mb-40">
                <h5> CONACT US</h5>
                <h2> High Quality Services And Products</h2>
                <h2>
                  {" "}
                  That We Stand <span> Behind </span>
                </h2>
              </div>
              <div className="new-button text-center">
                <Link legacyBehavior href="/contact">
                  <a>Contact US Now</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Call Do Action Area Css */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen case study Area */}
      {/*==================================================*/}
      <div className="portfolio-area">
        <div className="container-fluid">
          <CaseStudies2 />
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area new-style">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="consen-section-title pb-40">
                <h5>TESTIMONIALS</h5>
                <h2> What Say Customers </h2>
                <h2>
                  {" "}
                  About <span>Company</span>
                </h2>
              </div>
              <div className="row">
                <div className="testi_list owl-carousel">
                  <div className="col-lg-12">
                    <div className="single-testimonial">
                      <div className="testimonial-icon-thumb">
                        <img src="assets/images/resource/testi-icon.png" alt />
                      </div>
                      <div className="testimonial-ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <div className="testimonial-content">
                        <div className="testimonial-text">
                          <p>
                            Proactively leverage existing robust imperatives
                            standards compliant this paradigms. Competently
                            formulate excellent experiences withoutlicks-and it
                            mortar methodologies. Seamlessly enhance technically
                            sound e-business tactical communities holisticly
                            coordinate.
                          </p>
                        </div>
                        <div className="testimonial-title">
                          <h2>John M. Alexon</h2>
                          <span>UX Designer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-thumb">
                <img src="assets/images/resource/testi-img.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Testimonial Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Faq Area */}
      {/*==================================================*/}
      <div className="faq-area new-style">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" />
            <div className="col-lg-6">
              {/* Start Accordion */}
              <div className="tab_container">
                <div className="consen-section-title white pb-40 mb-1">
                  <h5> FREEQUENTLY ASKED QUESTION </h5>
                  <h2>
                    {" "}
                    Freequently Asked <span> Question </span>
                  </h2>
                </div>
                <Faqs />
              </div>
              {/* End Accordion */}
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* END consen Faq Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/*Start  Brand Section */}
      {/*===================================================*/}
      <div className="brand-section new-style">
        <div className="container">
          <div className="row">
            <Swiper {...brandListProps2} className="brand-list2 owl-carousel">
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/br1.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/br2.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/br3.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/br4.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/br1.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/br2.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/br3.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/br4.png" alt />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen Blog Area */}
      {/*==================================================*/}
      <div className="blog-area new-style">
        <div className="container">
          <div className="row align-items-center mb-40">
            <div className="col-lg-12">
              <div className="consen-section-title upper text-center">
                <h5>NEWS &amp; BLOGS</h5>
                <h2> Latest Blogs Post </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper
              {...testimonial_list_slider}
              className="blog-list owl-carousel"
            >
              <SwiperSlide>
                <div className="single-blog-box">
                  <div className="single-blog-thumb">
                    <img src="assets/images/resource/bl1.jpg" alt />
                    <div className="blog-top-button">
                      <a href="#"> GRAPHIC </a>
                    </div>
                  </div>
                  <div className="em-blog-content">
                    <div className="meta-blog-text">
                      <a href="#">Consen</a>
                      <span>August 25, 2023</span>
                    </div>
                    <div className="em-blog-title">
                      <h2>
                        {" "}
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            7+ Use Artificial Intelligence that will blow mind{" "}
                          </a>
                        </Link>{" "}
                      </h2>
                    </div>
                    <div className="em-blog-text">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-blog-box">
                  <div className="single-blog-thumb">
                    <img src="assets/images/resource/bl2.jpg" alt />
                    <div className="blog-top-button">
                      <a href="#"> DEVELOPMENT </a>
                    </div>
                  </div>
                  <div className="em-blog-content">
                    <div className="meta-blog-text">
                      <a href="#">Consen</a>
                      <span>August 18, 2023</span>
                    </div>
                    <div className="em-blog-title">
                      <h2>
                        {" "}
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            Grow your appraisal skills and real estate career?
                          </a>
                        </Link>{" "}
                      </h2>
                    </div>
                    <div className="em-blog-text">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-blog-box">
                  <div className="single-blog-thumb">
                    <img src="assets/images/resource/bl3.jpg" alt />
                    <div className="blog-top-button">
                      <a href="#"> DESIGN </a>
                    </div>
                  </div>
                  <div className="em-blog-content">
                    <div className="meta-blog-text">
                      <a href="#">Consen</a>
                      <span>August 14, 2023</span>
                    </div>
                    <div className="em-blog-title">
                      <h2>
                        {" "}
                        <Link legacyBehavior href="/blog-details">
                          <a> 29 Real Estate Blogs Every Realtor Should Read</a>
                        </Link>
                      </h2>
                    </div>
                    <div className="em-blog-text">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-blog-box">
                  <div className="single-blog-thumb">
                    <img src="assets/images/resource/bl1.jpg" alt />
                    <div className="blog-top-button">
                      <a href="#"> GRAPHIC </a>
                    </div>
                  </div>
                  <div className="em-blog-content">
                    <div className="meta-blog-text">
                      <a href="#">Consen</a>
                      <span>August 25, 2023</span>
                    </div>
                    <div className="em-blog-title">
                      <h2>
                        {" "}
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            7+ Use Artificial Intelligence that will blow mind{" "}
                          </a>
                        </Link>{" "}
                      </h2>
                    </div>
                    <div className="em-blog-text">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-blog-box">
                  <div className="single-blog-thumb">
                    <img src="assets/images/resource/bl3.jpg" alt />
                    <div className="blog-top-button">
                      <a href="#"> DESIGN </a>
                    </div>
                  </div>
                  <div className="em-blog-content">
                    <div className="meta-blog-text">
                      <a href="#">Consen</a>
                      <span>August 14, 2023</span>
                    </div>
                    <div className="em-blog-title">
                      <h2>
                        {" "}
                        <Link legacyBehavior href="/blog-details">
                          <a> 29 Real Estate Blogs Every Realtor Should Read</a>
                        </Link>
                      </h2>
                    </div>
                    <div className="em-blog-text">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-blog-box">
                  <div className="single-blog-thumb">
                    <img src="assets/images/resource/bl2.jpg" alt />
                    <div className="blog-top-button">
                      <a href="#"> DEVELOPMENT </a>
                    </div>
                  </div>
                  <div className="em-blog-content">
                    <div className="meta-blog-text">
                      <a href="#">Consen</a>
                      <span>August 18, 2023</span>
                    </div>
                    <div className="em-blog-title">
                      <h2>
                        {" "}
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            Grow your appraisal skills and real estate career?
                          </a>
                        </Link>{" "}
                      </h2>
                    </div>
                    <div className="em-blog-text">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Blog Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Subscribe Area */}
      {/*==================================================*/}
      <div className="subscribes-area new-style">
        <div className="container">
          <div className="row sub-bgmn align-items-center">
            <div className="col-lg-4 col-md-6 p-0">
              <div className="sub-left-thumb">
                <img src="assets/images/resource/sub-img.jpg" alt />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="subscribe-right-bx">
                <div className="subscribe-title">
                  <h1>Subscribe our Newsletter</h1>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="https://formspree.io/f/myyleorq"
                  method="POST"
                  id="dreamit-form"
                >
                  <div className="subscribe_form">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      required
                      data-error="Please enter your email"
                      placeholder="Enter Your Email"
                    />
                    <button type="submit" className="btn">
                      Subscribe
                    </button>
                  </div>
                </form>
                <div id="status" />
              </div>
            </div>
            <div className="col-lg-2" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index3;

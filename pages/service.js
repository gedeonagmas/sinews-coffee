"use client";
import Breadcumb from "@/src/components/Breadcumb";
import LogoSlider from "@/src/components/LogoSlider";
import PagginationFuntion from "@/src/components/PagginationFuntion";
import Pagination from "@/src/components/Pagination";
import ProgressBar from "@/src/components/ProgressBar";
import Layout from "@/src/layout/Layout";
import { getPagination, pagination } from "@/src/utils";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Service = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/service`
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
      <Breadcumb pageName={"Our Service"} />

      {/*==================================================*/}
      {/* Start consen service Area */}
      {/*==================================================*/}
      <div className="service-area">
        <div className="container">
          <div className="row align-items-center mb-90">
            <div className="col-lg-7 col-md-8 pl-0">
              <div className="consen-section-title mobile-center">
                <h2> We Run All Kinds Of Services</h2>
                <h2>
                  {" "}
                  From <span> Technologies </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="consen-button text-right">
                <Link legacyBehavior href="/service">
                  <a>
                    {" "}
                    All Service <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            {currentEvents?.map((item, i) => {
              return (
                <div className="col-lg-3 col-sm-6 p-0">
                  <div className="dreamit-service-box">
                    <div className="service-box-inner">
                      <div className="em-service-icon">
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.banner}`}
                          alt
                        />
                      </div>
                      <div className="em-service-title">
                        <h2>
                          {" "}
                          <Link href={`/service-details?id=${item?.id}`}>
                            {truncateText(item?.serviceName, 20)}
                          </Link>{" "}
                        </h2>
                      </div>
                      <div className="service-number">
                        <h1> {`0${i + 1}`} </h1>
                      </div>
                      <div className="em-service-text">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: truncateText(item?.description, 70),
                          }}
                        ></p>
                      </div>
                      <div className="service-button">
                        <Link
                          legacyBehavior
                          href={`/service-details?id=${item?.id}`}
                        >
                          <a>
                            {" "}
                            Read More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          style={{ marginBottom: "30px", marginTop: "40px" }}
          className="d-flex justify-content-center"
        >
          {currentEvents?.length > 4 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen service Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="about-area style-three upper sr-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb mr-lg-4">
                <img src="assets/images/about/about-2.png" alt />
                {/* about-shape */}
                <div className="about-shape-thumb1 bounce-animate2">
                  <img src="assets/images/about/about-shpe.png" alt />
                </div>
                <div className="about-shape-thumb3 bounce-animate4">
                  <img src="assets/images/about/about-shape4.png" alt />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title">
                <h5> About Consen </h5>
                <h2> We Are Global Stakeholder </h2>
                <h2>
                  {" "}
                  Over 2000+ <span> Companies </span>
                </h2>
                <p className="about-text1">
                  {" "}
                  Appropriately enhance principle-centered innovation rather
                  than high standards in platforms. Credibly orchestrate
                  functional.{" "}
                </p>
              </div>
              <div className="dreamit-icon-box">
                <div className="dreamit-icon-list">
                  <ul>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span> Communicate orthogonal process</span>
                    </li>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span> Professionally grow cutting-edge paradigms </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* progress bar */}
              <div className="progress-box">
                <ProgressBar value={85} />
                <div className="circle-progress-title">
                  <h4>
                    {" "}
                    Clients <br /> Satisfactions{" "}
                  </h4>
                </div>
                <div className="extra-progress">
                  <ProgressBar value={95} />
                  <div className="circle-progress-title">
                    <h4>
                      {" "}
                      Finance <br /> Consulting{" "}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> More About{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start call do action Section */}
      {/*===================================================*/}
      <div className="call-do-action-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-do-action-video text-center mb-35">
                <div className="video-icon-cda">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="bi bi-pause-circle-fill" />
                  </a>
                </div>
              </div>
              <div className="call-do-action-content text-center">
                <h2 className="text-white">
                  We Deliver Solution With The Goal Of <br />
                  <span className="sub-title"> A Trusting Relationships</span>
                </h2>
                <p className="text-white">
                  Appropriate for your specific business, making it easy for you
                  to have quality IT services.
                </p>
                <div className="btn-common btn-cda mt-40">
                  <Link legacyBehavior href="/contact">
                    <a>Contact Us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area style-two">
        <div className="container">
          <div className="row testi-rotate align-items-center">
            <div className="col-lg-12">
              <div className="consen-section-title pb-50 text-center upper">
                <h5> Testimonials </h5>
                <h2> Consen Trusted Customers </h2>
                <h2>
                  {" "}
                  Awesome <span> Reviews </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/resource/testi1.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4>Philip Anthorpy</h4>
                      <p>UI Designer</p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “Holisticly pursue market-more synerg through innovative
                      paradi. Enthusia productivate media”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/resource/testi3.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4> Shilpa Shethy </h4>
                      <p> CEO, Founder </p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “Holisticly pursue market-more synerg through innovative
                      paradi. Enthusia productivate media”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/resource/testi2.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4> David Alexon </h4>
                      <p> MH Manager </p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “Holisticly pursue market-more synerg through innovative
                      paradi. Enthusia productivate media”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div>
            </div>
            {/* testi shape */}
            <div className="testi-shape">
              <div className="testi-shape-thumb">
                <img src="assets/images/resource/all-shape5.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Testimonial Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Brand Section */}
      {/*===================================================*/}
      <div className="brand-section srv-page">
        <div className="container">
          <div className="row">
            <LogoSlider />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Service;

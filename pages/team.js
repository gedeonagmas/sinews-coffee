"use client";
import Breadcumb from "@/src/components/Breadcumb";
import Pagination from "@/src/components/Pagination";
import ProgressBar from "@/src/components/ProgressBar";
import Layout from "@/src/layout/Layout";
import { brandListProps } from "@/src/sliderProps";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Team = () => {
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
      <Breadcumb pageName={"Our Team"} />

      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="about-area style-three upper1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title">
                <h5> About Sinews Coffee </h5>
                <h2>
                  We Are Proud Suppliers of Premium Ethiopian Coffee to Over
                  2000+ <span>Customers</span>
                </h2>
                <p className="about-text1">
                  Sinews Coffee specializes in bringing you the finest,
                  handpicked coffee beans from Ethiopia. We focus on quality,
                  sustainability, and enriching the coffee-growing communities
                  by directly supporting farmers and promoting eco-friendly
                  practices.
                </p>
              </div>
              <div className="dreamit-icon-box">
                <div className="dreamit-icon-list">
                  <ul>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span>
                        {" "}
                        Sourcing premium coffee directly from Ethiopian farms
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span>
                        {" "}
                        Empowering local farmers through direct partnerships
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* progress bar */}
              <div className="progress-box">
                <ProgressBar value={95} />
                <div className="circle-progress-title">
                  <h4>
                    Customer <br /> Satisfaction
                  </h4>
                </div>
                <div className="extra-progress">
                  <ProgressBar value={90} />
                  <div className="circle-progress-title">
                    <h4>
                      Premium Coffee <br /> Quality
                    </h4>
                  </div>
                </div>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    <i className="bi bi-gear" /> Learn More About Sinews Coffee
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb">
                <img
                  src="assets/images/about/about-2.png"
                  alt="Sinews Coffee"
                />
                {/* about-shape */}
                <div className="about-shape-thumb1 bounce-animate2">
                  <img src="assets/images/about/about-shpe.png" alt="Shape" />
                </div>
                <div className="about-shape-thumb3 bounce-animate4">
                  <img src="assets/images/about/about-shape4.png" alt="Shape" />
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
      {/* Start Brand Section */}
      {/*===================================================*/}

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
            {currentEvents?.map((item) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <div className="single_team">
                    <div className="single_team_thumb1">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.image}`}
                        alt="logo"
                      />
                    </div>
                    <div className="single_team_content">
                      <div className="team-title">
                        <h4>
                          {item?.title} {item?.full_name}
                        </h4>
                        <span>{item?.position}</span>
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
          {currentEvents?.length > 6 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};
export default Team;

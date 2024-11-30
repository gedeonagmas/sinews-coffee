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

const ServiceHome = () => {
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
    <div className="service-area">
      <div className="container">
        <div className="row align-items-center mb-90">
          <div className="col-lg-7 col-md-8 pl-0">
            <div className="consen-section-title mobile-center">
              <h2> Harvesting the Best, </h2>
              <h2>
                {" "}
               Exporting <span>the Finest </span>
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
                        src={`/assets/images/resource/service-icon${i===0?'':i+1}.png`}
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
    </div>
  );
};
export default ServiceHome;

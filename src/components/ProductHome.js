"use client";
import BlogSidebar from "@/src/components/BlogSidebar";
import Breadcumb from "@/src/components/Breadcumb";
import PagginationFuntion from "@/src/components/PagginationFuntion";
import Pagination from "@/src/components/Pagination";
import Layout from "@/src/layout/Layout";
import { getPagination, pagination } from "@/src/utils";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const ProductHome = () => {
  let sort = 4;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);

  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products-list`
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  console.log(events, "events");
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
    <div className="blog-section style-6 bg-3">
      <div className="container">
        <div className="row justify-content-center">
          {/* <div className=""> */}
          <div className="row">
            {currentEvents.map((item) => (
              <div className="case-study-single-box">
                <div className="case-study-thumb">
                  <img src="assets/images/project/case3.png" alt />
                  <div className="case-study-content">
                    <div className="case-study-title">
                      <h6>
                        {" "}
                        {item?.title?.length > 45
                          ? item?.title?.substring(0, 45) + "..."
                          : item?.title}{" "}
                      </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href={`/product-details?id=${item?.id}`}
                        >
                          <a
                            dangerouslySetInnerHTML={{
                              __html:
                                item?.description?.substring(0, 60) + "...",
                            }}
                          ></a>
                        </Link>
                      </h3>
                    </div>
                    <div className="case-button">
                      <Link
                        legacyBehavior
                        href={`/product-details?id=${item?.id}`}
                      >
                        <a>
                          Read More <i className="bi bi-plus" />{" "}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
export default ProductHome;

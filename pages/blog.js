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
const Blog2Column = () => {
  let sort = 4;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);

  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/event_list`
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
    <Layout>
      <Breadcumb pageName={"News & Event"} />
      <div className="blog-section style-6 bg-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="">
              <div className="row">
                {currentEvents.map((item) => (
                  <div className="col-lg-4 col-md-6 grid-item blog_single_2_____">
                    <div className="single-blog-box">
                      <div className="single-blog-thumb">
                        {item?.banner && (
                          <div
                            style={{ position: "relative", height: "250px" }}
                            className="thumb"
                          >
                            <Link href={`/blog-details?id=${item.id}`}>
                              <Image
                                src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.banner}`}
                                alt={item.eventName || "event Image"}
                                fill
                                style={{ objectFit: "cover" }}
                                objectFit="cover" // Ensures consistent aspect ratio
                              />
                            </Link>
                          </div>
                        )}
                      </div>
                      <div className="em-blog-content">
                        <div className="meta-blog-text">
                          <p> {new Date(item?.created_at)?.toDateString()} </p>
                        </div>
                        <div className="em-blog-title">
                          <h2>
                            {" "}
                            <Link
                              legacyBehavior
                              href={`/blog-details?id=${item?.id}`}
                            >
                              <a>
                                {" "}
                                {item?.eventName?.length > 45
                                  ? item?.eventName?.substring(0, 45) + "..."
                                  : item?.eventName}{" "}
                              </a>
                            </Link>
                          </h2>
                        </div>
                        <div className="em-blog-icon">
                          <div className="em-blog-thumb">
                            <img
                              src="assets/images/resource/blog-icon.png"
                              alt
                            />
                          </div>
                          <div className="em-blog-icon-title">
                            <h6>By Admin </h6>
                          </div>
                        </div>

                        <div className="blog-button">
                          <Link
                            href={`/blog?id=${item?.id}`}
                            className="read-more-text"
                          >
                            Read More <i className="fa fa-caret-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center">
                {currentEvents?.length > 6 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Blog2Column;

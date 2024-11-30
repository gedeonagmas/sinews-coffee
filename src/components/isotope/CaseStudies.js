import axios from "axios";
import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import Pagination from "../Pagination";
import Image from "next/image";

const CaseStudies = () => {
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

  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products-list`
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
    <Fragment>
      <div className="row case-study-bg">
        <div className="col-lg-12">
          <div className="consen-section-title upper text-center pb-50">
            <h5> Case Studies </h5>
            <h2> We Server the Best Works </h2>
            <h2>
              View <span> Case Studies </span>
            </h2>
          </div>
        </div>
        <div className="portfolio-shape">
          <div className="port-shape-thumb rotateme">
            <img src="assets/images/resource/red-dot.png" alt />
          </div>
          <div className="port-shape-thumb2 bounce-animate2">
            <img src="assets/images/resource/all-shape6.png" alt />
          </div>
        </div>
      </div>

      <div className="row image_load">
        {currentEvents?.map((item, i) => {
          return (
            <div className="col-lg-4 col-md-6 grid-item physics english">
              <div className="case-study-single-box">
                <div className="case-study-thumb2">
                  <div
                    style={{ position: "relative", height: "300px" }}
                    className="thumb"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.banner}`}
                      alt={item.title || "product Image"}
                      fill
                      style={{ objectFit: "cover" }}
                      objectFit="cover" // Ensures consistent aspect ratio
                    />
                  </div>
                  {/* port icon */}

                  <div className="case-study-content">
                    <div className="case-study-content-inner">
                      <div className="case-study-title">
                        <h6>
                          {" "}
                          <Link href={`/product-details?id=${item?.id}`}>
                            {item.title}
                          </Link>{" "}
                        </h6>
                        <h3>
                          {" "}
                          <Link
                            legacyBehavior
                            href={`/product-details?id=${item?.id}`}
                          >
                            <p
                              dangerouslySetInnerHTML={{
                                __html: truncateText(item?.description, 60),
                              }}
                            ></p>
                          </Link>{" "}
                        </h3>
                        <Link href={`/product-details?id=${item?.id}`}> </Link>
                        <h3>
                          <Link
                            href={`/product-details?id=${item?.id}`}
                            className="read-more-text"
                          >
                            Read More <i className="fa fa-caret-right"></i>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

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
    </Fragment>
  );
};
export default CaseStudies;

"use client";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

import { testimonial_list_slider } from "../sliderProps";
import Counter from "./Counter";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialHome = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/testimonial-list`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching testimonial:", error);
      }
    };
    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="testimonial-area">
      <div className="container">
        <div className="row testi-rotate align-items-center">
          <div className="col-lg-7 col-md-6">
            <div className="consen-section-title white pb-50">
              <h5> Testimonials </h5>
              <h2> Sinews Trusted Customers </h2>
              <h2>
                {" "}
                Awesome <span> Reviews </span>
              </h2>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="row">
              <div className="col-6">
                <div className="testi-counter-box upper">
                  <div className="testi-counter-title">
                    <h3 className="counter">
                      {" "}
                      <Counter end={1372} />{" "}
                    </h3>
                    <span>+</span>
                    <p> Happy Customers </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="testi-counter-box">
                  <div className="testi-counter-title">
                    <h3 className="counter">
                      {" "}
                      <Counter end={100} />{" "}
                    </h3>
                    <span>%</span>
                    <p> Satisfaction Rate </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testi-shape-thumb1 rotateme">
            <img src="assets/images/resource/testimonial-map.png" alt />
          </div>
        </div>
        <div className="row">
          <Swiper
            {...testimonial_list_slider}
            className="testimonial_list owl-carousel"
          >
            {currentProducts?.map((item) => (
              <SwiperSlide className="pr-1">
                <div
                  style={{ height: "340px" }}
                  className="testimonial-single-box"
                >
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.banner}`}
                          alt="rk-theme"
                          style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                          }}
                          loading="lazy"
                        />
                      </div>
                      <div className="quote-title">
                        <h4>{item?.name}</h4>
                        <p>{item?.position}</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      ></p>
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
              </SwiperSlide>
            ))}

            <div className="owl-dots"></div>
          </Swiper>
          <div className="testi-shape">
            <div className="testi-shape-thumb">
              <img src="assets/images/resource/all-shape5.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialHome;

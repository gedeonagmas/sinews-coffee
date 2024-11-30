import Breadcumb from "@/src/components/Breadcumb";
import PagginationFuntion from "@/src/components/PagginationFuntion";
import Layout from "@/src/layout/Layout";
import { getPagination, pagination } from "@/src/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
const BlogList = () => {
  let sort = 3;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".single-blog-box", sort, active);
    let list = document.querySelectorAll(".single-blog-box");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layout>
      <Breadcumb pageName={"Blog List"} />
      {/*==================================================*/}
      {/* START BLOG  Section */}
      {/*===================================================*/}
      <div className="blog-section page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog-1.jpg" alt />
                  <div className="blog-top-button">
                    <a href="#"> GRAPHIC </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 25, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> Popular Consultants are big Meetup 2023 </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Alex Collins </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog-2.jpg" alt />
                  <div className="blog-top-button">
                    <a href="#"> DESIGN </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 20, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> Top 10 Most Populars Google Chrome app</a>
                      </Link>
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Amantha </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog-3.jpg" alt />
                  <div className="blog-top-button">
                    <a href="#"> DEVELOPMENT </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 21, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> How to Increase Business Products Sales </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Julia Moris </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog-4.jpg" alt />
                  <div className="blog-top-button">
                    <a href="#"> GRAPHIC </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 25, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> Popular Consultants are big Meetup 2023 </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Alex Collins </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog-5.jpg" alt />
                  <div className="blog-top-button">
                    <a href="#"> DESIGN </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 20, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> Top 10 Most Populars Google Chrome app</a>
                      </Link>
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Amantha </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog-6.jpg" alt />
                  <div className="blog-top-button">
                    <a href="#"> DEVELOPMENT </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 21, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> How to Increase Business Products Sales </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Julia Moris </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-4">
              <div className="widget-items mt-5 mt-lg-0 mb-40">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  method="get"
                >
                  <input
                    type="text"
                    className="src-input-box"
                    placeholder="Search Here"
                    name="s"
                    title="src-input-box"
                  />
                  <button className="src-icon" type="submit">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
              <div className="widget-items mb-40">
                <div className="widget-title">
                  <h2>Categories</h2>
                </div>
                <div className="catagory-item">
                  <ul>
                    <li className="hr-3">
                      <a href="#">Design</a>
                    </li>
                    <li className="hr-3">
                      <a href="#">Development</a>
                    </li>
                    <li className="hr-3">
                      <a href="#">Graphics</a>
                    </li>
                    <li className="hr-3">
                      <a href="#">Technology</a>
                    </li>
                    <li className="hr-3">
                      <a href="#">Tips</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget-items upp mb-40">
                <div className="widget-recent-post d-flex">
                  <div className="rpost-thumb">
                    <a href="#">
                      <img
                        src="assets/images/resource/footer1.png"
                        alt="post thumb"
                      />
                    </a>
                  </div>
                  <div className="rpost-content">
                    <div className="rpost-title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          <h4>Most Project with Your Software</h4>
                        </a>
                      </Link>
                      <span>January 01, 2023</span>
                    </div>
                  </div>
                </div>
                <div className="widget-recent-post d-flex hr-3">
                  <div className="rpost-thumb">
                    <a href="#">
                      <img
                        src="assets/images/resource/footer2.png"
                        alt="post thumb"
                      />
                    </a>
                  </div>
                  <div className="rpost-content">
                    <div className="rpost-title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          <h4>You have a Great Business Idea? </h4>
                        </a>
                      </Link>
                      <span>february 12, 2023</span>
                    </div>
                  </div>
                </div>
                <div className="widget-recent-post d-flex hr-3">
                  <div className="rpost-thumb">
                    <a href="#">
                      <img
                        src="assets/images/resource/footer1.png"
                        alt="post thumb"
                      />
                    </a>
                  </div>
                  <div className="rpost-content">
                    <div className="rpost-title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          <h4>How to Make Website WCAG Compliant? </h4>
                        </a>
                      </Link>
                      <span>January 10, 2023</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget-items mb-40">
                <div className="widget-title">
                  <h2>Tag Cloud</h2>
                </div>
                <div className="tag-item">
                  <a href="#">Bootstrap</a>
                  <a href="#">Business</a>
                  <a href="#">Corporate</a>
                  <a href="#">Portfolio</a>
                  <a href="#">Responsive</a>
                  <a href="#">Technology</a>
                </div>
              </div>
              <div className="widget-items mb-40">
                <div className="calender-area">
                  <div className="widget-title">
                    <h2>Calender</h2>
                  </div>
                  <div className="tag-item">
                    <div className="curr-month">
                      <b>january</b>
                    </div>
                    <div className="all-days">
                      <ul>
                        <li>S</li>
                        <li>M</li>
                        <li>T</li>
                        <li>W</li>
                        <li>T</li>
                        <li>F</li>
                        <li>S</li>
                      </ul>
                    </div>
                    <div className="all-date">
                      <ul></ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget-items widget-archieve mb-40">
                <div className="widget-title">
                  <h2>Archives</h2>
                </div>
                <p className="hr-3">
                  <a className="widget-archieve-item" href="#">
                    January 2023
                  </a>{" "}
                </p>
                <p className="hr-3">
                  <a className="widget-archieve-item" href="#">
                    Febraury 2023
                  </a>{" "}
                </p>
                <p className="hr-3">
                  <a className="widget-archieve-item" href="#">
                    March 2023
                  </a>{" "}
                </p>
                <p className="hr-3">
                  <a className="widget-archieve-item" href="#">
                    April 2023
                  </a>{" "}
                </p>
                <p className="hr-3">
                  <a className="widget-archieve-item" href="#">
                    May 2023
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
          {/*Pagination*/}
          <div>
            <div className="pagination mt-4">
              <PagginationFuntion
                setActive={setActive}
                active={active}
                state={state}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogList;

import Breadcumb from "@/src/components/Breadcumb";
import PagginationFuntion from "@/src/components/PagginationFuntion";
import Layout from "@/src/layout/Layout";
import { getPagination, pagination } from "@/src/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
const BlogGrid = () => {
  let sort = 3;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".single_box_", sort, active);
    let list = document.querySelectorAll(".single_box_");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layout>
      <Breadcumb pageName={"Blog Grid"} />
      <div className="blog-area style-two page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 single_box_">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog1.png" alt />
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
            </div>
            <div className="col-lg-4 col-md-6 single_box_">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog2.png" alt />
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
            <div className="col-lg-4 col-md-6 single_box_">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog3.png" alt />
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
            </div>
            <div className="col-lg-4 col-md-6 single_box_">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog-sm-1.jpg" alt />
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
            </div>
            <div className="col-lg-4 col-md-6 single_box_">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog-sm-2.jpg" alt />
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
            <div className="col-lg-4 col-md-6 single_box_">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog-sm-1.jpg" alt />
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
            </div>
            <div className="col-12">
              <div className="pagination justify-content-center mt-4">
                <PagginationFuntion
                  setActive={setActive}
                  active={active}
                  state={state}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogGrid;

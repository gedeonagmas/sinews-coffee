import { useEffect } from "react";
import { calender } from "../utils";

const BlogSidebar = () => {
  useEffect(() => {
    return () => {
      calender();
    };
  }, []);
  return (
    <div className="col-lg-4 col-md-8">
      <div className="widget-items mt-5 mt-lg-0 mb-40">
        <form onSubmit={(e) => e.preventDefault()} action="#" method="get">
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
              <img src="assets/images/resource/footer1.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              <a href="#">
                <h4>Most Project with Your Software</h4>
              </a>
              <span>January 01, 2023</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="#">
              <img src="assets/images/resource/footer2.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              <a href="#">
                <h4>You have a Great Business Idea? </h4>
              </a>
              <span>february 12, 2023</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="#">
              <img src="assets/images/resource/footer1.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              <a href="#">
                <h4>How to Make Website WCAG Compliant? </h4>
              </a>
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
  );
};
export default BlogSidebar;

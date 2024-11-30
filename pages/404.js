import Link from "next/link";
import { Fragment } from "react";
const E404 = () => {
  return (
    <Fragment>
      <div className="error-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-thumb">
                <img src="assets/images/resource/404.png" alt />
              </div>
              <div className="error-content">
                <h2>
                  <span>Sorry!</span> Page Not Found
                </h2>
                <p>
                  We can't find that page! The page you are <br />
                  looking for was never existed.
                </p>
              </div>
              <div className="error-search">
                <input type="text" name="search" placeholder="Search" />
                <button>
                  <i className="fas fa-search" />
                </button>
              </div>
              <div className="error-button">
                <Link legacyBehavior href="/">
                  <a>
                    <i className="fas fa-home" /> Back To Home
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default E404;

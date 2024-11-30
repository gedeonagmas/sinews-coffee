import { useEffect } from "react";
import { scrollTopFun } from "../utils";

const ScrollTop = () => {
  useEffect(() => {
    scrollTopFun();
  }, []);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="scroll-area">
      <div className="top-wrap">
        <div className="go-top-btn-wraper">
          <div className="go-top go-top-button" onClick={() => scrollTop()}>
            <i className="fas fa-arrow-up" />
            <i className="fas fa-arrow-up" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScrollTop;

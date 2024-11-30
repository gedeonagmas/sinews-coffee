import { Fragment } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const ProgressBar = ({ value }) => {
  return (
    <Fragment>
      <div className="circle_percent" data-percent={85}>
        <CircularProgressbar
          width={130}
          value={value}
          strokeWidth={6}
          styles={buildStyles({
            pathColor: "#FF3C00",
            trailColor: "#FFEAE3",
          })}
        />
        <div className="circle_inbox">
          <span className="percent_text">
            {value}
            <span>%</span>
          </span>
        </div>
      </div>
    </Fragment>
  );
};
export default ProgressBar;

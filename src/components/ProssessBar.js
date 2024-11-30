const ProssessBar = () => {
  return (
    <div className="prossess-ber-plugin pt-20">
      <span className="prosses-bar">Business Strategy</span>
      <div id="bar1" className="barfiller">
        <div className="tipWrap" style={{ display: "inline" }}>
          <span
            className="tip"
            style={{
              left: "65%",
              transition: "left 7s ease-in-out 0s",
            }}
          >
            65%
          </span>
        </div>
        <span
          className="fill"
          data-percentage={65}
          style={{
            background: "rgb(22, 181, 151)",
            width: "65%",
            transition: "width 7s ease-in-out 0s",
          }}
        />
      </div>
      <span className="prosses-bar">Technology Consulting</span>
      <div id="bar2" className="barfiller">
        <div className="tipWrap" style={{ display: "inline" }}>
          <span
            className="tip"
            style={{
              left: "90%",
              transition: "left 7s ease-in-out 0s",
            }}
          >
            90%
          </span>
        </div>
        <span
          className="fill my-class"
          data-percentage={90}
          style={{
            background: "rgb(22, 181, 151)",
            width: "90%",
            transition: "width 7s ease-in-out 0s",
          }}
        />
      </div>
      <span className="prosses-bar">Product Development</span>
      <div id="bar3" className="barfiller">
        <div className="tipWrap" style={{ display: "inline" }}>
          <span
            className="tip"
            style={{
              left: "80%",
              transition: "left 7s ease-in-out 0s",
            }}
          >
            80%
          </span>
        </div>
        <span
          className="fill my-class2"
          data-percentage={80}
          style={{
            background: "rgb(22, 181, 151)",
            width: "80%",
            transition: "width 7s ease-in-out 0s",
          }}
        />
      </div>
    </div>
  );
};
export default ProssessBar;

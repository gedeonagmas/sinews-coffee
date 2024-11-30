import { Fragment } from "react";

const PagginationFuntion = ({ setActive, state, active }) => {
  return (
    <Fragment>
      <a
        href="#"
        className="muted3-color"
        onClick={(e) => {
          e.preventDefault();
          setActive(active === 1 ? 1 : active - 1);
        }}
      >
        <i className="fas fa-angle-double-left" />
      </a>
      {/* {state &&
        state.map((s, i) => ( */}
      <a
        key={i}
        href="#"
        className={`${active === state ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setActive(state);
        }}
      >
        {state}
      </a>
      {/* ))} */}

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setActive(active === state.length ? state.length : active + 1);
        }}
      >
        <i className="fas fa-angle-double-right" />
      </a>
    </Fragment>
  );
};
export default PagginationFuntion;

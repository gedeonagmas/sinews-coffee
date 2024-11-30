import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
const Counter = ({ end, decimals, tag }) => {
  return (
    <CountUp
      end={end ? end : 100}
      duration={3}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <em className="counter" data-from="0" data-to={end} ref={countUpRef}>
            count
          </em>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;

import ConsenHead from "@/src/ConsenHead";
import Preloader from "@/src/layout/Preloader";
import "@/styles/globals.css";
import { Fragment, useState } from "react";
const App = ({ Component, pageProps }) => {
  const [loding, setLoding] = useState(true);
  setTimeout(() => {
    setLoding(false);
  }, 1500);

  return (
    <Fragment>
      <ConsenHead />
      <Preloader />
      {!loding && <Component {...pageProps} />}
    </Fragment>
  );
};
export default App;

import Link from "next/link";

const Breadcumb = ({ pageName, sub }) => {
  return (
    <div className="breadcumb-area d-flex align-items-center">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-12">
            <div className="breadcumb-content">
              <h1> {pageName} </h1>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li> {sub} </li>
              </ul>
            </div>
          </div>
          <div className="britcam-shape">
            <div className="breadcumb-content upp">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li> {sub} </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Breadcumb;

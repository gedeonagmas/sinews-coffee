import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
const CaseStudies = dynamic(
  () => import("@/src/components/isotope/CaseStudies"),
  {
    ssr: false,
  }
);
const Portfolio = () => {
  return (
    <Layout>
      <Breadcumb pageName={"Product"} />
      {/*==================================================*/}
      {/* Start consen case study Area */}
      {/*==================================================*/}
      <div className="case-study-area style-three">
        <div className="container">
          <CaseStudies />
        </div>
      </div>
    </Layout>
  );
};
export default Portfolio;

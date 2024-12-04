
import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import Preloader from "@/src/layout/Preloader";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const BlogDetails = () => {
  const router = useRouter();
  const { id } = router?.query;
  const [service, setService] = useState(); // Single service object
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [services, setServices] = useState();

  useEffect(() => {
    const fetchService = async () => {
      if (!id) return; // Skip fetch if id is not available
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/event_list`
        );
        const filteredService = response.data.find(
          (service) => service.id === Number(id)
        );
        setServices(response.data);
        setService(filteredService);
      } catch (error) {
        setError("Error fetching service data");
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  return (
    <Layout>
      <Breadcumb pageName={service?.eventName} sub={"Event & Blog Details"} />

      <div className="blog-section style-two details">
        <div className="container">
          {error && !loading && !service && <p>{error}</p>}
          {!service && !loading && <p>No services found.</p>}
          {loading ? (
            <Preloader />
          ) : (
            service && (
              <>
                <div className="row">
                  <div className="col-lg-8 col-md-12">
                    <div className="row">
                      <div className="col-lg-12 col-sm-12">
                        <div className="consen-service-details-box">
                          <div className="consen-service-thumb">
                            <div
                              className="postbox__thumb mb-2 w-img wow tpfadeUp"
                              data-wow-duration=".9s"
                              data-wow-delay=".5s"
                              style={{
                                position: "relative",
                                height: "300px",
                              }}
                            >
                              <Image
                                src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${service?.banner}`}
                                alt={service?.serviceName || "product Image"}
                                fill
                                style={{ objectFit: "cover" }}
                                objectFit="cover" // Ensures consistent aspect ratio
                              />
                            </div>
                          </div>
                          <div className="service-details-content">
                            <div className="service-page-title">
                              <h1> {service?.eventName}</h1>
                            </div>
                            <div className="serivce-details-desc">
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: service?.description,
                                }}
                              ></p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {JSON.parse(service?.images)?.map((e, i) => {
                        return (
                          <div className="col-lg-6 col-sm-6">
                            <div className="service-details-box">
                              <div key={i} className=" w-full ">
                                <figure
                                  style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "150px",
                                  }}
                                  className="image-box"
                                >
                                  <Image
                                    src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${e}`}
                                    alt={service?.title || "Event Image"}
                                    fill
                                    className="border"
                                    objectFit="cover" // Ensures consistent aspect ratio
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      <div className="col-lg-12">
                        <div className="service-details-content">
                          <div className="serivce-details-desc">
                            <p
                              className="pb-35"
                              dangerouslySetInnerHTML={{
                                __html: service?.details,
                              }}
                            ></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    {/* widget search */}

                    <div className="widget-categories-box">
                      {/* categories title */}
                      <div className="categories-title">
                        <h4> Other Event & News </h4>
                      </div>
                      {/* widget categories menu */}
                      <div className="widget-categories-menu">
                        <ul>
                          {services?.map((e, i) => {
                            return (
                              <li
                                style={{
                                  background:
                                    e?.id === service.id ? "bg-red" : "",
                                  color: e?.id === service.id ? "white" : "",
                                }}
                                className={
                                  e?.id === service?.id ? "active" : ""
                                }
                              >
                                <Link
                                  legacyBehavior
                                  href={`/blog-details?id=${e?.id}`}
                                >
                                  <a> {e?.eventName} </a>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    {/* categoreis thumb */}
                    <div className="widget-categories-thumb">
                      {/* widget categories content  */}
                      <div className="widget-categories-content text-center">
                        <div className="logo-thumb">
                          <Link legacyBehavior href="/index">
                            <a>
                              {" "}
                              <img src="assets/images/logo.png" alt />{" "}
                            </a>
                          </Link>
                        </div>
                        <div className="widget-title2">
                          <h3>Need Service?</h3>
                        </div>
                        <div className="widget-button">
                          <Link legacyBehavior href="/contact">
                            <a>
                              {" "}
                              <i className="bi bi-envelope" /> Contact Us{" "}
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </Layout>
  );
};
export default BlogDetails;

"use client";
import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    message: yup.string().required().label("Message"),
    phone: yup.string().required().label("phone"),
  })
  .required();

const Contact = () => {
  const [contacts, setContacts] = useState();

  useEffect(() => {
    const fetchCategory = async () => {
      const response2 = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/business-setup`
      );
      setContacts(response2?.data);
    };
    fetchCategory();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const INITIAL_STATE = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [contact, setContact] = useState(INITIAL_STATE);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/contacts`;
      const { name, email, phone, message } = contact;
      const payload = { full_name: name, email, phone, message };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      const notify = () =>
        toast("Comment sent successfully", { position: "top-center" });
      notify();
      reset();
      setPending(false);
      setMessage("Email Sent successfully.");
    } catch (error) {
      setMessage("Failed unable to send the email, Please try again!");
      setPending(false);
      console.log(error);
    }
  };

  return (
    <Layout>
      <Breadcumb pageName={"Contact Us"} />
      {/*==================================================*/}
      {/* Start Appoinment Section */}
      {/*===================================================*/}
      <div className="contact-us pt-90 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
              <div className="contact_from_box">
                <div className="contact_title pb-4">
                  <h3>Get In Touch</h3>
                </div>
                <form onSubmit={onSubmit} id="dreamit-form">
                  <div className="row">
                    <p>{message}</p>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          onChange={handleChange}
                          name="name"
                          placeholder="Full Name"
                        />
                        <p className="form_error">{errors.name?.message}</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="email"
                          onChange={handleChange}
                          name="email"
                          placeholder="Email Address"
                        />
                        <p className="form_error">{errors.email?.message}</p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          onChange={handleChange}
                          name="phone"
                          placeholder="Phone Number"
                        />
                        <p className="form_error">{errors.phone?.message}</p>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form_box mb-30">
                        <textarea
                          onChange={handleChange}
                          name="message"
                          id="message"
                          cols={30}
                          rows={10}
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                        <p className="form_error">{errors.message?.message}</p>
                      </div>
                      <div className="quote_button">
                        <button className="btn" type="submit">
                          {pending ? "Submitting..." : "Submit Now"}
                        </button>
                      </div>
                    </div>
                    <p className="form-messege mb-0 mt-10 text-center"></p>
                  </div>
                </form>

                <div id="status" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
              <div className="cda-content-area">
                <div className="cda-single-content d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Company Location</h4>
                    <p>{contacts?.address}</p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Telephone Number One</h4>
                    <p>{contacts?.phone1}</p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Telephone Number Two</h4>
                    <p>{contacts?.phone2}</p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Our Email Address</h4>
                    <p>
                      {contacts?.email} <br />
                    </p>
                  </div>
                </div>

                <div className="cda-single-content hr d-flex"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start Contact Location Section */}
      {/*===================================================*/}
      <div className="map-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
              <iframe
                src={contacts?.gmapUrl}
                width="1920"
                height="350"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>{" "}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;

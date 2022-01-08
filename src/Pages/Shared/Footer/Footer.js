import React from "react";
import icon from "../../../images/hr.png";

const Footer = () => {
  return (
    <>
      <div className="bg-dark p-3 text-white">
        <div className="py-5 d-lg-flex justify-content-around">
          <div>
            <div className="mb-3 d-flex justify-content-center">
              <img
                style={{
                  width: "40px",
                  backgroundColor: "#75d98e",
                  padding: "3px",
                  borderRadius: "8px",
                }}
                src={icon}
                alt=""
              />
              <span style={{ color: "#f57622" }} className="ms-1">
                .Pro
              </span>
            </div>
            <p className="mb-0">"We provide service,</p>
            <p className="mt-0">and best solutions"</p>
          </div>
          <div className="text-start">
            <p>About HR Pro</p>
            <p>Highly Manageable</p>
            <p>Add Employee</p>
            <p>Contact Us</p>
          </div>
          <div className="text-start">
            <p>Get Help</p>
            <p>Read FAQs</p>
            <p>Views Our Blogs</p>
            <p>Pay Us</p>
          </div>
        </div>
        <p>Follow Us</p>
        <p className="d-md-flex justify-content-center">
          <i className="fab fa-google me-3 me-lg-5"></i>
          <i className="fab fa-facebook me-3 me-lg-5"></i>
          <i className="fab fa-twitter me-3 me-lg-5"></i>
          <i className="fab fa-instagram-square me-3 me-lg-5"></i>
        </p>
      </div>
      <p className="mb-0 p-3 text-center text-white bg-primary">
        Copyright<i className="far fa-copyright"></i> 2022 Technext Limited All
        right reserved.
      </p>
    </>
  );
};

export default Footer;

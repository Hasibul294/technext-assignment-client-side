import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner d-flex justify-content-center flex-column align-items-center">
      <div className="banner-info">
        <div className="info-header">
          <h3 className="m-0">Welcome to</h3> <br />
          <h2 style={{ color: "#75d98e" }} className="fst-italic fw-bold">
            HR. <span style={{ color: "#f57622" }}>Pro</span>
          </h2>
        </div>
        <p className="text-start w-50 mx-auto">
          Human resource management is the strategic approach to the effective
          and efficient management of people in a company or organization such
          that they help their business gain a competitive advantage.
        </p>
      </div>
    </div>
  );
};

export default Banner;

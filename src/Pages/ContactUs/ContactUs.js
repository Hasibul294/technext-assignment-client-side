import React from "react";

const ContactUs = () => {
  return (
    <div id="contact">
      <title>Contact</title>
      <div className="container text-start py-3 mb-5">
        <div className="contact-header">
          <h2 className="text-center">Contact Us</h2>
          <p className="text-center">Let's Keep In Touch</p>
          <hr className="border-bottom border-4 border-success w-25 mx-auto" />
        </div>
        <div className="row g-2 my-5">
          <div className="col-md-4">
            <p className="mb-0 fw-bold">Contact Info.</p>
            <hr className="w-50" />
            <p>
              <i className="fas fa-phone-alt"></i> (+064)-342-68382
            </p>
            <p>
              <i className="fas fa-mobile-alt"></i> (+880)-184-55600
            </p>
            <p>
              <i className="far fa-envelope"></i>{" "}
              <a href="hasibulhasan294@gmail.com">hasibulhasan@gmail.com</a>
            </p>
          </div>
          <div className="col-md-8">
            <p className="mb-0 fw-bold">Drop Us A Line</p>
            <hr className="w-50 mb-4" />
            <form className="row g-3 bg-secondary bg-opacity-50 rounded pb-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Name
                </label>
                <input
                  required
                  type="name"
                  className="form-control"
                  id="inputEmail4"
                  name="user_name"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="inputPassword4"
                  name="user_email"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Subject
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  name="user_subject"
                />
              </div>
              <div className="col-12">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  required
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

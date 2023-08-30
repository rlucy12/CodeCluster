import React from "react";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Modular = () => {
  

  return (
    <>
      <div>
        <div style={{ margin: "1cm" }}>
          <img
            className="img-fluid"
            loading="eager"
            height={550}
            width="auto"
            src="https://ii3.pepperfry.com/assets/w23-pf-modular-page-banner-1280.jpg"
            alt="image alt image"
          />
        </div>
        <div
          style={{
            justifyContent: "space-around",
            display: "flex",
            height: "700px",
          }}
        >
          <div>
            <h3 style={{ margin: "0.5cm" }}>Why Pepperfry Modular?</h3>
            <div>
              <p style={{ margin: "0.5cm" }}>
                We Design Tailor-made Solutions for Your Home
              </p>
            </div>
            <div></div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "188px", height: "100px" }}>
                <img
                  src="https://ii1.pepperfry.com/assets/w23-pf-md-wide-variety.png"
                  alt=""
                  height="60px"
                />
                <p
                  style={{
                    width: "176px",
                    height: "40px",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Access a Wide Variety of Colours & Finishes
                </p>
              </div>
              <div style={{ width: "188px", height: "100px" }}>
                <img
                  src="https://ii2.pepperfry.com/assets/w23-pf-md-quote-now.png"
                  alt=""
                  height="60px"
                />
                <p
                  style={{
                    width: "176px",
                    height: "40px",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Get an Instant Quote Now
                </p>
              </div>
              <div style={{ width: "188px", height: "100px" }}>
                <img
                  src="https://ii3.pepperfry.com/assets/w23-pf-md-personalised.png"
                  alt=""
                  height="60px"
                />
                <p
                  style={{
                    width: "176px",
                    height: "40px",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Designs Personalized to your Needs
                </p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "188px", height: "100px" }}>
                <img
                  src="https://ii3.pepperfry.com/assets/w23-pf-md-payment-options.png"
                  alt=""
                  height="60px"
                />
                <p
                  style={{
                    width: "176px",
                    height: "40px",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Economical & Easy Payment Options
                </p>
              </div>
              <div style={{ width: "188px", height: "100px" }}>
                <img
                  src="https://ii2.pepperfry.com/assets/w23-pf-md-30-days.png"
                  alt=""
                  height="60px"
                />
                <p
                  style={{
                    width: "176px",
                    height: "40px",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Delivery & Installation Within 30 Days
                </p>
              </div>
              <div style={{ width: "188px", height: "100px" }}>
                <img
                  src="https://ii3.pepperfry.com/assets/w23-pf-md-support.png"
                  alt=""
                  height="60px"
                />
                <p
                  style={{
                    width: "176px",
                    height: "40px",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Post Installation Support
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 style={{ margin: "0.5cm" }}>Consult A Designer</h3>
            <div>
              <p
                style={{
                  width: "176px",
                  height: "40px",
                  fontSize: "12px",
                  fontFamily: "sans-serif",
                }}
              >
                Get an Interior Assistance and a Free Quote
              </p>
            </div>
            <div>
              <form>
                <div className="mb-3">
                  <input
                    type="name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Your Full Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email Id"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="OTP"
                  />
                </div>
                <div className="mb-3">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Your City</option>
                    <option value="1">Cuttack</option>
                    <option value="2">Bhubaneswar</option>
                    <option value="3">Konark</option>
                    <option value="4">Puri</option>
                    <option value="5">Bhawanipatna</option>
                    <option value="6">Balasore</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ backgroundColor: "orangered" }}
                >
                  Book a free consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modular;

// import Ratio from "react-bootstrap/Ratio";
import '../componenet/Seller.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Seller = () => {
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [password, passwordchange] = useState("");
    const [cpassword, cpasswordchange] = useState("");
    const [mno, mnochange] = useState("");
    const [pcode, pcodechange] = useState("");
    const [city, citychange] = useState("");
    const [state, statechange] = useState("");
    const [cname, cnamechange] = useState("");
    const [address, addresschange] = useState("");
    const [bno, bnochange] = useState("");
    const [gst, gstchange] = useState("");
    const [cat, catchange] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) => {
      e.preventDefault();
      let regob = { name, email, password,cpassword,mno,pcode,city,state,cname,address,gst,cat };
      // console.log(regobj);
      fetch("http://localhost:8000/seller", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regob),
      })
        .then((res) => {
          alert("Submition Success");
          navigate("/");
        })
        .catch((err) => {
          alert("Submition Failed");
        });
    };
    
  return (
    <div>
      <div class="image-container">
        <img
          loading="eager"
          src="https://ii1.pepperfry.com/assets/w23-sop-herosection-1280_1.jpg"
          alt="image alt text"
        />
      </div>
      <div className="one">
        <div className="two">
          <p>
            <b className="pone">Why Sell on Pepperfry? </b> ,<br></br>
            Showcase Your Products to 1.2 Crore Potential Customers Each Month
            Enjoy the Benefits of a Network of More than 200 Pepperfry Studios
            (Experience Stores) Pepperfry’s Logistics Network Delivers to 18000+
            Pincodes and Provides Assembly Services Get Expert Guidance on
            Market Trends from Our Category Managers Glimpse of Our Warehouses
          </p>
          <img
            src="https://ii1.pepperfry.com/assets/w23-sop-sellon-1280_1.jpg"
            className="im"
          ></img>
        </div>
        <div className="three">
          <p>
            <b className="pone">Multiple Shipment Models </b>
            <br></br>Pepperfry Fulfilled Quality Checks, Door To Door Shipping &
            Assembly at Customer Homes Managed by Pepperfry Manage Direct Ship
            Products Are Picked up from Your Location & Delivered to Customers
            through Logistics Service Providers Empaneled with Pepperfry Direct
            Ship Ship Directly to Customers Using Your Own Logistics Service
            Providers
          </p>
          <img
            src="https://ii1.pepperfry.com/assets/w23-sop-shipment-1280_1.jpg"
            className="im"
          ></img>
        </div>
        <div className="four">
          <form onSubmit={handlesubmit}>
            <div>
              <label>Name</label>
              <br></br>
              <input
                type="text"
                placeholder="Name"
                className="inpu"
                required
                value={name}
                onChange={(e) => namechange(e.target.value)}
              />{" "}
              <br></br>
              <label>Business Email Id</label>
              <br></br>
              <input
                type="email"
                placeholder="Business Email Id"
                className="inpu"
                required
                value={email}
                onChange={(e) => emailchange(e.target.value)}
              />
              <br></br>
              <label>Create Password</label>
              <br></br>
              <input
                type="password"
                className="inpu"
                placeholder="Create Password"
                required
                value={password}
                // value={name}
                onChange={(e) => passwordchange(e.target.value)}
              />
              <br></br>
              <label>Re-enter Password</label>
              <br></br>
              <input
                type="text"
                className="inpu"
                placeholder="Re-enter Password"
                required
                value={cpassword}
                onChange={(e) => cpasswordchange(e.target.value)}
              />
              <br></br>
              <label>Mobile Number</label>
              <br></br>
              <input
                type="number"
                className="inpu"
                placeholder="Mobile Number"
                required
                value={mno}
                onChange={(e) => mnochange(e.target.value)}
              />
              <br></br>
              <label>PinCode</label>
              <br></br>
              <input
                type="number"
                className="inpu"
                placeholder="Pincode"
                required
                value={pcode}
                onChange={(e) => pcodechange(e.target.value)}
              />
              <br></br>
              <label>City</label>
              <br></br>
              <input
                type="text"
                className="inpu"
                placeholder="City"
                required
                value={city}
                onChange={(e) => citychange(e.target.value)}
              />
              <br></br>
              <label>State</label>
              <br></br>
              <input
                type="text"
                className="inpu"
                placeholder="State"
                required
                value={state}
                onChange={(e) => statechange(e.target.value)}
              />
              <br></br>
              <label>Select Company Type</label>
              <br></br>
              <select
                required
                value={cname}
                onChange={(e) => cnamechange(e.target.value)}
              >
                <option>Individual</option>
                <option>Sole Proprietorship Concern</option>
                <option>Partnership Firm - registered / Unregistered</option>
                <option>One Person Company</option>
                <option>Private Company</option>
                <option>Public Limited Comapany - Unlisted & Listed</option>
                <option>Limited Liability Partnership</option>
                <option>Hindu Undivided Family (HUF)</option>
                <option>Foreign Company</option>
                <option>Trust</option>
              </select>
              <br></br>
              <label>Business Phone Number</label>
              <br></br>
              <input
                value={bno}
                onChange={(e) => bnochange(e.target.value)}
                required
                type="number"
                className="inpu"
                placeholder="Business Phone Number"
              />
              <br></br>
              <label>GST Number</label>
              <br></br>
              <input
                value={gst}
                onChange={(e) => gstchange(e.target.value)}
                type="number"
                className="inpu"
                placeholder="GST Number"
                required
              />
              <br></br>
              <label>Select Category</label>
              <br></br>
              <select
                required
                value={cat}
                onChange={(e) => catchange(e.target.value)}
              >
                <option>Furniture</option>
                <option>Furnishings</option>
                <option>Mattresses</option>
                <option>Home Decor</option>
                <option>Lamps and Lighting</option>
                <option>Gift card</option>
                <option>Appliances</option>
                <option>Kitchen and Dining</option>
                <option>Deals</option>
                <option>Home Utility</option>
                <option>Modular Furniture</option>
                <option>Sofas and Seating</option>
              </select>
              {/* <input type="file" onChange={handleChange} />
            <img src={file} /> */}
              <br></br>
              <br></br>
              <br></br>
              <button type="submit" className="inpu1">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <h1 className="head">MEET OUR SELLER</h1>
      <div className="one">
        <div
          className="two"
          style={{ height: "500px", backgroundColor: "white" }}
        >
          <img
            src="https://ii1.pepperfry.com/assets/w23-become-seller-testimonial1-1280_1.jpg"
            width="400px"
          ></img>
          <p>
            <b>Diya Kapoor | Kapoor E-Illuminations</b>
            <br></br>
            <br></br> Kapoor E-Illuminations, a subsidiary of Kapoor Lamp Shades
            joined hands with Pepperfry 6 years ago and it has been a great
            learning curve all the way along. PF team has always been supportive
            and helped us in understanding customer needs, developing new
            products accordingly and in the process we have been successful in
            spreading happiness to our valued customer base
          </p>
        </div>

        <div
          className="three"
          style={{ height: "500px", backgroundColor: "white" }}
        >
          <img
            src="https://ii1.pepperfry.com/assets/w23-become-seller-testimonial2-1280_1.jpg"
            width="400px"
          ></img>
          <p>
            <b>Dhaval Shah | Furnitech Seating systems</b>
            <br></br>
            <br></br> Dhaval Shah | Furnitech Seating systems Furnitech seating
            systems , was earlier limited to dealer network in select states for
            selling their products . But when We started selling on Pepperfry in
            2015, it really opened up the audience for us . The kind of reach
            and popularity that Pepperfry has in India as an online marketplace
            , has expanded our sales to every corner of the country .
          </p>
        </div>
        <div
          className="four"
          style={{
            height: "500px",
            backgroundColor: "white",
            marginTop: "10px",
          }}
        >
          <img
            src="https://ii1.pepperfry.com/assets/w23-become-seller-testimonial3-1280_1.jpg"
            width="400px"
          ></img>
          <p>
            <b>Kirit Joshi | Spacewood</b>
            <br></br>
            <br></br> Over 9 years of Pepperfry and Spacewood association has
            been built on mutual strengths. Our brand principles, ethics, vision
            and mission have been well aligned to take this memorable journey,
            to even higher and better benchmarks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Seller;

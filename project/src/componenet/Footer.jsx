import "../componenet/Footer.css"
const Footer = () => {
    return (
      <>
        {/* Remove the container if you want to extend the Footer to full width. */}
        <div className="container my-5">
          {/* Footer */}
          <footer
            className="text-center text-lg-start text-white"
            style={{ backgroundColor: "#3e4551" }}
          >
            {/* Grid container */}
            <div className="container p-4 pb-0">
              {/* Section: Links */}
              <section className="">
                {/*Grid row*/}
                <div className="row">
                  {/*Grid column*/}
                  {/* <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">FOOTER CONTENT</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae modi cum ipsam ad, illo possimus laborum ut
                      reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur
                      eaque? Reiciendis assumenda iusto sapiente inventore
                      animi?
                    </p>
                  </div> */}
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Corporate</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="https://www.pepperfry.ltd/" className="text-white">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pepperfry.ltd/investor-relations/" className="text-white">
                          Corporate Governance
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pepperfry.ltd/" className="text-white">
                          Papperfry in the News
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pepperfry.com/pages/careers.html?type=footer" className="text-white">
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Useful Links</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="https://www.pepperfry.com/form/pepperfry-gift-cards.html?type=footer" className="text-white">
                          Explore Gift Cards
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pepperfry.com/form/partners-bulkorder.html?type=footer" className="text-white">
                          Buy in Bulk
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pepperfry.com/pages/brands.html?type=footer" className="text-white">
                          Discover Our Brands
                        </a>
                      </li>
                      <li>
                        <a href="https://blog.pepperfry.com" className="text-white">
                          Check Out Bonhomie, Our Blog
                        </a>
                      </li>
                      <li>
                        <a href="https://studios.pepperfry.com" className="text-white">
                          Find a Studio
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Partner With Us</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="https://www.pepperfry.com/form/partners-partnerwithus.html" className="text-white">
                          Sell on Papperfry
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pepperfry.com/form/partners-franchisee.html" className="text-white">
                          Become a Franchisee
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pepperfry.com/form/partners-channelpartner.html" className="text-white">
                          Become our Channel Partner
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pepperfry.com/form/partners-pephomie.html" className="text-white">
                          Become Our Pep Homie
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pepperfry.com/tnc/marketplace_policies.html" className="text-white">
                          Our Marketplace Policies
                        </a>
                      </li>
                      <li>
                        <a href="https://seller.pepperfry.com/merchant/login" className="text-white">
                          Merchant Dashboard Login
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Need Help ?</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="https://www.pepperfry.com/customer/needhelp/faq" className="text-white">
                          FAQs
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pepperfry.com/customer/needhelp/policies" className="text-white">
                          Policies
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pepperfry.com/customer/needhelp/contactus" className="text-white">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Download Our App</h5>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/web22-footer-apple-appstore-logo_2x.png" />
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/web22-footer-google-playstore-logo_2x.png" />
                  </div>
                  {/*Grid column*/}
                </div>
                {/*Grid row*/}
              </section>
              {/* Section: Links */}
              <hr className="mb-4" />
              {/* Section: CTA */}
              <section className="div">
                <div className="one">
                  <p>
                    <b>Popular Categories</b>
                    <br></br>
                    Sofas,Sectional Sofas,Sofa Sets,Queen Size Beds,King Size
                    Beds,Coffee Tables,Dining Sets,Recliners,Sofa Cum
                    Beds,Rocking Chairs,Cabinets & Sideboards,Book Shelves,TV &
                    Media Units,Wardrobes,Outdoor Furniture,Bar Cabinets,Wall
                    Shelves,Photo Frames,Bed Sheets,Table Linen,Study
                    Tables,Office Furniture,Dining Tables,Carpets,Wall Art
                  </p>
                </div>
                <div className="one" style={{ width: "350px" }}>
                  <p>
                    <b>Popular Brands</b>
                    <br></br>
                    Mintwud,Woodsworth,CasaCraft,Amberville
                    ,Mudramark,Bohemiana,Clouddio,Spacewood, Globia
                    Creations,Febonic,@home,Durian,
                    Evok,Hometown,Nilkamal,Crystal,Furnitech,
                    Bluewud,Duroflex,Sleepyhead,Green Soul,Orange Tree
                  </p>
                </div>
                <div className="one" style={{ width: "350px" }}>
                  <p>
                    <b>Popular cities </b>
                    Bengaluru,Mumbai,Navi,Mumbai,Delhi,Hyderabad,Pune,
                    Chennai,Gurgaon,Kolkata,Noida,Goa,Ghaziabad,
                    Faridabad,Jaipur,Lucknow,Kochi,Visakhapatnam,
                    Chandigarh,Vadodara,Nagpur,Thiruvananthapuram,
                    Indore,Mysore,Bhopal,Surat,Jalandhar,Patna,
                    Ludhiana,Ahmedabad,Nashik,Madurai,Kanpur, Aurangabad
                  </p>
                </div>
              </section>
              {/* Section: CTA */}
              <hr className="mb-4" />
              {/* Section: Social media */}
              <section className="mb-4 text-center">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.facebook.com/Pepperfry"
                  role="button"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                {/* Twitter */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://twitter.com/pepperfry"
                  role="button"
                >
                  <i className="fab fa-twitter" />
                </a>
                {/* Google */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.youtube.com/user/Pepperfrytv"
                  role="button"
                >
                  <i className="fab fa-google" />
                </a>
            
              </section>
              {/* Section: Social media */}
            </div>
            {/* Grid container */}
            {/* Copyright */}
            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            ></div>
            {/* Copyright */}
          </footer>
          {/* Footer */}
        </div>
        {/* End of .container */}
      </>
    );
}

export default Footer;
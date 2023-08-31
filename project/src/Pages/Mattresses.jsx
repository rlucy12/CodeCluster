import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleProdPage from "../componenet/SingleProdPage";

const Mattresses = () => {
  const api = "http://localhost:3000/prods";
  const [fetchedData, setfetchedData] = useState([]);
  const [filterVal, setFilterVal] = useState([]);
  async function fetchData() {
    let res = await fetch(api);
    let res1 = await res.json();
    console.log(res1, "res1");
    setfetchedData(res1);
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const category = fetchedData.filter(
      (el) => el.category === "Mattresses"
    );
    setFilterVal(category);
  }, [fetchedData]);

  const navigate = useNavigate();
  function nav(id) {
    navigate(`/product/${id}`);
  }
  
  function navcart(product) {
    fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Product added to cart:", data);
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  }

  function addToWish(product) {
    fetch("http://localhost:5000/wish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Product added to cart:", data);
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  }
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <div id="container" style={{ margin: "1cm" }}>
        <div style={{ display: "flex" }}>
          <img
            className="img-fluid"
            loading="eager"
            height={550}
            width="auto"
            src="https://ii1.pepperfry.com/assets/8970448c-ab07-4fd8-a1cc-3a19ece11f5f.jpg"
            alt="image alt image"
          />
          <img
            className="img-fluid"
            loading="eager"
            height={550}
            width="auto"
            src="https://ii1.pepperfry.com/assets/8970448c-ab07-4fd8-a1cc-3a19ece11f5f.jpg"
            alt="image alt image"
          />
        </div>
        <div className="fourthDiv" style={{ margin: "1cm" }}>
          <div>
            <h4
              id="frydeal"
              style={{ textAlign: "center", color: "brown", margin: "1cm" }}
            >
              Shop Best Sellers
            </h4>
          </div>
          <div
            id="fourthdiv"
            className="row row-cols-1 row-cols-md-3 g-4"
            style={{ justifyContent: "space-around" }}
          >
            {filterVal.slice(0, 6).map((e) => (
              <div className="card" style={{ width: "18rem" }}>
                <span>
                  <div>
                    <a onClick={() => addToWish(e)}>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs88ap2H-nGBMBxIz9MaeWx8XvqmNYQrsinw&usqp=CAU"
                        width="30x"
                        height="30px"
                      ></img>
                    </a>
                  </div>
                  <img
                    className="object-fit-sm-contain border rounded"
                    // className="rounded float-start"
                    // className="img-fluid"
                    id="fourthdivimg"
                    src={e.image}
                    alt={e.title}
                    style={{ height: 230, width: 230 }}
                  />
                  <p>{e.title}</p>
                  <p>Price: Rs.{e.price}</p>
                  <div style={{ display: "flex" }}>
                    <button
                      type="button"
                      className="btn btn-outline-info btn-sm btn-font-size-sm"
                      onClick={() => nav(e.id)}
                      style={{
                        color: "#F94C10",
                        borderColor: "#F94C10",
                        marginRight: "1cm",
                      }}
                    >
                      Buy Now
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm btn-font-size-sm"
                      onClick={() => navcart(e)}
                      style={{
                        backgroundColor: "#F94C10",
                        borderColor: "#F94C10",
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog"
                      style={{
                        width: "200px",
                        backgroundColor: "black",
                        color: "#9D44C0",
                        fontSize: "20px",
                      }}
                    >
                      <div className="modal-content">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          style={{ marginLeft: "170px", height: "20px" }}
                        ></button>

                        <div className="modal-body" style={{ fontWeight: "bold" }}>
                          Added To Cart
                        </div>
                      </div>
                    </div>
                  </div>
                </span>

                {/* <p>Description: {e.description}</p> */}
                {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
              </div>
            ))}
          </div>
        </div>
        <div id="fifthDiv" style={{ margin: "1cm" }}>
          <div>
            <h4
              id="frydeal"
              style={{ textAlign: "center", color: "brown", margin: "1cm" }}
            >
              Explore Most Wanted
            </h4>
          </div>
          <div
            id="fifthdiv"
            className="row row-cols-1 row-cols-md-3 g-4"
            style={{ justifyContent: "space-around" }}
          >
            {filterVal.slice(7, 10).map((e) => (
              <div className="card" style={{ width: "18rem" }}>
                <div>
                  <a onClick={() => addToWish(e)}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs88ap2H-nGBMBxIz9MaeWx8XvqmNYQrsinw&usqp=CAU"
                      width="30x"
                      height="30px"
                    ></img>
                  </a>
                </div>
                <img
                  // className="object-fit-sm-contain border rounded"
                  className="img-fluid"
                  id="fifthdivimg"
                  src={e.image}
                  alt={e.title}
                  style={{ height: 230, width: 230 }}
                />
                <p>{e.title}</p>
                <p>Price: Rs.{e.price}</p>
                <div style={{ display: "flex" }}>
                  <button
                    type="button"
                    className="btn btn-outline-info btn-sm btn-font-size-sm"
                    onClick={() => nav(e.id)}
                    style={{
                      color: "#F94C10",
                      borderColor: "#F94C10",
                      marginRight: "1cm",
                    }}
                  >
                    Buy Now
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm btn-font-size-sm"
                    onClick={() => navcart(e)}
                    style={{
                      backgroundColor: "#F94C10",
                      borderColor: "#F94C10",
                    }}
                  >
                    Add To Cart
                  </button>
                </div>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog"
                    style={{
                      width: "200px",
                      backgroundColor: "black",
                      color: "#9D44C0",
                      fontSize: "20px",
                    }}
                  >
                    <div className="modal-content">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        style={{ marginLeft: "170px", height: "20px" }}
                      ></button>

                      <div className="modal-body" style={{ fontWeight: "bold" }}>
                        Added To Cart
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id="seventhDiv"
          className="row row-cols-1 row-cols-md-3 g-4"
          style={{ justifyContent: "space-around" }}
        >
          {filterVal.map((e) => (
            <div className="card" style={{ width: "18rem" }}>
              <div>
                <a onClick={() => addToWish(e)}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs88ap2H-nGBMBxIz9MaeWx8XvqmNYQrsinw&usqp=CAU"
                    width="30x"
                    height="30px"
                  ></img>
                </a>
              </div>
              <img
                // className="object-fit-sm-contain border rounded"
                className="img-fluid"
                id="seventhdivimg"
                src={e.image}
                alt={e.title}
                style={{ height: 230, width: 230 }}
              />
              <p>{e.title}</p>
              <p>Price: Rs.{e.price}</p>
              <div style={{ display: "flex" }}>
                <button
                  type="button"
                  className="btn btn-outline-info btn-sm btn-font-size-sm"
                  onClick={() => nav(e.id)}
                  style={{
                    color: "#F94C10",
                    borderColor: "#F94C10",
                    marginRight: "1cm",
                  }}
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm btn-font-size-sm"
                  onClick={() => navcart(e)}
                  style={{
                    backgroundColor: "#F94C10",
                    borderColor: "#F94C10",
                  }}
                >
                  Add To Cart
                </button>
              </div>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div
                  class="modal-dialog"
                  style={{
                    width: "200px",
                    backgroundColor: "black",
                    color: "#9D44C0",
                    fontSize: "20px",
                  }}
                >
                  <div class="modal-content">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      style={{ marginLeft: "170px", height: "20px" }}
                    ></button>

                    <div class="modal-body" style={{ fontWeight: "bold" }}>
                      Added To Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Mattresses;

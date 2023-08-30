import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SingleProdPage from "../componenet/SingleProdPage";

const Appliances = () => {
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
    const category = fetchedData.filter((el) => el.category === "Appliances");
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
        console.log("Product added to cart:", data);
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
        <div>
          <img
            className="img-fluid"
            loading="eager"
            height={550}
            width="auto"
            src="https://ii3.pepperfry.com/assets/a831d4_1676546293481_Appliances_banner_16feb_1280.jpg"
            alt="image alt image"
          />
        </div>
        <div style={{ margin: "1cm" }}>
          <h4 style={{ textAlign: "center", color: "brown" }}>
            Deals of the day
          </h4>
        </div>
        <div
          id="secondDiv"
          style={{
            height: "122.8",
            width: "1400",
            margin: "1cm 0cm 0cm 0cm",
            marginRight: "1px",
            display: "flex",
            // flexWrap:"wrap",
          }}
        >
          <div className="seconddiv" style={{ padding: "0px 6px" }}>
            <img
              className="img-fluid"
              // width={458}
              height="122.8"
              src="https://ii3.pepperfry.com/assets/f62fa1_1676902249625_furnishing_1280_deal_17feb_1.jpg"
              alt=""
            />
          </div>
          <div className="seconddiv" style={{ padding: "0px 6px" }}>
            <img
              className="img-fluid"
              // width={458}
              height="122.8"
              src="https://ii3.pepperfry.com/assets/fa4aae_1676902262736_furnishing_1280_deal_17feb_2.jpg"
              alt=""
            />
          </div>
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
                <span className="border">
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
                      className="btn btn-primary btn-sm btn-font-size-sm"
                      onClick={() => nav(e.id)}
                    >
                      Buy Now
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm btn-font-size-sm"
                      onClick={() => navcart(e)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </span>

                {/* <p>Description: {e.description}</p> */}
                {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
              </div>
            ))}
          </div>
        </div>
        <div id="seventhDiv" style={{ margin: "5cm" }}>
          <div
            className="row row-cols-1 row-cols-md-3 g-4"
            style={{ justifyContent: "space-around" }}
          >
            {filterVal.map((e) => (
              <div className="card" style={{ width: "18rem" }}>
                <div>
                  <a onClick={() => addToWish(e)}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs88ap2H-nGBMBxIz9MaeWx8XvqmNYQrsinw&usqp=CAU"
                      width="30px"
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
                    className="btn btn-primary btn-sm btn-font-size-sm"
                    onClick={() => nav(e.id)}
                  >
                    Buy Now
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm btn-font-size-sm"
                    onClick={() => navcart(e)}
                  >
                    Add To Cart
                  </button>
                </div>

                {/* <p>Description: {e.description}</p> */}
                {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Appliances;

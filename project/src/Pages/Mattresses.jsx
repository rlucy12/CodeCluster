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
  function navcart() {
    navigate(`/product/${id}`);
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
            height={450}
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
          <div className="fourthdiv">
            {filterVal.slice(0, 6).map((e) => (
              <div>
                <span className="border">
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
                  <p>Price: ${e.price}</p>
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
          <div className="fifthdiv" style={{ display: "flex" }}>
            {filterVal.slice(7, 10).map((e) => (
              <div>
                <img
                  // className="object-fit-sm-contain border rounded"
                  className="img-fluid"
                  id="fifthdivimg"
                  src={e.image}
                  alt={e.title}
                  style={{ height: 230, width: 230 }}
                />
                <p>{e.title}</p>
                <p>Price: ${e.price}</p>
                <div style={{ display: "flex" }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => nav(e.id)}
                  >
                    Buy Now
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={navcart}
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
        <div id="seventhDiv">
          {filterVal.map((e) => (
            <div>
              <img
                // className="object-fit-sm-contain border rounded"
                className="img-fluid"
                id="seventhdivimg"
                src={e.image}
                alt={e.title}
                style={{ height: 230, width: 230 }}
              />
              <p>{e.title}</p>
              <p>Price: ${e.price}</p>
              <div style={{ display: "flex" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => nav(e.id)}
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={navcart}
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
    </>
  );
};
export default Mattresses;

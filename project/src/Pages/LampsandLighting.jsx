import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleProdPage from "../componenet/SingleProdPage";

const LampsandLighting = () => {
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
      (el) => el.category === "Lamps and Lighting"
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
            height={550}
            width="auto"
            src="https://ii1.pepperfry.com/assets/379e84bb-e779-4479-a3d0-b37b0fb20968.jpg"
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
              src="https://ii1.pepperfry.com/assets/5edf7441-b8b8-4b1b-b0a6-8412676fd3e1.jpg"
              alt=""
            />
          </div>
          <div className="seconddiv" style={{ padding: "0px 6px" }}>
            <img
              className="img-fluid"
              // width={458}
              height="122.8"
              src="https://ii1.pepperfry.com/assets/6eec63e3-a6ce-4b48-9da8-419b9cb9a54b.jpg"
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
                </span>

                {/* <p>Description: {e.description}</p> */}
                {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
              </div>
            ))}
          </div>
        </div>
        <div id="seventhDiv">
          <div>
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
      </div>
    </>
  );
};
export default LampsandLighting;

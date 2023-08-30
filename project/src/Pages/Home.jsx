import React from "react";
import { useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
import "../Pages/home.css";
import SingleProdPage from "../componenet/SingleProdPage";
const Home = () => {
  

    const api = "http://localhost:3000/prods";
    const [fetchedData, setfetchedData] = useState([]);

    async function fetchData() {
      let res = await fetch(api);
      let res1 = await res.json();
      console.log(res1, "res1");
      setfetchedData(res1);
    }
    useEffect(() => {
      fetchData();
    }, []);

    // const nav = useNavigate();
    
    function nav(id) {
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
            src="https://ii1.pepperfry.com/assets/c1ff96a1-598f-4310-a474-609c600c729f.jpg"
            alt="image alt image"
          />
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
              width={458}
              height="122.8"
              src="https://ii2.pepperfry.com/assets/1ec35dcb-4b69-4bb8-a3c3-8d57d970a6af.jpg"
              alt=""
            />
          </div>
          <div className="seconddiv" style={{ padding: "0px 6px" }}>
            <img
              className="img-fluid"
              width={458}
              height="122.8"
              src="https://ii3.pepperfry.com/assets/4e0f2d20-9b93-4937-a207-8b475e649446.jpg"
              alt=""
            />
          </div>
          <div className="seconddiv" style={{ padding: "0px 6px" }}>
            <img
              className="img-fluid"
              width={458}
              height="122.8"
              src="https://ii1.pepperfry.com/assets/a6abb7d7-816f-4f77-8929-4c32a20f4d90.jpg"
              alt=""
            />
          </div>
        </div>
        <div id="thirddiv" style={{ margin: "1cm 0cm" }}>
          {/* <img
            width={1407}
            height="100%"
            src="https://ii3.pepperfry.com/assets/bbd76aff-f065-40f9-812b-de730b000496.jpg"
            alt=""
          /> */}
          <img
            src="https://ii3.pepperfry.com/assets/bbd76aff-f065-40f9-812b-de730b000496.jpg"
            className="img-fluid"
            alt=""
            height="auto"
            max-width="100%"
          ></img>
        </div>
        <div className="fourthDiv" style={{ margin: "1cm" }}>
          <div>

            <h4
              id="frydeal"
              style={{ textAlign: "center", color: "brown", margin: "1cm" }}
            >

              Shop What The Fry Deals
            </h4>
          </div>
          <div className="fourthdiv">
            {fetchedData.slice(0, 6).map((e) => (
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
                    {/* <button
                      type="button"
                      className="btn btn-primary"
                      onClick={navcart}
                    >
                      Add To Cart
                    </button> */}
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
          <div className="fifthdiv">
            {fetchedData.slice(7, 10).map((e) => (
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
                  {/* <button
                    type="button"
                    className="btn btn-primary"
                    onClick={navcart}
                  >
                    Add To Cart
                  </button> */}
                </div>

                {/* <p>Description: {e.description}</p> */}
                {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
              </div>
            ))}
          </div>
          <div className="fifthdiv">
            {fetchedData.slice(10, 13).map((e) => (
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
                  {/* <button
                    type="button"
                    className="btn btn-primary"
                    onClick={navcart}
                  >
                    Add To Cart
                  </button> */}
                </div>

                {/* <p>Description: {e.description}</p> */}
                {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
              </div>
            ))}
          </div>
        </div>
        <div id="seventhDiv">
          <div>

            <h3 style={{ textAlign: "center", color: "brown", margin: "1cm" }}>

              Discover Our Newest Arrivals
            </h3>
          </div>
          <div className="seventhdiv">
            {fetchedData.slice(14, 18).map((e) => (
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
                  {/* <button
                    type="button"
                    className="btn btn-primary"
                    onClick={navcart}
                  >
                    Add To Cart
                  </button> */}
                </div>

                {/* <p>Description: {e.description}</p> */}
                {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
              </div>
            ))}
          </div>
        </div>
        <div id="eightthDiv" style={{ margin: "1cm" }}>
          <div>
       
            <h4
              id="frydeal"
              style={{ textAlign: "center", color: "brown", margin: "1cm" }}
            >

              Explore Most Wanted
            </h4>
          </div>
          <div className="eightthdiv">
            {fetchedData.slice(1, 4).map((e) => (
              <div>
                <img
                  // className="object-fit-sm-contain border rounded"
                  className="img-fluid"
                  id="eightthdivimg"
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
                  {/* <button
                    type="button"
                    className="btn btn-primary"
                    onClick={navcart}
                  >
                    Add To Cart
                  </button> */}
                </div>

                {/* <p>Description: {e.description}</p> */}
                {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
              </div>
            ))}
          </div>
          <div className="eightthdiv">
            {fetchedData.slice(17, 20).map((e) => (
              <div>
                <img
                  // className="object-fit-sm-contain border rounded"
                  className="img-fluid"
                  id="eightthdivimg"
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
                  {/* <button
                    type="button"
                    className="btn btn-primary"
                    onClick={navcart}
                  >
                    Add To Cart
                  </button> */}
                </div>

                {/* <p>Description: {e.description}</p> */}
                {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
              </div>
            ))}
          </div>
        </div>
        <div id="ninthDiv">
          <div>

            <h3 style={{ textAlign: "center", color: "brown", margin: "1cm" }}>

              Check Out These Collections
            </h3>
            <div id="ninthdiv">
              {fetchedData.slice(5, 8).map((e) => (
                <div>
                  <img
                    // className="object-fit-sm-contain border rounded"
                    className="img-fluid"
                    id="eightthdivimg"
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
                    {/* <button
                      type="button"
                      className="btn btn-primary"
                      onClick={navcart}
                    >
                      Add To Cart
                    </button> */}
                  </div>

                  {/* <p>Description: {e.description}</p> */}
                  {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;


import React from "react";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SofasAndSeatings = () => {
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
      const category = fetchedData.filter((el) => 
      el.category === "Sofas And Seatings"
      );
      setFilterVal(category);
    }, [fetchedData]);


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

            src="https://ii1.pepperfry.com/assets/408386f0-4a34-4f52-bdd0-6ca1d2a9a6bf.jpg"
            alt="image alt image"
          />
        </div>
        <div style={{ margin: "1cm" }}>
          <h4 style={{ textAlign: "center", color: "brown" }}>
            Care For Your Furniture
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
            
              // width={458}
              height="122.8"
              src="https://ii3.pepperfry.com/assets/24315272-4907-4135-88f0-bf77a3f1a838.jpg"

              alt=""
            />
          </div>
          <div className="seconddiv" style={{ padding: "0px 6px" }}>
            <img
              className="img-fluid"

              width={458}
             
              // width={458}
              height="122.8"
              src="https://ii3.pepperfry.com/assets/9f064768-808f-42a3-bc7b-f7923a750179.jpg"

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
              style={{ textAlign: "center", color: "brown", margin: "1cm" }}>
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
              style={{ textAlign: "center", color: "brown", margin: "1cm" }}>

              Explore Most Wanted
            </h4>
          </div>
          <div className="fifthdiv">

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

                {/* <p>Description: {e.description}</p> */}
                {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
              </div>
            ))}
          </div>
          <div className="fifthdiv">
  
            {filterVal.map((e) => (

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

                {/* <p>Description: {e.description}</p> */}
                {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
              </div>
            ))}
          </div>
        </div>

        <div id="seventhDiv">
          <div>
            <h3 style={{ textAlign: "center", color: "brown" }}>
              Discover Our Newest Arrivals
            </h3>
          </div>
          <div className="seventhdiv">
            {filterVal.slice(14, 18).map((e) => (
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

                {/* <p>Description: {e.description}</p> */}
                {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
              </div>
            ))}
          </div>
        </div>
        <div id="eightthDiv" style={{ margin: "1cm" }}>
          <div>
            <h4 id="frydeal" style={{ textAlign: "center", color: "brown" }}>
              Explore Most Wanted
            </h4>
          </div>
          <div className="eightthdiv">
            {filterVal.slice(1, 4).map((e) => (
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

                {/* <p>Description: {e.description}</p> */}
                {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
              </div>
            ))}
          </div>
          <div className="eightthdiv">
            {filterVal.slice(17, 20).map((e) => (
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

                {/* <p>Description: {e.description}</p> */}
                {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
              </div>
            ))}
          </div>
        </div>
        <div id="ninthDiv">
          <div>
            <h3 style={{ textAlign: "center", color: "brown" }}>
              Check Out These Collections
            </h3>
            <div id="ninthdiv">
              {filterVal.slice(5, 8).map((e) => (
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
export default SofasAndSeatings;

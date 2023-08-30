
import React from "react";
import { useEffect, useState } from "react";
const Cart = () => {
  
  const api = "http://localhost:4000/posts";
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        
        let res = await fetch(api);
        let res1 = await res.json();
        // console.log(data);
        setProductData(res1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

    // const calculateTotal = (e) => {
    //   return productData.reduce((total, e) => total + e.price, 0);
    // };

    const deleteItem = async (id) => {
      try {
        await fetch(`${api}/${id}`, {
          method: "DELETE",
        });
        setProductData(productData.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    };

  return (
    <div style={{backgroundColor:"#F8D6FA"}}>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "#3f1652",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        Your Cart
      </h1>
      {productData.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <span className="border">
            {productData.map((e) => (
              <div>
                <span className="border">
                  <img
                    className="object-fit-sm-contain border rounded"
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
                      className="btn btn-primary"
                      onClick={() => nav(e.id)}
                    >
                      Buy Now
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => deleteItem(e.id)}
                    >
                      Remove From Cart
                    </button>
                  </div>
                </span>
              </div>
            ))}
          </span>
          <div>
            {/* <h3>Total Pay: ${calculateTotal().toFixed(2)}</h3> */}
            <p style={{ fontSize: "25px", textAlign: "center" }}>
              Total Price: Rs.
              {productData.reduce((total, product) => total + product.price, 0)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart ;




        
        
import React from "react";
import { useEffect, useState } from "react";
const Wishlist = () => {
  const api = "http://localhost:5000/wish";
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
    <div>
      <h1 style={{ textAlign: "center",backgroundColor:"#3f1652",color:"white",fontFamily:"sans-serif" }}>Your Wishlist</h1>
      {productData.length === 0 ? (
        <p>Your Wishlist is empty.</p>
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
                      Remove From Wishlist
                    </button>
                  </div>
                </span>
              </div>
            ))}
          </span>
        </div>
      )}
    </div>
  );
};
export default Wishlist;

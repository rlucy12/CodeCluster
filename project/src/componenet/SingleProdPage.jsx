// import Product from "../pages/Product";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
const SingleProdPage = () => {
  const {id} = useParams();
  console.log("id", id);
  const [productData, setProductData] = useState([]);


    useEffect(() => {
      async function fetchData() {
        try {
          const api= "http://localhost:3000/prods";
          let res = await fetch(`${api}/${id}`);
          let data = await res.json();
          console.log(data);
          setProductData(data); 
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      fetchData();
    }, [id]);
  return (
    <div>
      <div>
        <span className="border">
          <img
            src={productData.image}
            alt={productData.title}
            style={{ height: 430, width: 330 }}
          />
          <p>{productData.title}</p>
          <p>Price: ${productData.price}</p>
          <p>Description: ${productData.description}</p>
        </span>
      </div>
    </div>
  );
};
export default SingleProdPage;


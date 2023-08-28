import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const nav = useNavigate();
//   function onSubmit() {
//     nav("/product");
//   }
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <div id="container" style={{ margin: "1cm" }}>
        <div>
          <img
            loading="eager"
            height={550}
            width="auto"
            src="https://ii1.pepperfry.com/assets/c1ff96a1-598f-4310-a474-609c600c729f.jpg"
            alt="image alt image"
          />
        </div>
        <div
          id="2ndDiv"
          style={{
            height: "122.8",
            width:"1407",
            margin: "1cm 0cm 0cm 0cm",
            display: "flex",
          }}
        >
          <div className="2nddiv" style={{ padding: "0px 6px" }}>
            <img
              width={458}
              height="122.8"
              src="https://ii2.pepperfry.com/assets/1ec35dcb-4b69-4bb8-a3c3-8d57d970a6af.jpg"
              alt=""
            />
          </div>
          <div className="2nddiv" style={{ padding: "0px 6px" }}>
            <img
              width={458}
              height="122.8"
              src="https://ii3.pepperfry.com/assets/4e0f2d20-9b93-4937-a207-8b475e649446.jpg"
              alt=""
            />
          </div>
          <div className="2nddiv" style={{ padding: "0px 6px" }}>
            <img
              width={458}
              height="122.8"
              src="https://ii1.pepperfry.com/assets/a6abb7d7-816f-4f77-8929-4c32a20f4d90.jpg"
              alt=""
            />
          </div>
        </div>
        <div id="3rddiv" style={{ margin: "1cm 0cm" }}>
          <img
            width={1407}
            height="100%"
            src="https://ii3.pepperfry.com/assets/bbd76aff-f065-40f9-812b-de730b000496.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Home;

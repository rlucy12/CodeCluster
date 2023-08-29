import { Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Register from "./Registration";
import Login from "./Login";
import Contactus from "./Contactus";
// import Product from "../pages/Product";
// import SingleProdPage from "./singleProdPage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home Page
      </Route>
      {/* <Route path="/product" element={<Product />}>Product Page</Route> */}
      {/* <Route path="/product/:id" element={<SingleProdPage />}></Route> */}
      <Route path="/registration" element={<Register />}>
        Redister
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/contactus" element={<Contactus />}></Route>
    </Routes>
  );
};
export default AllRoutes;
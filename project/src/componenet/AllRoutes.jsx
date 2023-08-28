import { Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
// import Product from "../pages/Product";
// import SingleProdPage from "./singleProdPage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>Home Page</Route>
      {/* <Route path="/product" element={<Product />}>Product Page</Route> */}
      {/* <Route path="/product/:id" element={<SingleProdPage />}></Route> */}
    </Routes>
  );
};
export default AllRoutes;
import { Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SofasAndSeatings from "../Pages/SofasAndSeatings"
// import Product from "../pages/Product";
// import SingleProdPage from "./singleProdPage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sofasAndSeatings" element={<SofasAndSeatings />}></Route>
    </Routes>
  );
};
export default AllRoutes;
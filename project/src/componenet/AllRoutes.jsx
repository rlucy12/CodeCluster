import { Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SofasAndSeatings from "../Pages/SofasAndSeatings"
import Mattresses from "../Pages/Mattresses";
import KitchenandDining from "../Pages/KitchenandDining";
import Appliances from "../Pages/Appliances";
import HomeUtility from "../Pages/HomeUtility";
import HomeDecor from "../Pages/HomeDecor";
import Furnishing from "../Pages/Furnishing";
import LampsandLighting from "../Pages/LampsandLighting";
import Modular from "../Pages/Modular";
import Furniture from "../Pages/Furniture";
import SingleProdPage from "./SingleProdPage";
// import Product from "../pages/Product";
// import SingleProdPage from "./singleProdPage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/furniture" element={<Furniture />}></Route>
      <Route path="/sofasAndSeatings" element={<SofasAndSeatings />}></Route>
      <Route path="/mattresses" element={<Mattresses />}></Route>
      <Route path="/homeDecor" element={<HomeDecor />}></Route>
      <Route path="/furnishing" element={<Furnishing />}></Route>
      <Route path="/lampsandLighting" element={<LampsandLighting />}></Route>
      <Route path="/kitchenandDining" element={<KitchenandDining />}></Route>
      <Route path="/appliances" element={<Appliances />}></Route>
      <Route path="/HomeUtility" element={<HomeUtility />}></Route>
      <Route path="/modular" element={<Modular />}></Route>
      <Route path="/product/:id" element={<SingleProdPage />} />
    </Routes>
  );
};
export default AllRoutes;
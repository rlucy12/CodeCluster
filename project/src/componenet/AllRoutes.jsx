import { Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";

import Register from "./Registration";
import Login from "./Login";
import Contactus from "./Contactus";
import NavigationBar from "./Navbar";
import SofasAndSeatings from "../Pages/SofasAndSeatings"
import Mattresses from "../Pages/Mattresses";
import KitchenandDining from "../Pages/Kithttps://github.com/rlucy12/CodeCluster/pull/6/conflict?name=project%252Fsrc%252Fcomponenet%252FAllRoutes.jsx&ancestor_oid=7d35ce712a32e5d863206c0650d62a7b71ce0366&base_oid=381b79080b5be4ab45b636a879441cd4fd000062&head_oid=e939225ec4a3ce93ea8755a5cd292e610f48f539chenandDining";
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
  
      <Route path="/" element={<Home />}>
        Home Page
      </Route>
      <Route path="/navbar" element={<NavigationBar/>}></Route>
      <Route path="/registration" element={<Register />}>
        Register
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/contactus" element={<Contactus />}></Route>
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
      <Route path="/product/:id" element={<SingleProdPage />}/>

    </Routes>
  );
};
export default AllRoutes;
import { Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Register from "./Registration";
import Login from "./Login";
import Contactus from "./Contactus";
import NavigationBar from "./Navbar";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home Page
      </Route>
      <Route path="/navbar" element={<NavigationBar />}>Navbar</Route>
      <Route path="/registration" element={<Register />}>
        Register
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/contactus" element={<Contactus />}></Route>
    </Routes>
  );
};
export default AllRoutes;
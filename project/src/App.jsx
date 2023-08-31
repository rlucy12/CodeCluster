import "./App.css";
import AllRoutes from "./componenet/AllRoutes";
import Footer from "./componenet/Footer";
import NavigationBar from "./componenet/Navbar";

function App() {
  return (
    
    <div className="App">
      <NavigationBar/>
      <AllRoutes/>
      <Footer />
    </div>
  );
}


export default App;

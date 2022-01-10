import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import AddEmployee from "./Pages/AddEmployee/AddEmployee";
import AddMultiEmployee from "./Pages/AddMultiEmployee/AddMultiEmployee";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Footer from "./Pages/Shared/Footer/Footer";
import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  return (
    <div className="App bg-light">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/addMultiEmployee" element={<AddMultiEmployee />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

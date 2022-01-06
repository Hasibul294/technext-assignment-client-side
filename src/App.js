import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import AddEmployee from "./Pages/AddEmployee/AddEmployee";
import AddMultiEmployee from "./Pages/AddMultiEmployee/AddMultiEmployee";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/AddEmployee" element={<AddEmployee />} />
          <Route path="/AddMultiEmployee" element={<AddMultiEmployee />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

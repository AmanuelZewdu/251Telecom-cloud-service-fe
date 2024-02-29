import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Console from "./components/Console/Console";
import Products from "./components/Products/Products";
import Navbar from "../src/components/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="console" element={<Console />} />
              <Route path="products" element={<Products />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

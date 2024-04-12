import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Console from "./components/Console/Console";
import Products from "./components/Products/Products";
import Navbar from "../src/components/Navbar/Navbar";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import VmPurchase from "./components/Products/VmPurchase";
import PurchaseConfirmation from "./components/Confimation/PurchaseConfirmation";
import WaitPage from "./components/WaitPage/WaitPage";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <BrowserRouter>
          {/* <div className="">
            <Navbar />
          </div> */}
          <Routes>
            {/* <Route path="/">
              <Route index element={<Home />} />
              <Route path="console" element={<Console />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="virtual-machine" element={<VmPurchase />} />
              <Route
                path="/purchase-confirm"
                element={<PurchaseConfirmation />}
              />
              <Route path="/wait" element={<WaitPage />} />
              <Route path="log-in" element={<LogIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Route> */}
          </Routes>
          <div className="">
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

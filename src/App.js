import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Console from "./components/Console/Console";
import Products from "./components/Products/Products";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import VmPurchase from "./components/Products/VmPurchase";
import ObjArrPurchase from "./components/Products/ObjStoragePurchase";
import ArrStoragePurchase from "./components/Products/ArrStoragePurchase";
import PurchaseConfirmation from "./components/Confimation/PurchaseConfirmation";
import WaitPage from "./components/WaitPage/WaitPage";
import ContactUs from "./components/ContactUs/ContactUs";
import Terms from "./components/Terms/Terms";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Reset from "./components/Reset/Reset";
import PaymentError from "./components/PaymentError/PaymentError";
import AboutUs from "./components/AboutUs/AboutUs";
import { Biro251Home } from "./components/Biro251/Biro251Home";
import { Layout } from "./Layout";

function App() {
  return (
    <>
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Layout}>
              <Route index element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/console" element={<Console />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/virtual-machine" element={<VmPurchase />} />
              <Route path="/object-storage" element={<ObjArrPurchase />} />
              <Route path="/array-storage" element={<ArrStoragePurchase />} />
              <Route
                path="/purchase-confirm/:access_token?"
                element={<PurchaseConfirmation />}
              />
              <Route path="/payment-error" element={<PaymentError />} />
              <Route path="/wait" element={<WaitPage />} />
              <Route path="/log-in" element={<LogIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/password-reset" element={<Reset />} />
              <Route path="/terms-conditions" element={<Terms />} />
            </Route>
            <Route path="/biro251" element={<Biro251Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

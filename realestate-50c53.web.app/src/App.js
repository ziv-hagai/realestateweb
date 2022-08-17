import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Buy from "./components/pages/buy";
import Rent from "./components/pages/rent";
import Shop from "./components/pages/shop";
import Dashboard from "./components/pages/shop/dashboard/Dashboard";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import UserDetails from "./components/UserDetails/UserDetails";
import Sell from "./components/pages/sell";
import Head from "./components/head/Head";
import Settings from "./components/Settings/Settings";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Menu from "./components/Menu/Menu";
import RegisterBusiness from "./components/registerBusiness/registerBusiness";
import UserProfile from "./components/UserProfile/UserProfile";
import SecondNavbar from "./components/secondnavbar/secondNavbar";
import User from "./components/User/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Map from "./components/map/map";
import { useSelector } from "react-redux";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import VendorDetails from "../src/components/pages/shop/vendor/VendorDetails";
import CategoryDetails from "../src/components/category/CategoryDetails";
import Agent from "./components/agent/agent";
import Chat from "./components/agent/Chat";
import BookingAppoimentSuccess from "./components/appoiment/BookingAppoimentSuccess";
import EditAppoimentSuccess from "./components/appoiment/EditAppoimentSuccess";
import Appointment from "./components/appoiment/Appointment";
import EditAppointment from "./components/appoiment/EditAppointment";
import { useTranslation } from "react-i18next";
import VendorsDetail from "../src/components/vendor/VendorDetails";
import Company from "./components/Company/Company";
import Product from "./components/Product/Product";
import CategoryList from "../src/components/category/CategoryList";
import CategoryProduct from "../src/components/category/CategoryProduct";
import Cart from "../src/components/cart/Cart";
import Checkout from "../src/components/cart/Checkout";
import LoginB from "../src/components/login/login/login/Login";
import RegisterB from "./components/login/register/Register";
import ChatBot from "./components/chat/ChatBot";
import Wallets from "../src/components/wallets/Wallets";
import Payment from "./components/wallets/Payment";
import LoadMoney from "./components/wallets/LoadMoney";
import CreaditCard from "./components/wallets/CreaditCard";
import Shops from "./components/shop/Shops";
import PaymentHistory from "./components/wallets/PaymentHistory";
import PaymentCardHistory from "./components/wallets/PaymentCardHistory";
import ManageDashboard from "./components/ManageDashboard/ManageDashboard";
import Maps from "./components/location/Map";
import AllVendor from "./components/vendor/AllVendor";
import BookingCart from "./components/Booking/BookingCart";
import BookingCartDetail from "./components/Booking/BookingCartDetail";
import BookingPayment from "./components/Booking/BookingPayment";

function App() {
  const [click, setClick] = useState(false);
  const OpenSidebar = () => setClick(!click);
  const { isHomePage } = useSelector((state) => state.settingReducer);

  const { t } = useTranslation();
  return (
    <>
      <div className={`App ${isHomePage ? "" : "hidesubmenu"}`}>
        <Router>
          <Navbar />
          {isHomePage && <Head />}
          {!isHomePage && <SecondNavbar test="aasdfdsf" />}
          <div className={click ? "flex activeTabs" : "flex"}>
            <div className="left">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/logins" element={<LoginB />} />
                <Route path="/registers" element={<RegisterB />} />
                <Route path="/startForFree" element={<Register />} />
                <Route path="/menu" element={<Menu />} />
                <Route element={<UserDetails />} path="/buy/user/:id" />
                <Route element={<ProductDetails />} path="/buy/product/:id" />
                <Route path="/" exact element={<Buy />} />
                <Route path="/rent" element={<Rent />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/registerBusiness" element={<RegisterBusiness />} />
                <Route path="/userProfile" element={<UserProfile />} />
                <Route path="/user" element={<User />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/vandordetail" element={<VendorsDetail />} />
                <Route path="/vendorDetails" element={<VendorDetails />} />
                <Route path="/categoryDetails" element={<CategoryDetails />} />
                <Route path="/product" element={<Product />} />
                <Route path="/company" element={<Company />} />
                <Route path="/categorylist" element={<CategoryList />} />
                <Route path="/categoryproduct" element={<CategoryProduct />} />
                <Route path="/agent" element={<Agent />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/bookingcartdetail" element={<BookingCartDetail />} />
                <Route path="/bookingcart" element={<BookingCart />} />
                <Route path="/successedit" element={<EditAppoimentSuccess />} />
                <Route path="/successbooking" element={<BookingAppoimentSuccess />} />
                <Route path="/bookingpayment" element={<BookingPayment />} />
                <Route path="/bookingappointment" element={<Appointment />} />
                <Route path="/editAppointment" element={<EditAppointment />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/chatboat" element={<ChatBot />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/wallet" element={<Wallets />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/loadmoney" element={<LoadMoney />} />
                <Route path="/creaditcard" element={<CreaditCard />} />
                <Route path="/shops" element={<Shops />} />
                <Route path="/paymenthistory" element={<PaymentHistory />} />
                <Route path="/paymentcardhistory" element={<PaymentCardHistory />} />
                <Route path="/managedashboard" element={<ManageDashboard />} />
                <Route path="/maps" element={<Maps />} />
                <Route path="/allvandors" element={<AllVendor />} />
              </Routes>
            </div>
            <div className="mobilePageTabs">
              <a onClick={OpenSidebar} className="MapTab">
                <SellOutlinedIcon /> {t("mapView")}
              </a>
              <a onClick={OpenSidebar} className="ListTab">
                <SellOutlinedIcon /> {t("listView")}
              </a>
              <a>
                <SellOutlinedIcon /> {t("saveSearch")}
              </a>
            </div>
            <div className="right">
              <Map />
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;

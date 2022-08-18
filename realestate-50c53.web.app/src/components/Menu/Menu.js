import React from "react";
import "../Menu/Menu.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import market from "../../assets/imgs/icons/exit.svg";
// import profile from "../../assets/imgs/icons/profile.svg";
// import card from "../../assets/imgs/icons/cart.svg";
import { AiOutlineShoppingCart } from 'react-icons/ai';
// import groupChat from "../../assets/imgs/icons/group-chat.svg";
import GroupsIcon from '@mui/icons-material/Groups';
// import Vacant from "../../assets/imgs/icons/vacantLand.svg";
import { BsSignpostSplit } from 'react-icons/bs';
import userImg from "../../assets/imgs/user.jpeg";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import search from "../../assets/imgs/search.png";
import SearchIcon from '@mui/icons-material/Search';
// import location from "../../assets/imgs/location.svg";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Menu() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const { t } = useTranslation();

  let history = useNavigate();
  return (
    <div className="scrollTamplate">
      <div className="scrollTamplate">
        <div className="scrollTamplate">
          <div className="menu">
            <div className="menu-inner">
              <div className="menuHead">
                <div className="menuUser">
                  <span className="menuUser-img">
                    <img src={userImg} className="img-fluid" />
                  </span>
                  <div className="menuUser-title">{t("jhonnyRose")}</div>
                </div>
                <div className="menuHead-btn" onClick={() => history.push("/")}>
                  <CloseIcon />
                </div>
              </div>

              <ul className="menuList">
                <li>
                  {/* <img src={profile} className="menuList-img" /> */}
                    <PersonOutlineIcon className="menuList-img" />
                  <Link
                    to="/registerBusiness"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {t("registerBusiness")}
                  </Link>
                </li>
                <li>
                  {/* <img src={profile} className="menuList-img" /> */}
                  <MdOutlineSpaceDashboard className="menuList-img" />
                  <Link
                    to="/userProfile"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {t("managementDashboard")}
                  </Link>
                </li>
                <li>
                  {/* <img src={search} className="menuList-img" /> */}
                  <SearchIcon className="menuList-img" />
                  <Link
                    to="/agent"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {t("searchForAgent")}
                  </Link>
                </li>
                <li>
                  {/* <img src={location} className="menuList-img" /> */}
                  <LocationOnIcon className="menuList-img" />
                  {t("propertiesAroundMe")}
                </li>
                <li>
                  <StorefrontIcon className="menuList-img" />
                  {t("marketplace")}
                </li>
                <li>
                  {/* <img src={groupChat} className="menuList-img" /> */}
                  <GroupsIcon className="menuList-img" />
                  {t("groupChats")}
                </li>
                <li>
                  {/* <img src={Vacant} className="menuList-img" /> */}
                  <BsSignpostSplit className="menuList-img" />
                  {t("referralProgram")}
                </li>
                <li>
                  {/* <img src={profile} className="menuList-img" /> */}
                  <PersonAddAltIcon className="menuList-img" />
                  {t("inviteFriends")}
                </li>
                <li>
                  {/* <img src={groupChat} className="menuList-img" /> */}
                  <AiOutlineShoppingCart className="menuList-img" />
                  {t("orders")}
                </li>
                <li>
                  {/* <img src={card} className="menuList-img" /> */}
                  <CreditCardIcon className="menuList-img" />
                  {t("card")}
                </li>
              </ul>
            </div>
            <div className="menuFooter">
              <button
                className="btn-gray"
                onClick={() => {
                  history.push("/settings");
                }}
              >
                {t("myProfile")}
              </button>
              <button className="btn-blue">{t("chatWithOurBot")}</button>
              <div className="menufooterBtns">
                <a className="menufooterLink">
                  <LogoutIcon /> {t("logOut")}{" "}
                </a>
                <a className="menufooterLink">
                  <SettingsIcon /> {t("settings")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

import React from "react";
import logo from "../img/logo.png";
import search from "../img/search.png";
import downarrow from "../img/downarrow.png";
import mobileheader1 from "../img/mobileheader1.png";
import mobileheader2 from "../img/mobileheader2.png";
import mobileheader3 from "../img/mobileheader3.png";
import header from '../css/header.css'
import { FaRegArrowAltCircleDown , FaSearch } from "react-icons/fa";


const Header = () => {
  return (
      <>
    {/* //   main header */}
    <div className="header">
        <div className="header-logo">
            <img src={logo} alt="" />
        </div>

        <div className="header-search-bar">
            <form class="form-inline">
                <img src={search} alt="" /> 
            <input 
                class="form-control mr-sm-2"
                type="search"
                placeholder=" Search For Your Favorite group in AtG"
                aria-label="Search" 
            />
            </form>
        </div>

        <div className="header-sign-in">
            <h5>Create Account <i>Its Free!</i> <img src={downarrow} alt="" /></h5>
        </div>
    </div>

    {/* mobile responsive header */}
<div className="mobile-header">
    <img src={mobileheader1} alt={mobileheader1} />
    <img src={mobileheader2} alt={mobileheader2} />
    <img src={mobileheader3} alt={mobileheader3} />
</div>
    </>
  );
};

export default Header;

import React  from "react";
import HeaderButton from "../HeaderButtons/HeaderButton.jsx";
import SideLogo from "../SideLogo/SideLogo.jsx";
import { Link } from "react-router-dom";

export default function Header() {


  return (
    <div className="headerClass">
      <div className="logoContainer">
        <SideLogo />
      </div>
      <div className="headerButtonContainer">
        <Link to="/">
          <HeaderButton buttonField="Home" />
        </Link>

        <Link to="/Catalog">
          <HeaderButton buttonField="Catalog" />
        </Link>

        <Link to="/Cart">
          <HeaderButton buttonField="Cart" />
        </Link>
       
      </div>
    </div>
  );
}

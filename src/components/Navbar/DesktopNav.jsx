import React from "react";
import Logo from "../../assets/icons/svgs/namaste-logo.svg";
import "./navbar.css";
import NamasteButton from "../Utils/NamasteButton";

function DesktopNav() {
  return (
    <div className="desktop-navbar">
      <span className="logo">
        <img src={Logo} alt="" />
        <h2 className="logo-text">Namaste NFT</h2>
      </span>
      <span className="navbar-content">
        <li>Home</li>
        <li>Event</li>
        <li>FAQs</li>
        <li>Contact Us</li>
        <NamasteButton text={"Join Discord"} isIcon={true} />
      </span>
    </div>
  );
}

export default DesktopNav;

import React from "react";
import Logo from "../../assets/banner/Namaste_white.png";
import "./navbar.css";
import NamasteButton from "../Utils/NamasteButton";

function DesktopNav() {
  return (
    <div className="desktop-navbar">
      <span className="logo">
        <img src={Logo} alt="" width={150} height={150} color={"white"} />
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

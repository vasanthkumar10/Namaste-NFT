import React, { useState } from "react";
import { Drawer } from "antd";
import {
  MenuOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import { DiscordIconWhite } from "../Icon/DiscordIcon";
import Logo from "../../assets/banner/Namaste_white.png";
import "./navbar.css";

function DesktopNav() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    console.log("called");
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="desktop-navbar">
      <span className="logo">
        <img src={Logo} alt="" width={150} height={150} color={"white"} />
      </span>
      <div className="navbar-content">
        <button className="navbar-btn" onClick={showDrawer}>
          <MenuOutlined
            style={{
              color: "#f5f5f5",
              background: "transparent",
              fontSize: "20px",
            }}
          />
        </button>
        <span className="media-links-nav">
          <a href="" key={"instagram"}>
            <InstagramOutlined className="nav-icon instagram" />
          </a>
          <a href="" key={"linkedin"}>
            <LinkedinFilled className="nav-icon linkedin" />
          </a>
          <a href="" key={"discord"}>
            <DiscordIconWhite className="nav-icon discord" />
          </a>
          <a href="" key={"twitter"}>
            <TwitterOutlined className="nav-icon twitter" />
          </a>
        </span>
        <Drawer placement="right" onClose={onClose} visible={visible}>
          <div className="navbar-items-desktop">
            <li key={"home"}>Home</li>
            <li key={"event"}>Event</li>
            <li key={"faqs"}>FAQs</li>
            <li key={"contact us"}>Contact Us</li>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default DesktopNav;

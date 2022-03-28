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

function MobileNav() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="navbar-wrapper-mobile">
      <span className="logo">
        <img src={Logo} alt="" />
      </span>
      <div className="navbar-content">
        <button className="navbar-btn" onClick={showDrawer}>
          <MenuOutlined />
        </button>
        <span className="media-links">
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
        <Drawer
          placement="right"
          onClose={onClose}
          visible={visible}
          className="navbar-items-mobile"
        >
          <li key={"home"}>Home</li>
          <li key={"event"}>Event</li>
          <li key={"faqs"}>FAQs</li>
          <li key={"contact us"}>Contact Us</li>
        </Drawer>
      </div>
    </div>
  );
}

export default MobileNav;

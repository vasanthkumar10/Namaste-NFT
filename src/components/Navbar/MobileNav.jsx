import React, { useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Logo from "../../assets/banner/Namaste_white.png";
import "./navbar.css";

function MobileNav({ loreScroll, ethmapScroll, teamScroll, faqScroll }) {
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
      <button className="navbar-btn" onClick={showDrawer}>
        <MenuOutlined />
      </button>
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
  );
}

export default MobileNav;

import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import "./utils.css";

const { Panel } = Collapse;
function DropDown({ title = "", content = "" }) {
  return (
    <div className="dropdown-wrapper">
      <Collapse
        className="dropdown"
        expandIcon={({ isActive }) => <DownOutlined />}
        expandIconPosition="right"
      >
        <Panel header={title} key="1">
          <p>{content}</p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default DropDown;

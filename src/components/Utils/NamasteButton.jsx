import React from "react";
import { DiscordIcon } from "../Icon/DiscordIcon";
import "./utils.css";

function NamasteButton({ text, isIcon = false, iconPath = null }) {
  return (
    <button className="namaste-btn">
      {isIcon && <DiscordIcon />}
      {text}
    </button>
  );
}

export default NamasteButton;

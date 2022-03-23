import React from "react";

function AnimeUser({ img, bgColor }) {
  const styles = {
    background: bgColor,
    borderRadius: "50%",
    border: `5px solid #111111`,
    boxShadow: "0 0 0 5px #ff0000",
  };
  return (
    <div className="anime-user-wrapper">
      <img className="anime-user" style={styles} src={img} alt="peep-icon" />
    </div>
  );
}

export default AnimeUser;

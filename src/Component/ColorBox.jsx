import React, { useState } from "react";

const ColorBox = ({ initialColor }) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
          margin: "0 auto",
          border: "1px solid #000",
        }}
      ></div>
      <button onClick={changeColor} style={{ marginTop: "10px" }}>
        Changer de couleur
      </button>
    </div>
  );
};

export default ColorBox;

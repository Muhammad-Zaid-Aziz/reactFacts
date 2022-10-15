/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react";
import img from "../assets/react-icon-small.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={img} className="logo" />
      <h3 className="rf">ReactFacts</h3>
      <h4 className="rcp">React Course - Project 1</h4>
    </div>
  );
}

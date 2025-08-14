import React from "react";
export const HamburgerIcon = ({ width = 24, height = 24, color = "#e07844" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#e07844"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

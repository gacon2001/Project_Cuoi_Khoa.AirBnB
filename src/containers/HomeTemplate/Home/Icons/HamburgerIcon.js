import React from "react";

export default function HamburgerIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{
        // display: "block",
        height: "1rem",
        width: "1rem",
        marginRight: "0.5rem",
        stroke: "currentcolor",
        strokeWidth: 3,
        overflow: "visible",
      }}
    >
      <g fill="none" fillRule="nonzero">
        <path d="m2 16h28" />
        <path d="m2 24h28" />
        <path d="m2 8h28" />
      </g>
    </svg>
  );
}

import React from "react";

export function IconArrowRight({ width, height, ...props }) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      fill="#EDEDED"
      viewBox="0 -960 960 960"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" />
    </svg>
  );
}
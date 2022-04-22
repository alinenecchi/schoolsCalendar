/* eslint-disable react/no-unknown-property */
import * as React from "react";

function SvgClose(props) {
  return (
    <svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 1l16 16M1 17L17 1" stroke="#fff" strokeWidth={4} strokeLinecap="round" />
    </svg>
  );
}
export default SvgClose;
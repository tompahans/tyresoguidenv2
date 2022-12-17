import * as React from "react";

function Hamburger(props) {
  return (
    <svg viewBox="0 0 100 80" width={40} height={40} {...props}>
      <path d="M0 0H100V20H0z" />
      <path d="M0 30H100V50H0z" />
      <path d="M0 60H100V80H0z" />
    </svg>
  );
}

export default Hamburger;

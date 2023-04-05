import { useState } from "react";
import "./side-nav.css";

const SideNav = () => {
  const [toggled, toggleOpen] = useState(false);

  function toggleSideNav() {
    toggleOpen(!toggled);
  }

  return (
    <div>
      <div
        className={`hamburger-icon ${toggled ? "active" : ""}`}
        onClick={toggleSideNav}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`side-nav ${toggled ? "active" : ""}`}></div>
    </div>
  );
};
export default SideNav;

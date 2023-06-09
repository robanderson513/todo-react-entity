import { useState } from "react";
import { Link } from "react-router-dom";
import { HiHome, HiUserGroup, HiClipboardList } from "react-icons/hi";
import "./side-nav.css";

const SideNav = () => {
  const [toggled, toggleOpen] = useState(false);

  function toggleSideNav() {
    toggleOpen(!toggled);
  }

  return (
    <div className="flex">
      <div className={`side-nav ${toggled ? "active" : ""}`}>
        <Link to="/">
          <HiHome /> Home
        </Link>
        <Link to="/users">
          <HiUserGroup /> Users
        </Link>
        <Link to="/todos">
          <HiClipboardList /> Todos
        </Link>
      </div>
      <div className="hamburger-container">
        <div
          className={`hamburger-icon ${toggled ? "active" : ""}`}
          onClick={toggleSideNav}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
export default SideNav;

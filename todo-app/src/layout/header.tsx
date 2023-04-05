import logo from "../logo.svg";
import "./header.css";

const Header = () => (
  <header className="app-header">
    <img src={logo} className="app-logo" alt="logo" />
    <h1>React/Entity Framework TODO App</h1>
  </header>
);

export default Header;

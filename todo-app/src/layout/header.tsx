import logo from "../logo.svg";
import "./header.css";

const Header = () => (
  <header className="app-header">
    <img src={logo} className="app-logo" alt="logo" />
    <h1>Cool TODO App</h1>
  </header>
);

export default Header;

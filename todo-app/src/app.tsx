import Header from "./layout/header";
import SideNav from "./layout/side-nav";
import "./app.css";
import "./styles/index";

const App = () => (
  <div className="app">
    <SideNav></SideNav>
    <Header></Header>
  </div>
);

export default App;

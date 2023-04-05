import Header from "./layout/header";
import SideNav from "./layout/side-nav";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import Dashboard from "./dashboard/dashboard";
import User from "./user/user";
import Task from "./Task/task";

const App = () => (
  <div className="app">
    <SideNav></SideNav>
    <Header></Header>
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<User />} />
        <Route path="/tasks" element={<Task />} />
      </Routes>
    </div>
  </div>
);

export default App;

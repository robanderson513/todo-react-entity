import { Navigate, Route, Routes } from "react-router-dom";
import Task from "./Task/task";
import "./app.css";
import Dashboard from "./dashboard/dashboard";
import Header from "./layout/header";
import SideNav from "./layout/side-nav";
import User from "./user/user";

const App = () => (
  <div className="app">
    <SideNav></SideNav>
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<User />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  </div>
);

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import Task from "./Task/task";
import "./app.css";
import Dashboard from "./dashboard/dashboard";
import Header from "./layout/header";
import SideNav from "./layout/side-nav";
import UserList from "./user/user-list";

const App = () => (
  <div className="app">
    <SideNav></SideNav>
    <div className="main-content">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  </div>
);

export default App;

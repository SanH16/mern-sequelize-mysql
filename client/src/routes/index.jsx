import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import AddUser from "../components/AddUser";
import EditUser from "../components/EditUser";

export default function SetupRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/create" element={<AddUser />} />
      <Route path="/edit/:id" element={<EditUser />} />
    </Routes>
  );
}

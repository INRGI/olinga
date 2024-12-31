import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryManager from "./CategoryManager";
import { useAuth } from "../../context/AuthContext";
import { Button, Container } from "./AdminDashboard.styled";
import { LuLogOut } from "react-icons/lu";
import CategoryAdmin from "../../components/CategoryAdmin/CategoryAdmin";
import { ToastContainer } from "react-toastify";


const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Container>
      {/* <CategoryManager /> */}
      <CategoryAdmin />
      <Button onClick={handleLogout}><LuLogOut /></Button>
      <ToastContainer />
    </Container>
  );
};

export default AdminDashboard;

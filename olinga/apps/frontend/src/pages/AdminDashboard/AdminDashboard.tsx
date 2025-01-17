import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Button, Container } from "./AdminDashboard.styled";
import { LuLogOut } from "react-icons/lu";
import CategoryAdmin from "../../components/CategoryAdmin/CategoryAdmin";
import { ToastContainer } from "react-toastify";
import CourseAdmin from "../../components/CoursesAdmin/CoursesAdmin";


const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Container>
      <CategoryAdmin />
      <CourseAdmin />
      <Button onClick={handleLogout}><LuLogOut /></Button>
      <ToastContainer />
    </Container>
  );
};

export default AdminDashboard;

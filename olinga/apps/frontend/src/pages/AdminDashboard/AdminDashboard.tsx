import React from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CategoryManager from "./CategoryManager";
import { useAuth } from "../../context/AuthContext";



const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Box>
      <h1>Адмін-панель</h1>
      <CategoryManager />
      <Button variant="contained" onClick={handleLogout}>Вийти</Button>
    </Box>
  );
};

export default AdminDashboard;

import React from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Box>
      <h1>Адмін-панель</h1>
      <Button variant="contained" onClick={handleLogout}>Вийти</Button>
    </Box>
  );
};

export default AdminDashboard;

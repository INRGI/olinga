import React from "react";
import { SidebarContainer, SidebarContent, CloseButton, Overlay, LogoWrapper } from "./NavBar.styled";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <SidebarContainer isOpen={isOpen}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <SidebarContent>
          <LogoWrapper>
            <img src="/public/logo2.webp" alt="Logo" />
          </LogoWrapper>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Services</NavLink>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
};

export default Navbar;

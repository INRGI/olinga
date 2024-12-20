import React from "react";
import { SidebarContainer, SidebarContent, CloseButton, Overlay } from "./NavBar.styled";

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
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/services">Services</a>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
};

export default Navbar;

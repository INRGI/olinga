import React from 'react';
import {
  SidebarContainer,
  SidebarContent,
  CloseButton,
  Overlay,
  LogoWrapper,
} from './NavBar.styled';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <SidebarContainer isOpen={isOpen}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <SidebarContent>
          <LogoWrapper>
            <img src="/public/logo2.webp" alt="Logo" />
          </LogoWrapper>
          <NavLink
            onClick={onClose}
            to="/"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            {t('sidebar.main')}
          </NavLink>
          <NavLink
            onClick={onClose}
            to="/categories"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            {t('sidebar.massages')}
          </NavLink>
          <NavLink
            onClick={onClose}
            to="/courses"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            {t('sidebar.school')}
          </NavLink>
          <NavLink
            onClick={onClose}
            to="/abonements"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            {t('sidebar.abonement')}
          </NavLink>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
};

export default Navbar;

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
            to="/"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            {t('sidebar.main')}
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            {t('sidebar.massages')}
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            {t('sidebar.school')}
          </NavLink>
          <NavLink
            to="/abonements"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            {t('sidebar.abonement')}
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            {t('sidebar.contacts')}
          </NavLink>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
};

export default Navbar;

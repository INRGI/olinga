import React from 'react';
import {
  FooterContainer,
  FooterItem,
  InfoContainer,
  LinksContainer,
  LogoContainer,
  NavLinkStyled,
  PrivacyContainer,
} from './Footer.styled';
import { NavLink } from 'react-router-dom';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaRegIdCard,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <NavLinkStyled to="/">
          <img src="/public/logo2.webp" alt="Logo" />
        </NavLinkStyled>
      </LogoContainer>
      <LinksContainer>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Головна
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Види Масажу
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Школа Масажу
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Абонименти
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Контакти
        </NavLink>
      </LinksContainer>
      <InfoContainer>
        <FooterItem>
          <FaPhone size={20} />
          <span>
            <a href="tel:+48515732832">+48 515 732 832</a>
          </span>
        </FooterItem>
        <FooterItem>
          <FaEnvelope size={20} />
          <span>
            <a href="mailto:olingamassage@gmail.com">olingamassage@gmail.com</a>
          </span>
        </FooterItem>
        <FooterItem>
          <FaRegIdCard size={20} />
          <span>NIP: 5213641211</span>
        </FooterItem>
        <FooterItem>
          <FaMapMarkerAlt size={20} />
          <span>
            <a
              href="https://maps.app.goo.gl/6HhqVWwg4kUaHhf56"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              al. Wojciecha Korfantego 46, 40-123 Katowice, Poland
            </a>
          </span>
        </FooterItem>
      </InfoContainer>
      <PrivacyContainer>
        <NavLink
          to="/"
        >
          Privacy Policy
        </NavLink>
        <NavLink
          to="/"
        >
          Terms and Conditions
        </NavLink>
        <p>&copy; 2024 Olinga. All rights reserved.</p>
          
        
      </PrivacyContainer>
    </FooterContainer>
  );
};

export default Footer;

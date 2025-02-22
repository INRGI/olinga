import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  font-family: 'Montserrat', sans-serif;
  padding: 0 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1e1e1e;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

export const LogoWrapper = styled.div`
  width: 14%;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    filter: brightness(1.5);
    height: auto;
    transition: filter 0.3s ease, transform 0.3s ease;
    &:hover {
      filter: brightness(2);
      transform: scale(1.05);
    }
  }

  @media only screen and (max-width: 768px) {
    width: 20%;
  }

  @media only screen and (max-width: 430px) {
    width: 40%;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 430px) {
    gap: 5px;
  }
`;

export const ContactUsBlock = styled.div`
  position: relative;
  transition: color 0.3s ease;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #87bdd8;
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #87bdd8;
  }
`;

export const ContactNumber = styled.div`
  font-size: 16px;
  font-weight: 500;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #87bdd8;
    }
  }
`;

export const DropdownContacts = styled.div`
  position: absolute;
  top: 240%;
  left: 10%;
  background: #292929;
  padding: 10px;
  border-radius: 5px;
  width: 220px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  padding: 5px 0;

  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    color: #87bdd8;
  }
`;

export const MenuBlock = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #87bdd8;
  }

  @media only screen and (max-width: 430px) {
    margin-left: 0px;
  }
`;

export const LanguegeBlock = styled.div`
  position: relative;
  margin-left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #87bdd8;
  }
`;

export const Languege = styled.div`
  font-size: 16px;
  font-weight: 500;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #87bdd8;
    }
  }
`;

export const DropdownLanguages = styled.div`
  position: absolute;
  top: 250%;
  left: 0;
  background: #292929;
  padding: 10px;
  border-radius: 5px;
  width: 45px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease forwards;
  z-index: 999;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const LanguageOption = styled.div<{ isSelected: boolean }>`
  display: flex;
  color: ${({ isSelected }) => (isSelected ? '#87bdd8' : '#ffffff')};
  align-items: center;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: ${({ isSelected }) =>
    isSelected ? '#444' : 'transparent'};
  &:hover {
    background-color: #444;
    color: #87bdd8;
  }
`;

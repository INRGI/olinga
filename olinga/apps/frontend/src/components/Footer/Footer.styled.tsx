import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #1e1e1e;
  height: 200px;
  position: relative;
  box-sizing: border-box;
  border-top: 1px solid #333;
  display: flex;
  align-items: center;
  column-gap: 40px;
  @media only screen and (max-width: 425px) {
    flex-direction: column;
    height: 300px;
    gap: 20px;
  }

  @media only screen and (min-width: 425px) and (max-width: 768px) {
    column-gap: 40px;
    flex-wrap: wrap;
    height: 300px;
  }
`;

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;

  svg {
    margin-right: 10px;
    color: #fff;
  }

  span {
    color: #fff;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #87bdd8;
    }
  }

  @media only screen and (max-width: 1080px) {
    font-size: 14px;
  }
`;

export const LogoContainer = styled.div`
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

  @media only screen and (max-width: 1080px) {
    img{
        width: 120%;
    }
  }

  @media only screen and (max-width: 425px) {
    display: none;
  }
  @media only screen and (min-width: 425px) and (max-width: 768px) {
    width: 30%;
    max-width: 200px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 17px;
    font-weight: 500;
    padding: 5px 10px;
    transition: all 0.5s ease;
    align-items: center;
    border-left: 3px solid #282828;

    &:hover {
      color: #87bdd8;
      transform: translateX(5px);
    }

    &.active {
      color: #87bdd8;
    }
  }

  @media only screen and (max-width: 1080px) {
    width: 150px;
    a{
        font-size: 15px;
    }
  }
  @media only screen and (max-width: 425px) {
    display: none;
  }
  @media only screen and (min-width: 425px) and (max-width: 768px) {
    display: none;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 450px;
  @media only screen and (max-width: 1080px) {
    width: 250px;
  }
  @media only screen and (max-width: 425px) {
    width: 90%;
    font-size: 12px;
    padding-top: 20px;
  }
  @media only screen and (min-width: 425px) and (max-width: 768px) {
    width: 50%;
    font-size: 12px;
  }
`;

export const PrivacyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: top;
  font-size: 17px;
  width: 300px;

  a {
    color: #fff;
    text-decoration: none;
    
    font-weight: 500;
    padding: 5px 10px;
    transition: all 0.5s ease;
    align-items: center;
    border-left: 3px solid #282828;

    &:hover {
      color: #87bdd8;
      transform: translateX(5px);
    }
  }
  p{
    color: #fff;
    text-decoration: none;
    
    font-weight: 500;
    margin: 0;
    padding: 5px 10px;
    transition: all 0.5s ease;
    align-items: center;
    border-left: 3px solid #282828;
  }

  @media only screen and (max-width: 1080px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 425px) {
    width: 90%;
    border: none;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    a{
        border: none;
    }
    p{
        border: none;
    }
  }
  @media only screen and (min-width: 425px) and (max-width: 768px) {
    width: 90%;
    border: none;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    a{
        border: none;
    }
    p{
        border: none;
    }
  }
`;

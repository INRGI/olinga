import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45));
  background-repeat: no-repeat;
  background-size: cover;
  padding-top:10px;
  padding-bottom: 10px;
`;

export const HeaderLine = styled.div`
  width: 100%;
  padding: 0 2.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #1e1e1e;
  z-index: 999;
`;

export const LogoWrapper = styled.div`
  width: 14%;
  img {
    object-fit: contain;
    width: 100%;
    height: auto;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.button`
  background-color: #fff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e4e4e4;
  }
`;

import styled from '@emotion/styled';

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  font-family: 'Montserrat', sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: #1e1e1e;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin-top: 50px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 22px;
    padding: 10px;
    border-radius: 5px;
    transition: all 0.5s ease;

    &:hover {
      background-color: #c6caa6;
      color: #fff;
      transform: translateX(5px);
    }

    &.active {
      background-color: #c6caa6;
      color: #fff;
      transform: translateX(5px);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 32px;
  color: white;
  cursor: pointer;
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
  transition: opacity 0.3s ease-in-out;
  z-index: 999;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 20px;
  img {
    width: 100%;
    max-width: 200px;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`;

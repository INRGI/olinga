import React, { useState } from "react";
import { HeaderContainer, HeaderLine, LogoWrapper, HeaderBox, Button } from "./HeaderBlock.styled";
import Navbar from "../NavBar";

const HeaderBlock: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderLine>
          <LogoWrapper>
            <a href="/">
              <img src="https://olinga.pl/public/img/logo1.webp" alt="Logo" />
            </a>
          </LogoWrapper>
          <HeaderBox>
            <Button onClick={toggleSidebar}>Menu</Button>
          </HeaderBox>
        </HeaderLine>
      </HeaderContainer>
      <Navbar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default HeaderBlock;

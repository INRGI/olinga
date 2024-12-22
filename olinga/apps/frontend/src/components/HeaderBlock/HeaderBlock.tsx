import React, { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { GoTriangleDown } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import {
  HeaderWrapper,
  LogoWrapper,
  HeaderBox,
  ContactUsBlock,
  ContactItem,
  ContactNumber,
  MenuBlock,
  DropdownContacts,
  DropdownItem,
  LanguegeBlock,
  Languege,
  DropdownLanguages,
  LanguageOption,
  NavLinkStyled,
} from "./HeaderBlock.styled";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar";

const HeaderBlock: React.FC = () => {
  const [isContactsOpen, setContactsOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [isLanguagesOpen, setLanguagesOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("UA");

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  const toggleContacts = () => {
    setContactsOpen((prev) => !prev);
  };

  const toggleLanguages = (event: React.MouseEvent) => {
    if (!isLanguagesOpen) {
      setLanguagesOpen(true);
    } else {
      setLanguagesOpen(false);
    }
  };

  const changeLanguage = (language: string) => {
    setSelectedLanguage(language);
    setLanguagesOpen(false);
  };

  return (
    <>
      <HeaderWrapper>
        <LogoWrapper>
          <NavLinkStyled to="/">
            <img src="/public/logo1.webp" alt="Logo" />
          </NavLinkStyled>
        </LogoWrapper>

        <HeaderBox>
          <ContactUsBlock>
            <ContactItem onClick={toggleContacts}>
              <FaPhoneAlt size={20} />
              <ContactNumber>
                Адміністратор: <a href="tel:+48515732832">+48 515 732 832</a>
              </ContactNumber>
              <GoTriangleDown
                size={16}
                style={{
                  transform: isContactsOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </ContactItem>
            {isContactsOpen && (
              <DropdownContacts>
                <DropdownItem>
                  <div>
                    <FaPhoneAlt size={14} /> Олексій:
                  </div>{" "}
                  <a href="tel:+48515432123">+48 515 432 123</a>
                </DropdownItem>
                <DropdownItem>
                  <div>
                    <FaPhoneAlt size={14} /> Інга:
                  </div>{" "}
                  <a href="tel:+48765432123">+48 765 432 123</a>
                </DropdownItem>
              </DropdownContacts>
            )}
          </ContactUsBlock>

          <LanguegeBlock onClick={toggleLanguages}>
            <Languege>{selectedLanguage}</Languege>
            <GoTriangleDown
              size={16}
              style={{
                transform: isLanguagesOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
            {isLanguagesOpen && (
              <DropdownLanguages>
                <LanguageOption
                  isSelected={selectedLanguage === "UA"}
                  onClick={() => changeLanguage("UA")}
                >
                  UA
                </LanguageOption>
                <LanguageOption
                  isSelected={selectedLanguage === "PL"}
                  onClick={() => changeLanguage("PL")}
                >
                  PL
                </LanguageOption>
                <LanguageOption
                  isSelected={selectedLanguage === "RU"}
                  onClick={() => changeLanguage("RU")}
                >
                  RU
                </LanguageOption>
              </DropdownLanguages>
            )}
          </LanguegeBlock>

          <MenuBlock onClick={toggleNavbar}>
            <CgMenuRightAlt size={30} />
            <span>Меню</span>
          </MenuBlock>
        </HeaderBox>
      </HeaderWrapper>
      <NavBar isOpen={isNavbarOpen} onClose={() => setNavbarOpen(false)} />
    </>
  );
};

export default HeaderBlock;

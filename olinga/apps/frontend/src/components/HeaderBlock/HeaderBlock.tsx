import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
import NavBar from "../NavBar";

const HeaderBlock: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isContactsOpen, setContactsOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [isLanguagesOpen, setLanguagesOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || "pl"
  );

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  const toggleContacts = () => {
    setContactsOpen((prev) => !prev);
  };

  const toggleLanguages = () => {
    if (!isLanguagesOpen) {
      setLanguagesOpen(true);
    } else {
      setLanguagesOpen(false);
    }
  };

  const changeLanguage = (language: string) => {
    setSelectedLanguage(language);
    localStorage.setItem("language", language);
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
                {t("header.administrator_role")}:{" "}
                <a href="tel:+48515732832">+48 515 732 832</a>
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
                    <FaPhoneAlt size={14} /> {t("header.administrator_name1")}:
                  </div>{" "}
                  <a href="tel:+48515432123">+48 515 432 123</a>
                </DropdownItem>
                <DropdownItem>
                  <div>
                    <FaPhoneAlt size={14} /> {t("header.administrator_name2")}:
                  </div>{" "}
                  <a href="tel:+48765432123">+48 765 432 123</a>
                </DropdownItem>
              </DropdownContacts>
            )}
          </ContactUsBlock>

          <LanguegeBlock onClick={toggleLanguages}>
            <Languege>{selectedLanguage.toUpperCase()}</Languege>
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
                  isSelected={selectedLanguage === "uk"}
                  onClick={() => changeLanguage("uk")}
                >
                  UA
                </LanguageOption>
                <LanguageOption
                  isSelected={selectedLanguage === "pl"}
                  onClick={() => changeLanguage("pl")}
                >
                  PL
                </LanguageOption>
                <LanguageOption
                  isSelected={selectedLanguage === "ru"}
                  onClick={() => changeLanguage("ru")}
                >
                  RU
                </LanguageOption>
              </DropdownLanguages>
            )}
          </LanguegeBlock>

          <MenuBlock onClick={toggleNavbar}>
            <CgMenuRightAlt size={30} />
            <span>{t("header.menu")}</span>
          </MenuBlock>
        </HeaderBox>
      </HeaderWrapper>
      <NavBar isOpen={isNavbarOpen} onClose={() => setNavbarOpen(false)} />
    </>
  );
};

export default HeaderBlock;

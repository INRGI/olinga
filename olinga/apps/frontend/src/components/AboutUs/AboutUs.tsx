import React from 'react';
import {
  AbooutUsHeader,
  Container,
  ImageContainer,
  LeftContainer,
  LeftText,
  RightColoredText,
  RightContainer,
  RightItem,
  RightText,
  RightTitle,
  TextContainer,
} from './AboutUs.styled';
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <LeftContainer>
        <AbooutUsHeader>
          <h2>OLINGA</h2>
          <p>{t('aboutUs.head')}</p>
        </AbooutUsHeader>
        <LeftText>{t('aboutUs.description1')}</LeftText>
      </LeftContainer>

      <RightContainer>
        <ImageContainer>
          <img src="/public/about.webp" alt="About Us" />
        </ImageContainer>

        <TextContainer>
          <RightTitle>{t('aboutUs.subtitle')}</RightTitle>
          <RightItem>{t('aboutUs.text1')}</RightItem>
          <RightItem>{t('aboutUs.text2')}</RightItem>
          <RightItem>{t('aboutUs.text3')}</RightItem>
          <RightItem>{t('aboutUs.text4')}</RightItem>
          <RightText>{t('aboutUs.text5')}</RightText>
          <RightColoredText>{t('aboutUs.text6')}</RightColoredText>
        </TextContainer>
      </RightContainer>
    </Container>
  );
};

export default AboutUs;

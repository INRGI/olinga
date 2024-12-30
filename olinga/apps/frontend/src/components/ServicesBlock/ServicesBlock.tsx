import React from 'react';
import { Container, LeftContainer, LeftText, PromotionText, RightContainer, ServicesBlockHeader } from './ServicesBlock.styled';
import { useTranslation } from 'react-i18next';
import ConsultationForm from '../ConsultationForm';

const ServicesBlock: React.FC = () => {
    const { t } = useTranslation();
  return (
    <Container>
      <LeftContainer>
        <ServicesBlockHeader>
            <h2>{t('ServicesBlock.head')}</h2>
            <p>{t('ServicesBlock.subhead')}</p>
        </ServicesBlockHeader>
        <LeftText>{t('ServicesBlock.description')}</LeftText>

        <PromotionText>{t('ServicesBlock.promotion')}</PromotionText>

        <ConsultationForm />
      </LeftContainer>

      <RightContainer></RightContainer>
    </Container>
  );
};

export default ServicesBlock;

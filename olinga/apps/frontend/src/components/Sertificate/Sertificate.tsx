import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, SertificateButton, TextContainer } from './Sertificate.styled';

const Sertificate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <TextContainer>
          <h2>{t('sertificate.head')}</h2>
          <p>{t('sertificate.text')}</p>
        </TextContainer>
        <SertificateButton  href="https://studiomasazuzdrowiaiurodyolinga.booksy.com"
              aria-label="Booksy"
              target="_blank">
          {t('sertificate.button')}
        </SertificateButton>
      </Container>
    </>
  );
};

export default Sertificate;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { BackButton, NotFoundContainer, Subtitle, Title } from './NotFound.styled';


const NotFound: React.FC = () => {
  const {t} = useTranslation();
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Subtitle>{t('notFound.title')}</Subtitle>
      <BackButton to="/">{t('notFound.button')}</BackButton>
    </NotFoundContainer>
  );
};

export default NotFound;

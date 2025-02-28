import React, { useState } from 'react';
import {
  Button,
  Container,
  ItemText,
  RightContainer,
  SocialContainer,
  SocialItem,
  TitleContainer,
} from './Banner.styled';
import { useTranslation } from 'react-i18next';
import Modal from '../Modal/Modal';
import ConsultationForm from '../ConsultationForm';
import { GoDotFill } from 'react-icons/go';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const Banner: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);

  const socialLinksFacebook: { [key: string]: string } = {
    pl: 'https://www.instagram.com/olinga_massage/',
    uk: 'https://www.instagram.com/olinga_massage/',
    ru: 'https://www.instagram.com/olinga_massage/',
  };

  const socialLinksInstagram: { [key: string]: string } = {
    pl: 'https://www.facebook.com/Massage.Katowice',
    uk: 'https://www.facebook.com/masazystaoleksii',
    ru: 'https://www.facebook.com/masazystaoleksii',
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <Container>
      <RightContainer>
        <TitleContainer>
          <h2>{t('banner.head')}</h2>
          <h3>{t('banner.subhead')}</h3>
        </TitleContainer>

        <ItemText>
          <GoDotFill />
          {t('banner.text1')}
        </ItemText>
        <ItemText>
          <GoDotFill />
          {t('banner.text2')}
        </ItemText>
        <ItemText>
          <GoDotFill />
          {t('banner.text3')}
        </ItemText>
        <ItemText>
          <GoDotFill />
          {t('banner.text4')}
        </ItemText>

        <Button onClick={openModal}>{t('banner.button')}</Button>

        <SocialContainer>
          <SocialItem
            href={socialLinksFacebook[i18n.language]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </SocialItem>
          <SocialItem
            href={socialLinksInstagram[i18n.language]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </SocialItem>
          <SocialItem
            href="https://studiomasazuzdrowiaiurodyolinga.booksy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/booksy_review.png"
              alt="Booksy"
              style={{ width: '26px', height: '26px' }}
            />
          </SocialItem>
        </SocialContainer>
      </RightContainer>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ConsultationForm />
      </Modal>
    </Container>
  );
};

export default Banner;

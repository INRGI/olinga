import React, { useState } from 'react';
import { Button, Container, ItemText, RightContainer, SocialContainer, SocialItem, TitleContainer } from './BannerCourses.styled';
import { useTranslation } from 'react-i18next';
import Modal from '../Modal/Modal';
import ConsultationForm from '../ConsultationForm';
import { GoDotFill } from "react-icons/go";
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const BannerCourses: React.FC = () => {
    const { t } = useTranslation();
    const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <Container>
      <RightContainer>
        <TitleContainer>
            <h2>{t('banner_courses.head')}</h2>
            <h3>{t('banner_courses.subhead')}</h3>
        </TitleContainer>

        <ItemText><GoDotFill />{t('banner_courses.text1')}</ItemText>
        <ItemText><GoDotFill />{t('banner_courses.text2')}</ItemText>
        <ItemText><GoDotFill />{t('banner_courses.text3')}</ItemText>

        <Button onClick={openModal}>{t('banner_courses.button')}</Button>

        <SocialContainer>
          <SocialItem href="https://www.facebook.com/masazystaoleksii" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
          </SocialItem>
          <SocialItem href="https://www.instagram.com/olinga_massage?igsh=MXVlZmd5NmNvcHlmdQ==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialItem>
          <SocialItem href="https://studiomasazuzdrowiaiurodyolinga.booksy.com/" target="_blank" rel="noopener noreferrer">
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

export default BannerCourses;

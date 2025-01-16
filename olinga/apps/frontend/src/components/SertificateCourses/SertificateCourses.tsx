import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  SertificateButton,
  TextContainer,
} from './SertificateCourses.styled';
import Modal from '../Modal';
import ConsultationForm from '../ConsultationForm';

const SertificateCourses: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Container>
        <TextContainer>
          <h2>{t('sertificate_courses.head')}</h2>
          <p>{t('sertificate_courses.text')}</p>
        </TextContainer>
        <SertificateButton onClick={openModal}>
          {t('sertificate_courses.button')}
        </SertificateButton>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ConsultationForm />
        </Modal>
      </Container>
    </>
  );
};

export default SertificateCourses;

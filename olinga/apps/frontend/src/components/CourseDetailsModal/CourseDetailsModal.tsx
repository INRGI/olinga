import React from 'react';
import AdminModal from '../AdminModal';
import { BsDot } from 'react-icons/bs';
import {
  ModalContainer,
  ModalHeader,
  ModalDescription,
  LeftContainer,
  RightContainer,
  ImageContainer,
  PriceContainer,
  DateContainer,
  DurationContainer,
} from './CourseDetailsModal.styled';
import { useTranslation } from 'react-i18next';
import { CloseButton } from '../Modal/Modal.styled';
import { Course } from '../../pages/AdminDashboard/CourseService';

interface CourseDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: Course | null;
}

const CourseDetailsModal: React.FC<CourseDetailsModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  if (!initialData) return null;
  const { t, i18n } = useTranslation();

  const formatDate = (dateString: Date | null): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
  
    // Отримуємо день та місяць
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
  
    return `${day}.${month}`;
  };

  return (
    <AdminModal isOpen={isOpen} onClose={onClose}>
      <ModalContainer>
        <LeftContainer>
          <ModalHeader>{initialData.title[i18n.language]}</ModalHeader>

          <DateContainer>
          <p>{`${t('courses_list.starting')} ${formatDate(initialData.dateStart)}`}</p>
          </DateContainer>

          <DurationContainer>
            <p>{`${t('courses_list.duration')} ${initialData.frequency[i18n.language]}`}</p>
          </DurationContainer>

          <PriceContainer>
          <p>{`${t('courses_list.price')} ${initialData.price} zł`}</p>
          </PriceContainer>
            
          <ModalDescription>
            {initialData.details[i18n.language]}
          </ModalDescription>
          
        </LeftContainer>
        <RightContainer>
          <ImageContainer>
            <img
              src={initialData.imageUrl}
              alt={initialData.title[i18n.language]}
            />
          </ImageContainer>
        </RightContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </ModalContainer>
    </AdminModal>
  );
};

export default CourseDetailsModal;

import React from 'react';
import { Massage } from '../../pages/AdminDashboard/CategoryService';
import AdminModal from '../AdminModal';
import { BsDot } from 'react-icons/bs';
import {
  ModalContainer,
  ModalHeader,
  ModalDescription,
  ModalDetails,
  LeftContainer,
  RightContainer,
  ImageContainer,
  DateContainer,
} from './MassageDetailsModal.styled';
import { useTranslation } from 'react-i18next';
import { CloseButton } from '../Modal/Modal.styled';

interface MassageDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: Massage | null;
}

const MassageDetailsModal: React.FC<MassageDetailsModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  if (!initialData) return null;
  const { t, i18n } = useTranslation();

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours > 0 ? `${hours} ${t('time.hours')}` : ''} ${
      remainingMinutes > 0 ? `${remainingMinutes} ${t('time.minutes')}` : ''
    }`.trim();
  };

  return (
    <AdminModal isOpen={isOpen} onClose={onClose}>
      <ModalContainer>
        <LeftContainer>
          <ModalHeader>{initialData.title[i18n.language]}</ModalHeader>

          <ModalDescription>
            {initialData.description[i18n.language]}
          </ModalDescription>
          <ModalDetails>
            {[
              initialData.details1,
              initialData.details2,
              initialData.details3,
              initialData.details4,
            ]
              .filter(Boolean)
              .map((detail, index) => (
                <li key={index}>
                  <BsDot size={20} /> {detail[i18n.language]}
                </li>
              ))}
          </ModalDetails>

          <DateContainer>
            <h4>
              {`${initialData.price} zl`} /{' '}
              {formatDuration(Number(initialData.duration))}
            </h4>
          </DateContainer>
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

export default MassageDetailsModal;

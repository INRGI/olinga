import React, { useState } from 'react';
import AdminModal from '../AdminModal';
import { toastError, toastSuccess } from '../../helpers/toastify';
import FloatingLabelInput from '../FloatingLabelInput';
import {
  BlockHeader,
  CenterContainer,
  Container,
  CreateAbonementContainer,
  FileContainer,
  FileInput,
  LeftContainer,
  RightContainer,
  SaveButton,
} from './CreateAbonementModal.styled';
import TextareaInput from '../TexteAreaInput/TextareaInput';
import {
  Abonement,
  createAbonement,
} from '../../pages/AdminDashboard/AbonementService';

export type CreatedAbonement = Omit<Abonement, '_id'>;

interface CreateAbonementModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: CreatedAbonement | null;
}

const CreateAbonementModal: React.FC<CreateAbonementModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [abonementData, setAbonementData] = useState<CreatedAbonement>(
    initialData || {
      title: { pl: '', uk: '', ru: '' },
      description: { pl: '', uk: '', ru: '' },
      details1: { pl: '', uk: '', ru: '' },
      details2: { pl: '', uk: '', ru: '' },
      details3: { pl: '', uk: '', ru: '' },
      details4: { pl: '', uk: '', ru: '' },
      price: 0,
      duration: '',
    }
  );

  const [image, setImage] = useState<File | null>(null);

  const handleSave = async () => {
    const isFieldsValid =
      abonementData.title.pl &&
      abonementData.title.uk &&
      abonementData.title.ru &&
      abonementData.description.uk &&
      abonementData.description.pl &&
      abonementData.description.ru &&
      abonementData.details1.pl &&
      abonementData.details1.uk &&
      abonementData.details1.ru &&
      abonementData.details2.pl &&
      abonementData.details2.uk &&
      abonementData.details2.ru &&
      abonementData.details3.pl &&
      abonementData.details3.uk &&
      abonementData.details3.ru &&
      abonementData.details4.pl &&
      abonementData.details4.uk &&
      abonementData.details4.ru;

    if (!isFieldsValid || !image) {
      toastError('Please fill out all fields and upload an image.');
      return;
    }

    try {
      await createAbonement(abonementData, image);
      toastSuccess('Abonement created successfully');
      onClose();
    } catch (error) {
      toastError('Error creating abonement');
    }
  };

  return (
    <AdminModal isOpen={isOpen} onClose={onClose}>
      <CreateAbonementContainer>
        <BlockHeader>
          <h2>Create Abonement</h2>
        </BlockHeader>
        <Container>
          <LeftContainer>
            {['pl', 'uk', 'ru'].map((lang) => (
              <FloatingLabelInput
                key={`title-${lang}`}
                value={abonementData.title[lang]}
                onChange={(e) =>
                  setAbonementData({
                    ...abonementData,
                    title: { ...abonementData.title, [lang]: e.target.value },
                  })
                }
                placeholder={`Title (${
                  lang === 'uk' ? 'UA' : lang.toUpperCase()
                })`}
              />
            ))}
            {['pl', 'uk', 'ru'].map((lang) => (
              <TextareaInput
                key={`description-${lang}`}
                value={abonementData.description[lang]}
                onChange={(e) =>
                  setAbonementData({
                    ...abonementData,
                    description: {
                      ...abonementData.description,
                      [lang]: e.target.value,
                    },
                  })
                }
                placeholder={`Description (${
                  lang === 'uk' ? 'UA' : lang.toUpperCase()
                })`}
              />
            ))}
          </LeftContainer>

          <CenterContainer>
            {['pl', 'uk', 'ru'].map((lang) => (
              <FloatingLabelInput
                key={`details1-${lang}`}
                value={abonementData.details1[lang]}
                onChange={(e) =>
                  setAbonementData({
                    ...abonementData,
                    details1: {
                      ...abonementData.details1,
                      [lang]: e.target.value,
                    },
                  })
                }
                placeholder={`Benefits-1 (${
                  lang === 'uk' ? 'UA' : lang.toUpperCase()
                })`}
              />
            ))}
            {['pl', 'uk', 'ru'].map((lang) => (
              <FloatingLabelInput
                key={`details2-${lang}`}
                value={abonementData.details2[lang]}
                onChange={(e) =>
                  setAbonementData({
                    ...abonementData,
                    details2: {
                      ...abonementData.details2,
                      [lang]: e.target.value,
                    },
                  })
                }
                placeholder={`Benefits-2 (${
                  lang === 'uk' ? 'UA' : lang.toUpperCase()
                })`}
              />
            ))}
            {['pl', 'uk', 'ru'].map((lang) => (
              <FloatingLabelInput
                key={`details3-${lang}`}
                value={abonementData.details3[lang]}
                onChange={(e) =>
                  setAbonementData({
                    ...abonementData,
                    details3: {
                      ...abonementData.details3,
                      [lang]: e.target.value,
                    },
                  })
                }
                placeholder={`Benefits-3 (${
                  lang === 'uk' ? 'UA' : lang.toUpperCase()
                })`}
              />
            ))}
          </CenterContainer>

          <RightContainer>
            {['pl', 'uk', 'ru'].map((lang) => (
              <FloatingLabelInput
                key={`details4-${lang}`}
                value={abonementData.details4[lang]}
                onChange={(e) =>
                  setAbonementData({
                    ...abonementData,
                    details4: {
                      ...abonementData.details4,
                      [lang]: e.target.value,
                    },
                  })
                }
                placeholder={`Benefits-4 (${
                  lang === 'uk' ? 'UA' : lang.toUpperCase()
                })`}
              />
            ))}
            <FloatingLabelInput
              value={abonementData.price}
              onChange={(e) =>
                setAbonementData({
                  ...abonementData,
                  price: Number(e.target.value),
                })
              }
              placeholder="Price (PLN)"
            />

            <FloatingLabelInput
              value={abonementData.duration}
              onChange={(e) =>
                setAbonementData({ ...abonementData, duration: e.target.value })
              }
              placeholder="Duration (min)"
            />
            <FileContainer>
              <FileInput
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files) {
                    setImage(e.target.files[0]);
                  }
                }}
              />
            </FileContainer>
            <SaveButton onClick={handleSave}>Create</SaveButton>
          </RightContainer>
        </Container>
      </CreateAbonementContainer>
    </AdminModal>
  );
};

export default CreateAbonementModal;

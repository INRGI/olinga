import React, { useState } from 'react';
import AdminModal from '../AdminModal';
import { toastError, toastSuccess } from '../../helpers/toastify';
import { createMassage } from '../../pages/AdminDashboard/MassageService';
import FloatingLabelInput from '../FloatingLabelInput';
import { CreatedMassage } from '../CategoryAdmin/CategoryAdmin';
import {
  BlockHeader,
  CenterContainer,
  Container,
  CreateMassageContainer,
  FileContainer,
  FileInput,
  LeftContainer,
  RightContainer,
  SaveButton,
} from './CreateMassageForm.styled';
import TextareaInput from './TextareaInput';

interface CreateMassageFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: CreatedMassage | null;
  categoryId: string;
}

const CreateMassageForm: React.FC<CreateMassageFormProps> = ({
  isOpen,
  onClose,
  initialData,
  categoryId,
}) => {
  const [massageData, setMassageData] = useState<CreatedMassage>(
    initialData || {
      categoryId: categoryId,
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
      massageData.title.pl &&
      massageData.title.uk &&
      massageData.title.ru &&
      massageData.description.uk &&
      massageData.description.pl &&
      massageData.description.ru &&
      massageData.details1.pl &&
      massageData.details1.uk &&
      massageData.details1.ru &&
      massageData.details2.pl &&
      massageData.details2.uk &&
      massageData.details2.ru &&
      massageData.details3.pl &&
      massageData.details3.uk &&
      massageData.details3.ru &&
      massageData.details4.pl &&
      massageData.details4.uk &&
      massageData.details4.ru &&
      massageData.price > 0 &&
      massageData.duration;

    if (
      !isFieldsValid || 
      !image) {
      toastError('Please fill out all required fields and upload an image.');
      return;
    }

    try {
      await createMassage(massageData, image);
      toastSuccess('Massage created successfully');
      onClose();
    } catch (error) {
      toastError('Error creating massage');
    }
  };

  return (
    <AdminModal isOpen={isOpen} onClose={onClose}>
      <CreateMassageContainer>
        <BlockHeader>
          <h2>Create Massage</h2>
        </BlockHeader>
        <Container>
          <LeftContainer>
            {['pl', 'uk', 'ru'].map((lang) => (
              <FloatingLabelInput
                key={`title-${lang}`}
                value={massageData.title[lang]}
                onChange={(e) =>
                  setMassageData({
                    ...massageData,
                    title: { ...massageData.title, [lang]: e.target.value },
                  })
                }
                placeholder={`Title (${ lang === 'uk' ? 'UA' : lang.toUpperCase()})`}
              />
            ))}
            {['pl', 'uk', 'ru'].map((lang) => (
              <TextareaInput
                key={`description-${lang}`}
                value={massageData.description[lang]}
                onChange={(e) =>
                  setMassageData({
                    ...massageData,
                    description: {
                      ...massageData.description,
                      [lang]: e.target.value,
                    },
                  })
                }
                placeholder={`Description (${ lang === 'uk' ? 'UA' : lang.toUpperCase()})`}
              />
            ))}
          </LeftContainer>

          <CenterContainer>
            {['pl', 'uk', 'ru'].map((lang) => (
              <FloatingLabelInput
                key={`details1-${lang}`}
                value={massageData.details1[lang]}
                onChange={(e) =>
                  setMassageData({
                    ...massageData,
                    details1: {
                      ...massageData.details1,
                      [lang]: e.target.value,
                    },
                  })
                }
                placeholder={`Details-1 (${ lang === 'uk' ? 'UA' : lang.toUpperCase()})`}
              />
            ))}
            {['pl', 'uk', 'ru'].map((lang) => (
              <FloatingLabelInput
                key={`details2-${lang}`}
                value={massageData.details2[lang]}
                onChange={(e) =>
                  setMassageData({
                    ...massageData,
                    details2: {
                      ...massageData.details2,
                      [lang]: e.target.value,
                    },
                  })
                }
                placeholder={`Details-2 (${ lang === 'uk' ? 'UA' : lang.toUpperCase()})`}
              />
            ))}
            {['pl', 'uk', 'ru'].map((lang) => (
              <FloatingLabelInput
                key={`details3-${lang}`}
                value={massageData.details3[lang]}
                onChange={(e) =>
                  setMassageData({
                    ...massageData,
                    details3: {
                      ...massageData.details3,
                      [lang]: e.target.value,
                    },
                  })
                }
                placeholder={`Details-3 (${ lang === 'uk' ? 'UA' : lang.toUpperCase()})`}
              />
            ))}
          </CenterContainer>

          <RightContainer>
            {['pl', 'uk', 'ru'].map((lang) => (
              <FloatingLabelInput
                key={`details4-${lang}`}
                value={massageData.details4[lang]}
                onChange={(e) =>
                  setMassageData({
                    ...massageData,
                    details4: {
                      ...massageData.details4,
                      [lang]: e.target.value,
                    },
                  })
                }
                placeholder={`Details-4 (${ lang === 'uk' ? 'UA' : lang.toUpperCase()})`}
              />
            ))}
            <FloatingLabelInput
              value={massageData.price}
              onChange={(e) =>
                setMassageData({
                  ...massageData,
                  price: Number(e.target.value),
                })
              }
              placeholder="Price"
            />

            <FloatingLabelInput
              value={massageData.duration}
              onChange={(e) =>
                setMassageData({ ...massageData, duration: e.target.value })
              }
              placeholder="Duration"
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
      </CreateMassageContainer>
    </AdminModal>
  );
};

export default CreateMassageForm;

import React, { useState } from 'react';
import AdminModal from '../AdminModal';
import { toastError, toastSuccess } from '../../helpers/toastify';
import { createMassage } from '../../pages/AdminDashboard/MassageService';
import FloatingLabelInput from '../FloatingLabelInput';
import { CreatedMassage } from '../CategoryAdmin/CategoryAdmin';
import {
  BlockHeader,
  CreateMassageContainer,
  FileContainer,
  FileInput,
  SaveButton,
} from './CreateMassageForm.styled';

interface CreateMassageFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: CreatedMassage | null;
}

const CreateMassageForm: React.FC<CreateMassageFormProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [massageData, setMassageData] = useState<CreatedMassage>(
    initialData || {
      categoryId: '',
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
    if (!image) {
      toastError('Please upload an image.');
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
            placeholder={`Title (${lang.toUpperCase()})`}
          />
        ))}

        {['pl', 'uk', 'ru'].map((lang) => (
          <FloatingLabelInput
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
            placeholder={`Description (${lang.toUpperCase()})`}
          />
        ))}

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
      </CreateMassageContainer>
    </AdminModal>
  );
};

export default CreateMassageForm;

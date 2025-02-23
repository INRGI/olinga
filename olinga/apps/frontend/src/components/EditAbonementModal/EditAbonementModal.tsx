import React, { useEffect, useState } from 'react';
import AdminModal from '../AdminModal';
import {
  Container,
  LeftContainer,
  BlockHeader,
  CenterContainer,
  CreateAbonementContainer,
  FileContainer,
  RightContainer,
  SaveButton,
  PreviewButton,
  FileEditingInput,
} from '../CreateAbonementModal/CreateAbonementModal.styled';
import FloatingLabelInput from '../FloatingLabelInput';
import TextareaInput from '../TexteAreaInput/TextareaInput';
import { MdOutlinePreview } from 'react-icons/md';
import { Abonement } from '../../pages/AdminDashboard/AbonementService';

interface EditAbonementModalProps {
  isOpen: boolean;
  abonement: Abonement | null;
  onClose: () => void;
  onSave: (updatedAbonement: Abonement, image?: File | null) => void;
}

const EditAbonementModal: React.FC<EditAbonementModalProps> = ({
  isOpen,
  abonement,
  onClose,
  onSave,
}) => {
  const [editingAbonement, setEditingAbonement] = useState<Abonement | null>(
    abonement
  );
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(
    abonement?.imageUrl || null
  );

  useEffect(() => {
    setEditingAbonement(abonement);
    setPreviewImage(abonement?.imageUrl || null);
  }, [abonement]);

  if (!editingAbonement) return null;

  return (
    <AdminModal isOpen={isOpen} onClose={onClose}>
      <CreateAbonementContainer>
        <BlockHeader>
          <h2>Edit Abonement</h2>
        </BlockHeader>
        <Container>
          <LeftContainer>
            {['pl', 'uk', 'ru'].map((lang) => (
              <FloatingLabelInput
                key={`title-${lang}`}
                value={editingAbonement.title[lang]}
                onChange={(e) =>
                  setEditingAbonement({
                    ...editingAbonement,
                    title: {
                      ...editingAbonement.title,
                      [lang]: e.target.value,
                    },
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
                value={editingAbonement.description[lang]}
                onChange={(e) =>
                  setEditingAbonement({
                    ...editingAbonement,
                    description: {
                      ...editingAbonement.description,
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
                value={editingAbonement.details1[lang]}
                onChange={(e) =>
                  setEditingAbonement({
                    ...editingAbonement,
                    details1: {
                      ...editingAbonement.details1,
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
                value={editingAbonement.details2[lang]}
                onChange={(e) =>
                  setEditingAbonement({
                    ...editingAbonement,
                    details2: {
                      ...editingAbonement.details2,
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
                value={editingAbonement.details3[lang]}
                onChange={(e) =>
                  setEditingAbonement({
                    ...editingAbonement,
                    details3: {
                      ...editingAbonement.details3,
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
                value={editingAbonement.details4[lang]}
                onChange={(e) =>
                  setEditingAbonement({
                    ...editingAbonement,
                    details4: {
                      ...editingAbonement.details4,
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
              value={editingAbonement.price}
              onChange={(e) =>
                setEditingAbonement({
                  ...editingAbonement,
                  price: Number(e.target.value),
                })
              }
              placeholder="Price (PLN)"
            />

            <FloatingLabelInput
              value={editingAbonement.duration}
              onChange={(e) =>
                setEditingAbonement({
                  ...editingAbonement,
                  duration: e.target.value,
                })
              }
              placeholder="Duration (min)"
            />
            <FileContainer>
              <FileEditingInput
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files) {
                    setImage(e.target.files[0]);
                  }
                }}
              />
              {previewImage && (
                <PreviewButton
                  href={`${previewImage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdOutlinePreview />
                </PreviewButton>
              )}
            </FileContainer>
            <SaveButton
              onClick={() => {
                if (editingAbonement) {
                  onSave(editingAbonement, image);
                }
              }}
            >
              Save
            </SaveButton>
          </RightContainer>
        </Container>
      </CreateAbonementContainer>
    </AdminModal>
  );
};

export default EditAbonementModal;

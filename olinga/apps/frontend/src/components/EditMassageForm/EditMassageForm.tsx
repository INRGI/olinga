import React, { useEffect, useState } from 'react';
import { Massage } from '../../pages/AdminDashboard/CategoryService';
import AdminModal from '../AdminModal';
import {
  Container,
  LeftContainer,
  BlockHeader,
  CenterContainer,
  CreateMassageContainer,
  FileContainer,
  RightContainer,
  SaveButton,
  PreviewButton,
  FileEditingInput,
} from '../CreateMassageForm/CreateMassageForm.styled';
import FloatingLabelInput from '../FloatingLabelInput';
import TextareaInput from '../TexteAreaInput/TextareaInput';
import { MdOutlinePreview } from 'react-icons/md';

interface EditMassageModalProps {
  isOpen: boolean;
  massage: Massage | null;
  onClose: () => void;
  onSave: (
    updatedMassage: Massage,
    image?: File | null
  ) => void;
}

const EditMassageModal: React.FC<EditMassageModalProps> = ({
  isOpen,
  massage,
  onClose,
  onSave,
}) => {
  const [editingMassage, setEditingMassage] = useState<Massage | null>(massage);
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(
    massage?.imageUrl || null
  );

  useEffect(() => {
    setEditingMassage(massage);
    setPreviewImage(massage?.imageUrl || null);
  }, [massage]);

  if (!editingMassage) return null;

  return (
    <AdminModal isOpen={isOpen} onClose={onClose}>
      <CreateMassageContainer>
        <BlockHeader>
          <h2>Edit Massage</h2>
        </BlockHeader>
        <Container>
          <LeftContainer>
            {['pl', 'uk', 'ru'].map((lang) => (
              <FloatingLabelInput
                key={`title-${lang}`}
                value={editingMassage.title[lang]}
                onChange={(e) =>
                  setEditingMassage({
                    ...editingMassage,
                    title: { ...editingMassage.title, [lang]: e.target.value },
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
                value={editingMassage.description[lang]}
                onChange={(e) =>
                  setEditingMassage({
                    ...editingMassage,
                    description: {
                      ...editingMassage.description,
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
                value={editingMassage.details1[lang]}
                onChange={(e) =>
                  setEditingMassage({
                    ...editingMassage,
                    details1: {
                      ...editingMassage.details1,
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
                value={editingMassage.details2[lang]}
                onChange={(e) =>
                  setEditingMassage({
                    ...editingMassage,
                    details2: {
                      ...editingMassage.details2,
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
                value={editingMassage.details3[lang]}
                onChange={(e) =>
                  setEditingMassage({
                    ...editingMassage,
                    details3: {
                      ...editingMassage.details3,
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
                value={editingMassage.details4[lang]}
                onChange={(e) =>
                  setEditingMassage({
                    ...editingMassage,
                    details4: {
                      ...editingMassage.details4,
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
              value={editingMassage.price}
              onChange={(e) =>
                setEditingMassage({
                  ...editingMassage,
                  price: Number(e.target.value),
                })
              }
              placeholder="Price (PLN)"
            />

            <FloatingLabelInput
              value={editingMassage.duration}
              onChange={(e) =>
                setEditingMassage({
                  ...editingMassage,
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
                  href={`/${previewImage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdOutlinePreview />
                </PreviewButton>
              )}
            </FileContainer>
            <SaveButton
              onClick={() => {
                if (editingMassage) {
                  onSave(editingMassage, image);
                }
              }}
            >
              Save
            </SaveButton>
          </RightContainer>
        </Container>
      </CreateMassageContainer>
    </AdminModal>
  );
};

export default EditMassageModal;

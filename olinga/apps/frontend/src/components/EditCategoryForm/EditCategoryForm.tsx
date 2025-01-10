import React, { useState } from 'react';
import { Category } from '../../pages/AdminDashboard/CategoryService';
import AdminModal from '../AdminModal';
import {
  CategoryDetailsContainer,
  FileContainer,
  FileInput,
  SaveButton,
  ServicesBlockHeader,
  PreviewButton,
} from '../CategoryAdmin/CategoryAdmin.styled';
import FloatingLabelInput from '../FloatingLabelInput/FloatingLabelInput';
import { MdOutlinePreview } from 'react-icons/md';

interface EditCategoryModalProps {
  isOpen: boolean;
  category: Category | null;
  onClose: () => void;
  onSave: (updatedCategory: Category, image?: File | null) => void;
}

const EditCategoryModal: React.FC<EditCategoryModalProps> = ({
  isOpen,
  category,
  onClose,
  onSave,
}) => {
  const [editingCategory, setEditingCategory] = useState<Category | null>(
    category
  );
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(
    category?.imageUrl || null
  );

  if (!editingCategory) return null;

  return (
    <AdminModal isOpen={isOpen} onClose={onClose}>
      <CategoryDetailsContainer>
        <ServicesBlockHeader>
          <h2>Edit Category</h2>
        </ServicesBlockHeader>

        <FloatingLabelInput
          value={editingCategory.title.pl || ''}
          onChange={(e) =>
            setEditingCategory({
              ...editingCategory,
              title: { ...editingCategory.title, pl: e.target.value },
            })
          }
          placeholder="TITLE (PL)"
        />
        <FloatingLabelInput
          value={editingCategory.title.uk || ''}
          onChange={(e) =>
            setEditingCategory({
              ...editingCategory,
              title: { ...editingCategory.title, uk: e.target.value },
            })
          }
          placeholder="TITLE (UA)"
        />
        <FloatingLabelInput
          value={editingCategory.title.ru || ''}
          onChange={(e) =>
            setEditingCategory({
              ...editingCategory,
              title: { ...editingCategory.title, ru: e.target.value },
            })
          }
          placeholder="TITLE (RU)"
        />
        <FloatingLabelInput
          value={editingCategory.details.pl || ''}
          onChange={(e) =>
            setEditingCategory({
              ...editingCategory,
              details: { ...editingCategory.details, pl: e.target.value },
            })
          }
          placeholder="DETAILS (PL)"
        />
        <FloatingLabelInput
          value={editingCategory.details.uk || ''}
          onChange={(e) =>
            setEditingCategory({
              ...editingCategory,
              details: { ...editingCategory.details, uk: e.target.value },
            })
          }
          placeholder="DETAILS (UA)"
        />
        <FloatingLabelInput
          value={editingCategory.details.ru || ''}
          onChange={(e) =>
            setEditingCategory({
              ...editingCategory,
              details: { ...editingCategory.details, ru: e.target.value },
            })
          }
          placeholder="DETAILS (RU)"
        />
        <FileContainer>
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files) setImage(e.target.files[0]);
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
            if (editingCategory) {
              onSave(editingCategory, image);
            }
          }}
        >
          Save
        </SaveButton>
      </CategoryDetailsContainer>
    </AdminModal>
  );
};

export default EditCategoryModal;

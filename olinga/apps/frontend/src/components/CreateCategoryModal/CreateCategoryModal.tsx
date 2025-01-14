import { useState } from "react";
import { CreatedCategory } from "../CategoryAdmin/CategoryAdmin";
import AdminModal from "../AdminModal";
import { CategoryDetailsContainer, Input, SaveButton, ServicesBlockHeader } from "../CategoryAdmin/CategoryAdmin.styled";
import FloatingLabelInput from "../FloatingLabelInput";
import { toastError, toastSuccess } from "../../helpers/toastify";
import { createCategory } from "../../pages/AdminDashboard/CategoryService";

interface CreateCategoryFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: CreatedCategory | null;
}

const CreateCategoryForm: React.FC<CreateCategoryFormProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [categoryData, setCategoryData] = useState<CreatedCategory>(
    initialData || {
        title: {
          pl: '',
          uk: '',
          ru: '',
        },
        details: {
          pl: '',
          uk: '',
          ru: '',
        },
      }
  );

  const [image, setImage] = useState<File | null>(null);

  const handleCreateCategory = async (categoryData: CreatedCategory) => {
    const isFieldsValid =
      categoryData.title.pl &&
      categoryData.title.uk &&
      categoryData.title.ru &&
      categoryData.details.pl &&
      categoryData.details.uk &&
      categoryData.details.ru;

    if (!isFieldsValid) {
      toastError('Please fill out all fields.');
      return;
    }
    if (!image) {
      toastError('Please upload an image.');
      return;
    }

    try {
      await createCategory(categoryData, image);
      toastSuccess('Category created successfully');
    } catch (error) {
      toastError('Error creating category');
    } finally{
        onClose();
    }
  };

  return (
    <AdminModal
          isOpen={isOpen}
          onClose={onClose}
        >
          <CategoryDetailsContainer>
            <ServicesBlockHeader>
              <h2>Create Category</h2>
            </ServicesBlockHeader>
            <FloatingLabelInput
              value={categoryData.title.pl || ''}
              onChange={(e) =>
                setCategoryData({
                  ...categoryData,
                  title: {
                    ...categoryData.title,
                    pl: e.target.value,
                  },
                })
              }
              placeholder="TITLE (PL)"
            />

            <FloatingLabelInput
              value={categoryData.title.uk || ''}
              onChange={(e) =>
                setCategoryData({
                  ...categoryData,
                  title: {
                    ...categoryData.title,
                    uk: e.target.value,
                  },
                })
              }
              placeholder="TITLE (UA)"
            />
            <FloatingLabelInput
              value={categoryData.title.ru || ''}
              onChange={(e) =>
                setCategoryData({
                  ...categoryData,
                  title: {
                    ...categoryData.title,
                    ru: e.target.value,
                  },
                })
              }
              placeholder="TITLE (RU)"
            />

            <FloatingLabelInput
              value={categoryData.details.pl || ''}
              onChange={(e) =>
                setCategoryData({
                  ...categoryData,
                  details: {
                    ...categoryData.details,
                    pl: e.target.value,
                  },
                })
              }
              placeholder="DETAILS (PL)"
            />
            <FloatingLabelInput
              value={categoryData.details.uk || ''}
              onChange={(e) =>
                setCategoryData({
                  ...categoryData,
                  details: {
                    ...categoryData.details,
                    uk: e.target.value,
                  },
                })
              }
              placeholder="DETAILS (UA)"
            />
            <FloatingLabelInput
              value={categoryData.details.ru || ''}
              onChange={(e) =>
                setCategoryData({
                  ...categoryData,
                  details: {
                    ...categoryData.details,
                    ru: e.target.value,
                  },
                })
              }
              placeholder="DETAILS (RU)"
            />

            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files) {
                  setImage(e.target.files[0]);
                }
              }}
            />

            <SaveButton onClick={() => handleCreateCategory(categoryData)}>
              Save
            </SaveButton>
          </CategoryDetailsContainer>
        </AdminModal>
  );
};

export default CreateCategoryForm;

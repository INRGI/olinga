import React, { useEffect, useState } from 'react';
import {
  Category,
  Massage,
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from '../../pages/AdminDashboard/CategoryService';
import {
  Button,
  CategoriesContainer,
  CategoryCard,
  CategoryDetailsContainer,
  Container,
  DeleteButton,
  EditButton,
  FileContainer,
  FileInput,
  HeaderContainer,
  Input,
  LeftContainer,
  MassageCard,
  MassageList,
  PreviewButton,
  RightContainer,
  SaveButton,
  ServicesBlockHeader,
} from './CategoryAdmin.styled';
import { toastError, toastSuccess } from '../../helpers/toastify';
import AdminModal from '../AdminModal';
import { FaPlus } from 'react-icons/fa';
import FloatingLabelInput from '../FloatingLabelInput/FloatingLabelInput';
import { MdOutlinePreview } from 'react-icons/md';
import { createMassage } from '../../pages/AdminDashboard/MassageService';
import CreateMassageForm from '../CreateMassageForm/CreateMassageForm';
import CreateCategoryForm from '../CreateCategoryModal/CreateCategoryModal';

export type CreatedCategory = Omit<Category, '_id' | 'massages'>;
export type CreatedMassage = Omit<Massage, '_id'>;

const CategoryAdmin: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false);
  const [categoryCreateModalOpen, setCategoryCreateModalOpen] =
    useState<boolean>(false);
  const [editingItem, setEditingItem] = useState<Category | null>(null);
  const [creatingItem, setCreatingItem] = useState<CreatedCategory | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const [massages, setMassages] = useState<Massage[]>([]);
  const [massageModalOpen, setMassageModalOpen] = useState<boolean>(false);
  const [massageCreateModalOpen, setMassageCreateModalOpen] =
    useState<boolean>(false);
  const [editingMassageItem, setMassageEditingItem] = useState<Massage | null>(
    null
  );
  const [creatingMassageItem, setCreatingMassageItem] =
    useState<CreatedMassage | null>(null);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDeleteCategory = async (id: string) => {
    try {
      await deleteCategory(id);
      toastSuccess('Category deleted successfully');
      await fetchCategories();
    } catch (error) {
      toastError('Error deleting category');
    }
  };

  const handleCloseModal = async () => {
    setCategoryModalOpen(false);
    setCategoryCreateModalOpen(false);

    setMassageCreateModalOpen(false);
    setMassageModalOpen(false);
    setImage(null);
    
    await fetchCategories();
  };

  const handleUpdateCategory = async (id: string, categoryData: Category) => {
    try {
      if (image) {
        await updateCategory(id, categoryData, image);
      }
      if (!image) {
        await updateCategory(id, categoryData);
      }

      toastSuccess('Category updated successfully');
      await fetchCategories();
    } catch (error) {
      toastError('Error updating category');
    } finally {
      setCategoryModalOpen(false);
      setEditingItem(null);
    }
  };

  return (
    <Container>
      <LeftContainer>
        <HeaderContainer>
          <ServicesBlockHeader>
            <h2>Massage Categories</h2>
            <p>All categories below</p>
          </ServicesBlockHeader>
          <Button
            onClick={() => {
              setCreatingItem({
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
              });
              setCategoryCreateModalOpen(true);
            }}
          >
            <FaPlus />
          </Button>
        </HeaderContainer>
        <CategoriesContainer>
          {categories?.length > 0 ? (
            categories.map((category) => (
              <CategoryCard
                key={category._id}
                isActive={activeCategory === category._id}
                onClick={() => setActiveCategory(category._id)}
              >
                <h2>{category.title.ru}</h2>
                <div>
                  <EditButton
                    onClick={() => {
                      setEditingItem(category);
                      if (category.imageUrl) {
                        setPreviewImage(category.imageUrl);
                      }

                      setCategoryModalOpen(true);
                    }}
                  >
                    Edit
                  </EditButton>
                  <DeleteButton
                    onClick={() => handleDeleteCategory(category._id)}
                  >
                    Delete
                  </DeleteButton>
                </div>
              </CategoryCard>
            ))
          ) : (
            <CategoryCard isActive={false}>
              No categories available.
            </CategoryCard>
          )}
        </CategoriesContainer>
      </LeftContainer>
      <RightContainer>
        {/* Additional content for the right container */}
        <Button
          onClick={() => {
            setCreatingMassageItem({
              categoryId: '677d80c36f637aaff5c60f1c',
              title: {
                pl: '',
                uk: '',
                ru: '',
              },
              description: {
                pl: '',
                uk: '',
                ru: '',
              },
              details1: {
                pl: '',
                uk: '',
                ru: '',
              },
              details2: {
                pl: '',
                uk: '',
                ru: '',
              },
              details3: {
                pl: '',
                uk: '',
                ru: '',
              },
              details4: {
                pl: '',
                uk: '',
                ru: '',
              },
              price: 0,
              duration: '',
            });
            setMassageCreateModalOpen(true);
          }}
        >
          <FaPlus />
        </Button>
      </RightContainer>
      {editingItem && (
        <AdminModal
          isOpen={categoryModalOpen}
          onClose={() => handleCloseModal()}
        >
          <CategoryDetailsContainer>
            <ServicesBlockHeader>
              <h2>Edit Category</h2>
            </ServicesBlockHeader>

            <FloatingLabelInput
              value={editingItem.title.pl || ''}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  title: {
                    ...editingItem.title,
                    pl: e.target.value,
                  },
                })
              }
              placeholder="TITLE (PL)"
            />

            <FloatingLabelInput
              value={editingItem.title.uk || ''}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  title: {
                    ...editingItem.title,
                    uk: e.target.value,
                  },
                })
              }
              placeholder="TITLE (UA)"
            />
            <FloatingLabelInput
              value={editingItem.title.ru || ''}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  title: {
                    ...editingItem.title,
                    ru: e.target.value,
                  },
                })
              }
              placeholder="TITLE (RU)"
            />
            <FloatingLabelInput
              value={editingItem.details.pl || ''}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  details: {
                    ...editingItem.details,
                    pl: e.target.value,
                  },
                })
              }
              placeholder="DETAILS (PL)"
            />
            <FloatingLabelInput
              value={editingItem.details.uk || ''}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  details: {
                    ...editingItem.details,
                    uk: e.target.value,
                  },
                })
              }
              placeholder="DETAILS (UA)"
            />
            <FloatingLabelInput
              value={editingItem.details.ru || ''}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  details: {
                    ...editingItem.details,
                    ru: e.target.value,
                  },
                })
              }
              placeholder="DETAILS (RU)"
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
              <PreviewButton
                href={`/${previewImage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlinePreview />
              </PreviewButton>
            </FileContainer>
            <SaveButton
              onClick={() => handleUpdateCategory(editingItem._id, editingItem)}
            >
              Save
            </SaveButton>
          </CategoryDetailsContainer>
        </AdminModal>
      )}
      {creatingItem && (
        <CreateCategoryForm
        isOpen={categoryCreateModalOpen}
        onClose={() => handleCloseModal()}
        initialData={creatingItem}
      />
      )}

      <CreateMassageForm
        isOpen={massageCreateModalOpen}
        onClose={() => handleCloseModal()}
        initialData={creatingMassageItem}
      />
    </Container>
  );
};

export default CategoryAdmin;

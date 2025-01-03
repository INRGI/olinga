import React, { useEffect, useState } from 'react';
import {
  Category,
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
  HeaderContainer,
  Input,
  LeftContainer,
  MassageCard,
  MassageList,
  RightContainer,
  SaveButton,
  ServicesBlockHeader,
} from './CategoryAdmin.styled';
import { toastError, toastSuccess } from '../../helpers/toastify';
import AdminModal from '../AdminModal';
import { FaPlus } from 'react-icons/fa';

type CreatedCategory = Omit<Category, '_id' | 'massages'>;

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

  const handleUpdateCategory = async (id: string, categoryData: Category) => {
    try {
      await updateCategory(id, categoryData, image);
      toastSuccess('Category updated successfully');
      await fetchCategories();
    } catch (error) {
      toastError('Error updating category');
    } finally {
      setCategoryModalOpen(false);
      setEditingItem(null);
    }
  };

  const handleCreateCategory = async (categoryData: CreatedCategory) => {
    if (!image) {
      toastError('Please upload an image.');
      return;
    }
    
    try {
      await createCategory(categoryData, image);
      toastSuccess('Category created successfully');
      await fetchCategories();
    } catch (error) {
      toastError('Error creating category');
    } finally {
      setCategoryCreateModalOpen(false);
      setCreatingItem(null);
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
                name: '',
                details: '',
                translations: {
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
                <h2>{category.name}</h2>
                <div>
                  <EditButton
                    onClick={() => {
                      setEditingItem(category);
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
        <h2>ttest</h2>
      </RightContainer>
      {editingItem && (
        <AdminModal
          isOpen={categoryModalOpen}
          onClose={() => setCategoryModalOpen(false)}
        >
          <CategoryDetailsContainer>
            <ServicesBlockHeader>
              <h2>Category Details</h2>
            </ServicesBlockHeader>

            <Input
              value={editingItem.name || ''}
              onChange={(e) =>
                setEditingItem({ ...editingItem, name: e.target.value })
              }
              placeholder="Name"
              required
            />
            <Input
              value={editingItem.details || ''}
              onChange={(e) =>
                setEditingItem({ ...editingItem, details: e.target.value })
              }
              placeholder="Details"
              required
            />

            <Input
              value={editingItem.translations.pl || ''}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  translations: {
                    ...editingItem.translations,
                    pl: e.target.value,
                  },
                })
              }
              placeholder="PL"
              required
            />

            <Input
              value={editingItem.translations.uk || ''}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  translations: {
                    ...editingItem.translations,
                    uk: e.target.value,
                  },
                })
              }
              placeholder="UA"
              required
            />
            <Input
              value={editingItem.translations.ru || ''}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  translations: {
                    ...editingItem.translations,
                    ru: e.target.value,
                  },
                })
              }
              placeholder="RU"
              required
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
            <SaveButton
              onClick={() => handleUpdateCategory(editingItem._id, editingItem)}
            >
              Save
            </SaveButton>
          </CategoryDetailsContainer>
        </AdminModal>
      )}
      {creatingItem && (
        <AdminModal
          isOpen={categoryCreateModalOpen}
          onClose={() => setCategoryCreateModalOpen(false)}
        >
          <CategoryDetailsContainer>
            <ServicesBlockHeader>
              <h2>Create Category</h2>
            </ServicesBlockHeader>

            <Input
              value={creatingItem.name || ''}
              onChange={(e) =>
                setCreatingItem({ ...creatingItem, name: e.target.value })
              }
              placeholder="Name"
              required
            />
            <Input
              value={creatingItem.details || ''}
              onChange={(e) =>
                setCreatingItem({ ...creatingItem, details: e.target.value })
              }
              placeholder="Details"
              required
            />

            <Input
              value={creatingItem.translations.pl || ''}
              onChange={(e) =>
                setCreatingItem({
                  ...creatingItem,
                  translations: {
                    ...creatingItem.translations,
                    pl: e.target.value,
                  },
                })
              }
              placeholder="PL"
              required
            />

            <Input
              value={creatingItem.translations.uk || ''}
              onChange={(e) =>
                setCreatingItem({
                  ...creatingItem,
                  translations: {
                    ...creatingItem.translations,
                    uk: e.target.value,
                  },
                })
              }
              placeholder="UA"
              required
            />
            <Input
              value={creatingItem.translations.ru || ''}
              onChange={(e) =>
                setCreatingItem({
                  ...creatingItem,
                  translations: {
                    ...creatingItem.translations,
                    ru: e.target.value,
                  },
                })
              }
              placeholder="RU"
              required
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

            <SaveButton onClick={() => handleCreateCategory(creatingItem)}>
              Save
            </SaveButton>
          </CategoryDetailsContainer>
        </AdminModal>
      )}
    </Container>
  );
};

export default CategoryAdmin;

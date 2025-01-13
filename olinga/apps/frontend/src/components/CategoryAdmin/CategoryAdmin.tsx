import React, { useEffect, useState } from 'react';
import {
  Category,
  Massage,
  deleteCategory,
  getCategories,
  updateCategory,
} from '../../pages/AdminDashboard/CategoryService';
import {
  Button,
  CategoriesContainer,
  CategoryCard,
  Container,
  DeleteButton,
  EditButton,
  HeaderContainer,
  LeftContainer,
  MassageCard,
  MassagesContainer,
  RightContainer,
  ServicesBlockHeader,
} from './CategoryAdmin.styled';
import { toastError, toastSuccess } from '../../helpers/toastify';
import { FaPlus } from 'react-icons/fa';
import CreateMassageForm from '../CreateMassageForm/CreateMassageForm';
import CreateCategoryForm from '../CreateCategoryModal/CreateCategoryModal';
import EditCategoryModal from '../EditCategoryForm/EditCategoryForm';
import { deleteMassage, getMassagesByCategory, updateMassage } from '../../pages/AdminDashboard/MassageService';
import EditMassageModal from '../EditMassageForm/EditMassageForm';

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
    setActiveCategory(data[0]?._id);
  };

  const fetchMassagesByCategory = async () => {
    if (!activeCategory) return;
    const data = await getMassagesByCategory(activeCategory);
    setMassages(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMassagesByCategory();
  }, [activeCategory]);

  const handleDeleteCategory = async (id: string) => {
    try {
      await deleteCategory(id);
      toastSuccess('Category deleted successfully');
      await fetchCategories();
    } catch (error) {
      toastError('Error deleting category');
    }
  };

  const handleDeleteMassage = async (id: string) => {
    try {
      await deleteMassage(id);
      toastSuccess('Massage deleted successfully');
      await fetchMassagesByCategory();
    } catch (error) {
      toastError('Error deleting massage');
    }
  };

  const handleCloseModal = async () => {
    setCategoryModalOpen(false);
    setCategoryCreateModalOpen(false);

    setMassageCreateModalOpen(false);
    setMassageModalOpen(false);
    setImage(null);
    setCreatingItem(null);
    setCreatingMassageItem(null);
  };

  const handleUpdateCategory = async (
    id: string,
    categoryData: Category,
    image?: File | null
  ) => {
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

  const handleUpdateMassage = async (
    massageData: Massage,
    image?: File | null
  ) => {
    try {
      if (image) {
        await updateMassage(massageData._id, massageData, image);
      }
      if (!image) {
        await updateMassage(massageData._id, massageData);
      }

      toastSuccess('Massage updated successfully');
      await fetchMassagesByCategory();
    } catch (error) {
      toastError('Error updating massage');
    } finally {
      setMassageModalOpen(false);
      setMassageEditingItem(null);
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
        <HeaderContainer>
          <ServicesBlockHeader>
            <h2>
              Massages for (
              {activeCategory &&
                categories.find((category) => category._id === activeCategory)
                  ?.title.ru}
              )
            </h2>
            <p>All massages below</p>
          </ServicesBlockHeader>
          <Button
            onClick={() => {
              setCreatingMassageItem({
                categoryId: activeCategory || '',
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
        </HeaderContainer>
        <MassagesContainer>
          {massages?.length > 0 ? (
            massages.map((massage) => (
              <MassageCard key={massage._id}>
                <h2>{massage.title.ru}</h2>
                <div>
                  <EditButton
                    onClick={() => {
                      setMassageEditingItem(massage);
                      setMassageModalOpen(true);
                    }}
                  >
                    Edit
                  </EditButton>
                  <DeleteButton
                    onClick={() => handleDeleteMassage(massage._id)}
                  >
                    Delete
                  </DeleteButton>
                </div>
              </MassageCard>
            ))
          ) : (
            <MassageCard style={{ cursor: 'default' }}>No massages available. Create one.</MassageCard>
          )}
        </MassagesContainer>
      </RightContainer>
      {editingItem && (
        <EditCategoryModal
          isOpen={categoryModalOpen}
          onClose={() => handleCloseModal()}
          category={editingItem}
          onSave={handleUpdateCategory}
        />
      )}
      {editingMassageItem && (
        <EditMassageModal
          isOpen={massageModalOpen}
          onClose={() => handleCloseModal()}
          massage={editingMassageItem}
          onSave={handleUpdateMassage}
        />
      )}
      {creatingItem && (
        <CreateCategoryForm
          isOpen={categoryCreateModalOpen}
          onClose={() => handleCloseModal()}
          initialData={creatingItem}
        />
      )}
      {activeCategory && creatingMassageItem && (
        <CreateMassageForm
          isOpen={massageCreateModalOpen}
          onClose={() => handleCloseModal()}
          initialData={creatingMassageItem}
          categoryId={activeCategory}
        />
      )}
    </Container>
  );
};

export default CategoryAdmin;

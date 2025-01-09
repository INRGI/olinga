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

type CreatedCategory = Omit<Category, '_id' | 'massages'>;
type CreatedMassage = Omit<Massage, '_id'>;

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
  const [editingMassageItem, setMassageEditingItem] = useState<Massage | null>(null);
  const [creatingMassageItem, setCreatingMassageItem] = useState<CreatedMassage | null>(
    null
  );

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

  const handleCloseModal = () => {
    setCategoryModalOpen(false);
    setCategoryCreateModalOpen(false);

    setMassageCreateModalOpen(false);
    setMassageModalOpen(false);
    setImage(null);
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

  const handleCreateMassage = async (massageData: CreatedMassage) => {
    if (!image) {
      toastError('Please upload an image.');
      return;
    }

    try {
      await createMassage(massageData, image);
      toastSuccess('Massage created successfully');
      // await fetchCategories();
    } catch (error) {
      toastError('Error creating massage');
    } finally {
      setMassageCreateModalOpen(false);
      setCreatingMassageItem(null);
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
                duration: {
                  pl: '',
                  uk: '',
                  ru: '',
                },
                imageUrl: '',
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
          onClose={() => setCategoryModalOpen(false)}
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
        <AdminModal
          isOpen={categoryCreateModalOpen}
          onClose={() => handleCloseModal}
        >
          <CategoryDetailsContainer>
            <ServicesBlockHeader>
              <h2>Create Category</h2>
            </ServicesBlockHeader>
            <FloatingLabelInput
              value={creatingItem.title.pl || ''}
              onChange={(e) =>
                setCreatingItem({
                  ...creatingItem,
                  title: {
                    ...creatingItem.title,
                    pl: e.target.value,
                  },
                })
              }
              placeholder="TITLE (PL)"
            />

            <FloatingLabelInput
              value={creatingItem.title.uk || ''}
              onChange={(e) =>
                setCreatingItem({
                  ...creatingItem,
                  title: {
                    ...creatingItem.title,
                    uk: e.target.value,
                  },
                })
              }
              placeholder="TITLE (UA)"
            />
            <FloatingLabelInput
              value={creatingItem.title.ru || ''}
              onChange={(e) =>
                setCreatingItem({
                  ...creatingItem,
                  title: {
                    ...creatingItem.title,
                    ru: e.target.value,
                  },
                })
              }
              placeholder="TITLE (RU)"
            />

            <FloatingLabelInput
              value={creatingItem.details.pl || ''}
              onChange={(e) =>
                setCreatingItem({
                  ...creatingItem,
                  details: {
                    ...creatingItem.details,
                    pl: e.target.value,
                  },
                })
              }
              placeholder="DETAILS (PL)"
            />
            <FloatingLabelInput
              value={creatingItem.details.uk || ''}
              onChange={(e) =>
                setCreatingItem({
                  ...creatingItem,
                  details: {
                    ...creatingItem.details,
                    uk: e.target.value,
                  },
                })
              }
              placeholder="DETAILS (UA)"
            />
            <FloatingLabelInput
              value={creatingItem.details.ru || ''}
              onChange={(e) =>
                setCreatingItem({
                  ...creatingItem,
                  details: {
                    ...creatingItem.details,
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

            <SaveButton onClick={() => handleCreateCategory(creatingItem)}>
              Save
            </SaveButton>
          </CategoryDetailsContainer>
        </AdminModal>
      )}

{creatingMassageItem && (
        <AdminModal
          isOpen={massageCreateModalOpen}
          onClose={() => handleCloseModal}
        >
          <CategoryDetailsContainer>
            <ServicesBlockHeader>
              <h2>Create Massage</h2>
            </ServicesBlockHeader>
            <FloatingLabelInput
              value={creatingMassageItem.title.pl || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  title: {
                    ...creatingMassageItem.title,
                    pl: e.target.value,
                  },
                })
              }
              placeholder="TITLE (PL)"
            />

            <FloatingLabelInput
              value={creatingMassageItem.title.uk || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  title: {
                    ...creatingMassageItem.title,
                    uk: e.target.value,
                  },
                })
              }
              placeholder="TITLE (UA)"
            />
            <FloatingLabelInput
              value={creatingMassageItem.title.ru || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  title: {
                    ...creatingMassageItem.title,
                    ru: e.target.value,
                  },
                })
              }
              placeholder="TITLE (RU)"
            />

<FloatingLabelInput
              value={creatingMassageItem.description.ru || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  description: {
                    ...creatingMassageItem.description,
                    ru: e.target.value,
                  },
                })
              }
              placeholder="Description (RU)"
            />

<FloatingLabelInput
              value={creatingMassageItem.description.pl || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  description: {
                    ...creatingMassageItem.description,
                    pl: e.target.value,
                  },
                })
              }
              placeholder="Description (PL)"
            />
            <FloatingLabelInput
              value={creatingMassageItem.description.uk || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  description: {
                    ...creatingMassageItem.description,
                    uk: e.target.value,
                  },
                })
              }
              placeholder="Description (UA)"
            />

           

<FloatingLabelInput
              value={creatingMassageItem.duration.uk || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  duration: {
                    ...creatingMassageItem.duration,
                    uk: e.target.value,
                  },
                })
              }
              placeholder="duration (UA)"
            />
            <FloatingLabelInput
              value={creatingMassageItem.duration.ru || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  duration: {
                    ...creatingMassageItem.duration,
                    ru: e.target.value,
                  },
                })
              }
              placeholder="duration (RU)"
            />
            <FloatingLabelInput
              value={creatingMassageItem.duration.pl || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  duration: {
                    ...creatingMassageItem.duration,
                    pl: e.target.value,
                  },
                })
              }
              placeholder="duration (PL)"
            />


<FloatingLabelInput
              value={creatingMassageItem.details1.pl || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  details1: {
                    ...creatingMassageItem.details1,
                    pl: e.target.value,
                  },
                })
              }
              placeholder="details1 (PL)"
            />
            <FloatingLabelInput
              value={creatingMassageItem.details1.ru || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  details1: {
                    ...creatingMassageItem.details1,
                    ru: e.target.value,
                  },
                })
              }
              placeholder="details1 (RU)"
            />
            <FloatingLabelInput
              value={creatingMassageItem.details1.uk || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  details1: {
                    ...creatingMassageItem.details1,
                    uk: e.target.value,
                  },
                })
              }
              placeholder="details1 (UA)"
            />
            


            <FloatingLabelInput
              value={creatingMassageItem.details2.pl || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  details2: {
                    ...creatingMassageItem.details2,
                    pl: e.target.value,
                  },
                })
              }
              placeholder="details2 (PL)"
            />
            <FloatingLabelInput
              value={creatingMassageItem.details2.ru || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  details2: {
                    ...creatingMassageItem.details2,
                    ru: e.target.value,
                  },
                })
              }
              placeholder="details2 (RU)"
            />
            <FloatingLabelInput
              value={creatingMassageItem.details2.uk || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  details2: {
                    ...creatingMassageItem.details2,
                    uk: e.target.value,
                  },
                })
              }
              placeholder="details2 (UA)"
            />
            



            <FloatingLabelInput
              value={creatingMassageItem.details3.pl || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  details3: {
                    ...creatingMassageItem.details3,
                    pl: e.target.value,
                  },
                })
              }
              placeholder="details3 (PL)"
            />
            <FloatingLabelInput
              value={creatingMassageItem.details3.ru || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  details3: {
                    ...creatingMassageItem.details3,
                    ru: e.target.value,
                  },
                })
              }
              placeholder="details3 (RU)"
            />
            <FloatingLabelInput
              value={creatingMassageItem.details3.uk || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  details3: {
                    ...creatingMassageItem.details3,
                    uk: e.target.value,
                  },
                })
              }
              placeholder="details3 (UA)"
            />



<FloatingLabelInput
              value={creatingMassageItem.details4.pl || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  details4: {
                    ...creatingMassageItem.details4,
                    pl: e.target.value,
                  },
                })
              }
              placeholder="details4 (PL)"
            />
            <FloatingLabelInput
              value={creatingMassageItem.details4.ru || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  details4: {
                    ...creatingMassageItem.details4,
                    ru: e.target.value,
                  },
                })
              }
              placeholder="details4 (RU)"
            />
            <FloatingLabelInput
              value={creatingMassageItem.details4.uk || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  details4: {
                    ...creatingMassageItem.details4,
                    uk: e.target.value,
                  },
                })
              }
              placeholder="details4 (UA)"
            />


<FloatingLabelInput
              value={`${creatingMassageItem.price}` || ''}
              onChange={(e) =>
                setCreatingMassageItem({
                  ...creatingMassageItem,
                  price: creatingMassageItem.price,

                })
              }
              placeholder="PRICE"
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

            <SaveButton onClick={() => handleCreateMassage(creatingMassageItem)}>
              Save
            </SaveButton>
          </CategoryDetailsContainer>
        </AdminModal>
      )}
    </Container>
  );
};

export default CategoryAdmin;

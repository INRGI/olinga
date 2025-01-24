import { useEffect, useState } from 'react';
import { toastError, toastSuccess } from '../../helpers/toastify';
import {
  Button,
  Container,
  AbonementCard,
  AbonementsContainer,
  HeaderContainer,
} from './AbonementsAdmin.styled';
import {
  DeleteButton,
  EditButton,
  ServicesBlockHeader,
} from '../CategoryAdmin/CategoryAdmin.styled';
import { FaPlus } from 'react-icons/fa';
import {
  Abonement,
  deleteAbonement,
  getAbonements,
  updateAbonement,
} from '../../pages/AdminDashboard/AbonementService';
import CreateAbonementModal, {
  CreatedAbonement,
} from '../CreateAbonementModal/CreateAbonementModal';
import EditAbonementModal from '../EditAbonementModal';
import SearchInput from '../FloatingLabelInput/SearchInput';

const AbonementsAdmin: React.FC = () => {
  const [abonements, seAbonements] = useState<Abonement[]>([]);
  const [abonemetsModalOpen, setAbonemetsModalOpen] = useState<boolean>(false);
  const [abonementsCreateModalOpen, setAbonementsCreateModalOpen] =
    useState<boolean>(false);
  const [creatingItem, setCreatingItem] = useState<CreatedAbonement | null>(
    null
  );
  const [editingItem, setEditingItem] = useState<Abonement | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string>('');

  const filteredAbonements = abonements.filter((abonement) =>
  abonement.title.ru.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    fetchAbonements();
  }, []);

  const handleCloseModal = async () => {
    setImage(null);
    setCreatingItem(null);
    setEditingItem(null);
    setAbonemetsModalOpen(false);
    setAbonementsCreateModalOpen(false);
  };

  const fetchAbonements = async () => {
    const data = await getAbonements();
    seAbonements(data);
  };

  const handleUpdateAbonement = async (
    abonementData: Abonement,
    image?: File | null
  ) => {
    try {
      if (image) {
        await updateAbonement(abonementData._id, abonementData, image);
      }
      if (!image) {
        await updateAbonement(abonementData._id, abonementData);
      }
      fetchAbonements();
      toastSuccess('Abonement updated successfully');
    } catch (error) {
      toastError('Error updating abonement');
    } finally {
      setAbonemetsModalOpen(false);
      setEditingItem(null);
    }
  };

  const handleDeleteAbonement = async (id: string) => {
    try {
      await deleteAbonement(id);
      toastSuccess('Abonement deleted successfully');
      await fetchAbonements();
    } catch (error) {
      toastError('Error deleting abonement');
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <ServicesBlockHeader>
          <h2>Abonements</h2>
          <p>All abonements below</p>
        </ServicesBlockHeader>
        <Button
          onClick={() => {
            setCreatingItem({
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
            setAbonementsCreateModalOpen(true);
          }}
        >
          <FaPlus />
        </Button>
      </HeaderContainer>
      <SearchInput
            value={searchText || ''}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for Title(RU)"
          />
      <AbonementsContainer>
        {filteredAbonements?.length > 0 ? (
          filteredAbonements.map((abonement) => (
            <AbonementCard key={abonement._id}>
              <h2>{abonement.title.ru}</h2>
              <div>
                <EditButton
                  onClick={() => {
                    setEditingItem(abonement);
                    if (abonement.imageUrl) {
                      setPreviewImage(abonement.imageUrl);
                    }

                    setAbonemetsModalOpen(true);
                  }}
                >
                  Edit
                </EditButton>
                <DeleteButton
                  onClick={() => handleDeleteAbonement(abonement._id)}
                >
                  Delete
                </DeleteButton>
              </div>
            </AbonementCard>
          ))
        ) : (
          <AbonementCard>No abonements available.</AbonementCard>
        )}
      </AbonementsContainer>

      {creatingItem && (
        <CreateAbonementModal
          isOpen={abonementsCreateModalOpen}
          onClose={() => {
            handleCloseModal();
            fetchAbonements();
          }}
          initialData={creatingItem}
        />
      )}
      {editingItem && (
        <EditAbonementModal
          isOpen={abonemetsModalOpen}
          onClose={() => handleCloseModal()}
          abonement={editingItem}
          onSave={handleUpdateAbonement}
        />
      )}
    </Container>
  );
};

export default AbonementsAdmin;

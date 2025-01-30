import React, { useEffect, useState } from 'react';
import {
  Category,
  Massage,
  getCategoryById,
} from '../../pages/AdminDashboard/CategoryService';
import { getMassagesByCategory } from '../../pages/AdminDashboard/MassageService';
import { useTranslation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';
import {
  Button,
  Card,
  Container,
  Content,
  Overlay,
  Title,
  Placeholder,
  ButtonContainer,
  DateContainer,
  CardContainer,
  TopContainer,
  MassagesBlockHeader,
  ButtonBack,
} from './Massages.styled';
import { BsDot } from 'react-icons/bs';
import MassageDetailsModal from '../../components/MassageDetailsModal';
import { ContainerEmpty } from '../Abonements/Abonements.styled';

const Massages: React.FC = () => {
  const categoryId = useParams().categoryId || '';
  const [category, setCategories] = useState<Category | null>(null);
  const [massages, setMassages] = useState<Massage[]>([]);
  const [noMassages, setNoMassages] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMassage, setSelectedMassage] = useState<Massage | null>(null);

  const fetchCategoryById = async () => {
    try {
      const data = await getCategoryById(categoryId);
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    const fetchMassages = async () => {
      const data = await getMassagesByCategory(categoryId);
      if (data.length === 0) setNoMassages(true);
      setMassages(data);
    };
    fetchCategoryById();
    fetchMassages();
  }, [categoryId]);

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours > 0 ? `${hours} ${t('time.hours')}` : ''} ${
      remainingMinutes > 0 ? `${remainingMinutes} ${t('time.minutes')}` : ''
    }`.trim();
  };

  const handleOpenModal = (massage: Massage) => {
    setSelectedMassage(massage);
    setModalIsOpen(true);
  };

  if (noMassages)
    return <ContainerEmpty><Placeholder>{t('MassagesBlock.noMassages')}</Placeholder></ContainerEmpty>;

  return (
    <CardContainer>
      <TopContainer>
        <MassagesBlockHeader>
          <h2>{category?.title[i18n.language]}</h2>
          <p>{t('ServicesBlock.subhead2')}</p>
        </MassagesBlockHeader>
        <ButtonBack to={location.state?.from || '/'}>
          {t('MassagesBlock.back')}
        </ButtonBack>
      </TopContainer>

      <Container>
        {massages.map((massage) => (
          <Card key={massage._id} background={massage?.imageUrl || ''}>
            <Overlay>
              <Title>
                <h3>{massage.title[i18n.language]}</h3>
              </Title>
              <Content>
                <ul>
                  {[
                    massage.details1,
                    massage.details2,
                    massage.details3,
                    massage.details4,
                  ]
                    .filter(Boolean)
                    .map((detail, index) => (
                      <li key={index}>
                        <BsDot size={30} /> {detail[i18n.language]}
                      </li>
                    ))}
                </ul>
                <ButtonContainer>
                  <DateContainer>
                    <h4>
                      {`${massage.price} zl`} /{' '}
                      {formatDuration(Number(massage.duration))}
                    </h4>
                  </DateContainer>
                  <Button onClick={() => handleOpenModal(massage)}>
                    {t('courses.button')}
                  </Button>
                </ButtonContainer>
              </Content>
            </Overlay>
          </Card>
        ))}
      </Container>
      <MassageDetailsModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        initialData={selectedMassage}
      />
    </CardContainer>
  );
};

export default Massages;

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
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
  AbonementsBlockHeader,
  ButtonBack,
  ButtonOnlyContainer,
} from './Abonements.styled';
import { BsDot } from 'react-icons/bs';
import { Abonement, getAbonements } from '../AdminDashboard/AbonementService';

const Abonements: React.FC = () => {
  const [abonements, setAbonements] = useState<Abonement[]>([]);
  const [noAbonements, setNoAbonements] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedAbonement, setSelectedAbonement] = useState<Abonement | null>(
    null
  );

  const fetchAbonements = async () => {
    const data = await getAbonements();
    if (data.length === 0) setNoAbonements(true);
    setAbonements(data);
  };

  useEffect(() => {
    fetchAbonements();
  }, []);

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours > 0 ? `${hours} ${t('time.hours')}` : ''} ${
      remainingMinutes > 0 ? `${remainingMinutes} ${t('time.minutes')}` : ''
    }`.trim();
  };

  const handleOpenModal = (massage: Abonement) => {
    setSelectedAbonement(massage);
    setModalIsOpen(true);
  };

  if (noAbonements)
    return <Placeholder>{t('AbonementsBlock.noAbonements')}</Placeholder>;

  return (
    <CardContainer>
      <TopContainer>
        <AbonementsBlockHeader>
          <h2>{t('AbonementsBlock.title')}</h2>
        </AbonementsBlockHeader>
        <ButtonBack to={location.state?.from || '/'}>
          {t('MassagesBlock.back')}
        </ButtonBack>
      </TopContainer>

      <Container>
        {abonements.map((abonement) => (
          <Card key={abonement._id} background={abonement?.imageUrl || ''}>
            <Overlay>
              <Title>
                <h3>{abonement.title[i18n.language]}</h3>
              </Title>
              <Content>
                <ul>
                  {[
                    abonement.details1,
                    abonement.details2,
                    abonement.details3,
                    abonement.details4,
                  ]
                    .filter(Boolean)
                    .map((detail, index) => (
                      <li key={index}>
                        <BsDot size={30} /> {detail[i18n.language]}
                      </li>
                    ))}
                </ul>
                {abonement.price === 0 || !abonement.duration ? (
                  <ButtonOnlyContainer>
                    <Button onClick={() => handleOpenModal(abonement)}>
                      {t('courses.button')}
                    </Button>
                  </ButtonOnlyContainer>
                ) : (
                  <ButtonContainer>
                    <DateContainer>
                      <h4>
                        {`${abonement.price} zl`} /{' '}
                        {formatDuration(Number(abonement.duration))}
                      </h4>
                    </DateContainer>
                    <Button onClick={() => handleOpenModal(abonement)}>
                      {t('courses.button')}
                    </Button>
                  </ButtonContainer>
                )}
              </Content>
            </Overlay>
          </Card>
        ))}
      </Container>
      {/* <MassageDetailsModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        initialData={selectedMassage}
      /> */}
    </CardContainer>
  );
};

export default Abonements;

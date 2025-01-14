import React, { useEffect, useState } from 'react';
import { Massage } from '../../pages/AdminDashboard/CategoryService';
import { getMassagesByCategory } from '../../pages/AdminDashboard/MassageService';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {
  Button,
  Card,
  Container,
  Content,
  Overlay,
  Title,
  Placeholder,
} from './Massages.styled';

const Massages: React.FC = () => {
  const categoryId = useParams().categoryId || '';
  const [massages, setMassages] = useState<Massage[]>([]);
  const [noMassages, setNoMassages] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchMassages = async () => {
      const data = await getMassagesByCategory(categoryId);
      if (data.length === 0) setNoMassages(true);
      setMassages(data);
    };

    fetchMassages();
  }, [categoryId]);

  if (noMassages)
    return <Placeholder>{t('MassagesBlock.noMassages')}</Placeholder>;

  return (
    <Container>
      {massages.map((massage) => (
        <Card key={massage._id} background={massage?.imageUrl || ''}>
          <Overlay>
            <Title>{massage.title[i18n.language]}</Title>
            <Content>
              <ul>
                {[massage.details1, massage.details2, massage.details3, massage.details4]
                  .filter(Boolean)
                  .map((detail, index) => (
                    <li key={index}>{detail[i18n.language]}</li>
                  ))}
              </ul>
              <div>
                <span>{`${massage.price} ${t('currency')}`}</span>
                <span>{`${massage.duration} ${t('minutes')}`}</span>
              </div>
              <Button>{t('courses.button')}</Button>
            </Content>
          </Overlay>
        </Card>
      ))}
    </Container>
  );
};

export default Massages;

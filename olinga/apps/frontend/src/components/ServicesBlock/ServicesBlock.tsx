import React, { useEffect, useState } from 'react';
import {
  Button,
  CategoryCard,
  Container,
  LeftContainer,
  LeftText,
  PromotionText,
  RightContainer,
  ServicesBlockHeader,
} from './ServicesBlock.styled';
import { useTranslation } from 'react-i18next';
import ConsultationForm from '../ConsultationForm';
import { Category, getCategories } from '../../pages/AdminDashboard/CategoryService';
import { TfiMore } from "react-icons/tfi";

const ServicesBlock: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data.slice(0, 4));
    };

    fetchCategories();
  }, []);

  if (categories.length === 0) return null; 

  return (
    <Container>
      <LeftContainer>
        <ServicesBlockHeader>
          <h2>{t('ServicesBlock.head')}</h2>
          <p>{t('ServicesBlock.subhead')}</p>
        </ServicesBlockHeader>
        <LeftText>{t('ServicesBlock.description')}</LeftText>
        <PromotionText>{t('ServicesBlock.promotion')}</PromotionText>
        <ConsultationForm />
      </LeftContainer>

      <RightContainer>
        {categories.map((category) => (
          <CategoryCard key={category._id}>
            {category.imageUrl && (
              <img src={category.imageUrl} alt={category.title[i18n.language]} />
            )}
            <h3>{category.title[i18n.language]}</h3>
            <p>{category.details[i18n.language]}</p>
            <Button to={`/services/${category._id}`}>{t('courses.button')} <TfiMore /></Button>
          </CategoryCard>
        ))}
      </RightContainer>
    </Container>
  );
};

export default ServicesBlock;

import React, { useEffect, useState } from 'react';
import {
  ActivePromotion,
  Button,
  CategoryCard,
  Container,
  LeftContainer,
  LeftText,
  PromotionCode,
  PromotionContainer,
  PromotionDetails,
  PromotionHeader,
  PromotionPercent,
  PromotionText,
  RightContainer,
  ServicesBlockHeader,
} from './ServicesBlock.styled';
import { useTranslation } from 'react-i18next';
import ConsultationForm from '../ConsultationForm';
import {
  Category,
  getCategories,
} from '../../pages/AdminDashboard/CategoryService';
import { TfiMore } from 'react-icons/tfi';
import { Promotion } from '../PromotionAdmin/PromotionAdmin';
import { getPromotion } from '../../pages/AdminDashboard/PromotionService';

const ServicesBlock: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [categories, setCategories] = useState<Category[]>([]);
  const [promotion, setPromotion] = useState<Promotion>({
    _id: '',
    title: {},
    description: {},
    promotion_percent: 0,
    promotion_code: '',
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data.slice(0, 4));
    };

    fetchPromotion();
    fetchCategories();
  }, []);

  const fetchPromotion = async () => {
    const data = await getPromotion();
    setPromotion(data);
  };

  if (categories.length === 0) return null;

  return (
    <Container>
      <LeftContainer>
        <ServicesBlockHeader>
          <h2>{t('ServicesBlock.head')}</h2>
          <p>{t('ServicesBlock.subhead')}</p>
        </ServicesBlockHeader>
        <PromotionContainer>
  <ActivePromotion>
    <PromotionHeader>{promotion.title[i18n.language]}</PromotionHeader>
    <PromotionDetails>{promotion.description[i18n.language]}</PromotionDetails>
    <PromotionCode>
      {t('promotion.code')}: <span>{promotion.promotion_code}</span>
    </PromotionCode>
    <PromotionPercent>
    {t('promotion.discount')} -{promotion.promotion_percent}% 
    </PromotionPercent>
  </ActivePromotion>
</PromotionContainer>


        <ConsultationForm />
      </LeftContainer>

      <RightContainer>
        {categories.map((category) => (
          <CategoryCard key={category._id}>
            {category.imageUrl && (
              <img
                src={category.imageUrl}
                alt={category.title[i18n.language]}
              />
            )}
            <h3>{category.title[i18n.language]}</h3>
            <p>{category.details[i18n.language]}</p>
            <Button to={`/massages/${category._id}`}>
              {t('courses.button')} <TfiMore />
            </Button>
          </CategoryCard>
        ))}
      </RightContainer>
    </Container>
  );
};

export default ServicesBlock;

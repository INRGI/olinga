import React, { useEffect, useState } from 'react';
import {
  Container,
  ServicesContainer,
  ServicesItem,
  TitleContainer,
  Button,
  SkeletonItem,
  Placeholder,
} from './Services.styled';
import { useTranslation } from 'react-i18next';
import { Category, getCategories } from '../AdminDashboard/CategoryService';
import { HiDotsHorizontal } from 'react-icons/hi';

const Services: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <h2>{t('ServicesBlock.head')}</h2>
        <p>{t('ServicesBlock.subhead2')}</p>
      </TitleContainer>

      {loading ? (
        <ServicesContainer>
          {[...Array(4)].map((_, index) => (
            <SkeletonItem key={index} />
          ))}
        </ServicesContainer>
      ) : categories.length > 0 ? (
        <ServicesContainer>
          {categories.map((category) => (
            <ServicesItem key={category._id}>
              {category.imageUrl && (
                <img
                  src={category.imageUrl}
                  alt={category.title[i18n.language]}
                />
              )}
              <h3>{category.title[i18n.language]}</h3>
              <p>{category.details[i18n.language]}</p>
              <Button to={`/massages/${category._id}`}>
                {t('courses.button')}
                <HiDotsHorizontal />
              </Button>
            </ServicesItem>
          ))}
        </ServicesContainer>
      ) : (
        <Placeholder>{t('ServicesBlock.noCategories')}</Placeholder>
      )}
    </Container>
  );
};

export default Services;

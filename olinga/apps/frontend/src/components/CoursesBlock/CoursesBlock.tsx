import React from 'react';
import { useTranslation } from 'react-i18next';
import { AbooutUsHeader } from '../AboutUs/AboutUs.styled';
import { Button, Container, LeftBlock, RightBlock, RightText, RightTextBold, SwiperSlideStyled } from './CoursesBlock.styled';
import { Swiper } from 'swiper/react';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useLocation } from 'react-router-dom';

const images = ['/public/school1.webp', '/public/school2.webp'];

const CoursesBlock: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <Container>
      <LeftBlock>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlideStyled key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </SwiperSlideStyled>
        ))}
      </Swiper>
      </LeftBlock>

      <RightBlock>
        <AbooutUsHeader>
          <h2>{t('courses.head')}</h2>
          <p>{t('courses.subhead')}</p>
        </AbooutUsHeader>
        <RightText>{t('courses.text')}</RightText>
        <RightTextBold>{t('courses.text2')}</RightTextBold>
          {location.pathname !== '/courses' && <Button to="/courses">{t('courses.button')}</Button>}
      </RightBlock>
    </Container>
  );
};

export default CoursesBlock;

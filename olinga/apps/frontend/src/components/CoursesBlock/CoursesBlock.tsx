import React from 'react';
import { useTranslation } from 'react-i18next';
import { AbooutUsHeader } from '../AboutUs/AboutUs.styled';
import { Button, Container, LeftBlock, RightBlock, RightText, RightTextBold, SwiperSlideStyled } from './CoursesBlock.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const images = ['/public/slide1.jpg', '/public/slide2.jpg'];

const CoursesBlock: React.FC = () => {
  const { t } = useTranslation();
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

        <Button to="/courses">{t('courses.button')}</Button>
      </RightBlock>
    </Container>
  );
};

export default CoursesBlock;

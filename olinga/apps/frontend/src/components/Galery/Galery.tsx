import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { GaleryHeader, SliderContainer } from './Galery.styled';
import { useTranslation } from 'react-i18next';

const Galery = () => {
  const { t } = useTranslation();
  const images = [
    '/public/slide1.jpg',
    '/public/slide2.jpg',
    '/public/slide3.jpg',
    '/public/slide4.jpg',
    '/public/slide6.jpg',
    '/public/slide7.jpg',
    '/public/slide8.jpg',
    '/public/slide9.jpg',
  ];

  return (
    <SliderContainer>
      <GaleryHeader>
        <h2>{t('galery.title')}</h2>
        <p>{t('galery.description')}</p>
      </GaleryHeader>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default Galery;

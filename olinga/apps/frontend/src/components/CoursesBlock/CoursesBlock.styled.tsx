import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 20px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    flex-direction: column-reverse;
  }
`;

export const LeftBlock = styled.div`
  flex: 2;
  width: 300px;
  height: 550px;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);

  .swiper {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .swiper-slide {
    border-radius: 10px;
    transition: transform 0.5s ease, box-shadow 0.3s ease;
  }

  .swiper-slide:hover {
    transform: scale(1.01);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  .swiper-slide img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease; 
  }

  .swiper-slide:hover img {
    transform: scale(1.01);
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.7;

    &.swiper-pagination-bullet-active {
      background: #c6caa6;
    }
  }

  @media (max-width: 1024px) {
    height: 700px;
    flex: 3;
  }

  @media (max-width: 768px) {
    height: 450px;
    width: 100%;
    flex: none;
  }
`;

export const RightBlock = styled.div`
  flex: 4;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const RightText = styled.p`
  font-size: 16px;
  color: black;
  line-height: 1.5;
  padding: 0;
  margin: 0;
  white-space: pre-line;
`;

export const RightTextBold = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: black;
  line-height: 1.5;
  padding: 0;
  margin: 0;
  white-space: pre-line;
`;

export const Button = styled(NavLink)`
  padding: 15px;
  text-decoration: none;
  background-color: #1e1e1e;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: center;
  max-width: 300px;

  &:hover {
    background-color: #444;
  }

  @media (max-width: 425px) {
    width: 100%;
    max-width: 90%;
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s ease;
  }
`;

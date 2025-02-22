import styled from '@emotion/styled';

export const SliderContainer = styled.div`
  position: relative;
  background: linear-gradient(to bottom, #fff, #282828);
  padding: 20px 20px;

  .swiper {
    padding-bottom: 50px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1e1e1e;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    height: 500px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    opacity: 0.7;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.7;

    &.swiper-pagination-bullet-active {
      background: #87bdd8;
    }
  }
`;

export const GaleryHeader = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  margin-bottom: 20px;

  h2 {
    font-size: 30px;
    line-height: 1.2;
    color: black;
    margin: 0;
    font-weight: 500;
    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;
    border-bottom: 2px solid black;
  }

  p {
    text-transform: uppercase;
    font-size: 20px;
    color: black;
    margin: 0;
    padding: 0;
    padding-left: 2px;
  }

  @media (max-width: 1023px) {
    h2{
       font-size: 22px;
    }
    p{
       font-size: 15px;
    }
  }

  @media (max-width: 430px) {
    h2{
       font-size: 16px;
    }
    p{
       font-size: 14px;
    }
  }
`;
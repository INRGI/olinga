import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  background-image: url('/public/header.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: flex-end;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  @media (max-width: 425px) {
    margin-top: 50px;

    &::before {
      top: 50px;
    }
  }

  @media (max-width: 320px) {
    margin-top: 40px;

    &::before {
      top: 40px;
    }
  }
`;

export const RightContainer = styled.div`
  z-index: 2;
  margin-right: 60px;
  display: flex;
  gap: 15px;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-right: 30px;
  }

  @media (max-width: 425px) {
    margin-right: 0px;
    padding: 20px;
    background: rgba(30, 30, 30, 0.6);
    border-radius: 4px;

  }
  @media (max-width: 320px) {
    margin-top: 40px;
  }
`;

export const TitleContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  padding: 10px;
  background: rgba(30, 30, 30, 0.6);
  border-radius: 4px;

  h2 {
    font-size: 36px;
    line-height: 1.2;
    color: white;
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;
    border-bottom: 2px solid white;
  }

  h3 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 20px;
    color: white;
    margin: 0;
    padding: 0;
    padding-left: 2px;
  }

  @media (max-width: 1023px) {
    h2 {
      font-size: 22px;
    }
    h3 {
      font-size: 15px;
    }
  }

  @media (max-width: 425px) {
    background: none;
    padding: 0;
  }
`;

export const ItemText = styled.p`
  text-transform: uppercase;
  font-size: 20px;
  color: white;
  margin: 0;
  padding: 0;
  padding-left: 2px;
  align-items: center;
  align-content: center;
  display: flex;
  gap: 5px;

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 12px 45px;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: #e0e0e0;
  background-color: #282828;
  border: 2px solid #4a4a4a;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-top: 20px;
  max-width: 400px;

  &:hover {
    color: #d4d4d4;
    background-color: #282828;
    box-shadow: 0 0 10px rgba(128, 128, 128, 0.2);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(211, 211, 211, 0.1),
      transparent
    );
    transition: all 0.5s ease-in-out;
    transform: skewX(-30deg);
  }

  &:hover:before {
    left: 100%;
    transition: all 0.5s ease-in-out;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 424px) {
    font-size: 16px;
    padding: 12px 35px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: flex-end;
`;

export const SocialItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 28px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

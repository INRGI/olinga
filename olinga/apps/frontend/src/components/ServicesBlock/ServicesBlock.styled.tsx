import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
  height: 948px;

  @media (max-width: 430px) {
    flex-direction: column;
    height: auto;
  }
`;

export const PromotionContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 10px;
  flex-direction: column;
  width: 100%;
`;

export const ActivePromotion = styled.div`
  position: relative;
  min-height: 250px;
  align-items: center;
  align-content: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  border-radius: 10px;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  box-shadow: 0 4px 15px rgba(255, 126, 95, 0.4);
  text-align: center;
  animation: pulse 2s infinite;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #feb47b, #ff7e5f);
  }

  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 4px 15px rgba(255, 126, 95, 0.4);
    }
    50% {
      box-shadow: 0 6px 20px rgba(255, 126, 95, 0.6);
    }
  }
`;

export const PromotionHeader = styled.h3`
  font-size: 20px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

export const PromotionDetails = styled.p`
  font-size: 16px;
  color: #fff;
  margin: 0;
  padding: 0;

  @media (max-width: 430px) {
    font-size: 12px;
  }
`;

export const PromotionCode = styled.p`
  font-size: 18px;
  color: #f7f7f7;
  margin: 0;
  padding: 0;

  span {
    font-weight: bold;
    color: #ff4500;
  }
`;

export const PromotionPercent = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: white;
  background: rgba(255, 69, 0, 0.9);
  padding: 10px 15px;
  border-radius: 8px;
  display: inline-block;
  animation: glow 3s infinite;
  margin: 0;
  margin-bottom: 10px;
  transition: box-shadow 3s ease;

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 10px rgba(255, 69, 0, 0.9);
    }
    50% {
      box-shadow: 0 0 20px rgba(255, 69, 0, 1);
    }
  }
`;

export const LeftContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 370px;
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  justify-content: space-between;
  align-self: stretch;

  @media (max-width: 430px) {
    justify-content: center;
    align-content: center;
    align-items: center;
    form:nth-last-child(1) {
      display: none;
    }
  }
`;

export const RightContainer = styled.div`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (min-width: 426px) and (max-width: 768px) {
    flex: 1;
    grid-template-columns: repeat(1, 1fr);

    div:nth-child(n + 3) {
      display: none;
    }
  }

  @media (max-width: 430px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ServicesBlockHeader = styled.div`
  width: 100%;

  h2 {
    font-size: 25px;
    line-height: 1.2;
    color: white;
    margin: 0;
    font-weight: 500;
    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;
    border-bottom: 2px solid white;
  }

  p {
    font-size: 18px;
    color: white;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 430px) {
    p {
      font-size: 14px;
    }
  }
`;

export const LeftText = styled.p`
  font-size: 16px;
  color: white;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const PromotionText = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: black;
  margin: 0;
  padding: 10px;
  background-color: #87bdd8;
  text-transform: uppercase;
  border-bottom: 4px solid #76a7c0;

  @media (max-width: 430px) {
    font-size: 12px;
  }
`;

export const CategoryCard = styled.div`
  background-color: #2b2b2b;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  padding: 0;
  text-align: left;
  color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;

  img {
    width: 100%;
    height: 325px;
    object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    @media (max-width: 430px) {
      width: 400px;
    }
  }

  h3 {
    font-size: 20px;
    margin: 0;
    white-space: nowrap;
    padding: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 16px;
    color: #c6c6c6;
    margin: 0;
    padding: 0 10px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Button = styled(NavLink)`
  padding: 9px;
  text-decoration: none;
  background-color: #87bdd8;
  color: black;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  max-width: 200px;
  margin-left: 10px;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 10px;
  align-items: center;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 430px) {
    width: 100%;
    max-width: 90%;
  }

  @media (max-width: 375px) {
    max-width: 88%;
  }

  @media (max-width: 320px) {
    max-width: 86%;
  }
`;

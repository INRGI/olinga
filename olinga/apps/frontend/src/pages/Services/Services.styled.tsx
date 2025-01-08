import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`

  padding: 20px 40px;
  margin: 0;
  margin-top: 68px;
  @media (max-width: 1024px) {
    margin-top: 48px;
  }

  @media (max-width: 768px) {
    margin-top: 52px;
  }

  @media (max-width: 425px) {
    margin-top: 57.8px;
    padding: 20px;
  }

  @media (max-width: 425px) {
    margin-top: 51px;
  }

  @media (max-width: 320px) {
    margin-top: 43px;
  }
`;

export const TitleContainer = styled.div`
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
    padding: 0;
    font-weight: 500;
    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;
    border-bottom: 2px solid black;
    width: 40%;
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
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 15px;
    }
  }
  @media (max-width: 768px) {
    h2 {
        width: 60%;
    }
  }
  @media (max-width: 425px) {
    h2 {
        width: 100%;
    }
  }
`;
export const ServicesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ServicesItem = styled.li`
  background-color: #111;
  border-radius: 8px;
  color: #f1f1f1;
  width: calc(50% - 10px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.6);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  h3 {
    font-size: 20px;
    margin: 10px;
  }

  p {
    font-size: 16px;
    margin: 10px;
    color: #f0f0f0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled(NavLink)`
  margin: 10px;
  padding: 10px;
  text-align: center;
  background-color: #222;
  color: #f1f1f1;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #333;
    transform: translateY(-2px);
  }
`;

export const SkeletonItem = styled.div`
  background-color: #444;
  width: calc(50% - 10px);
  height: 350px;
  border-radius: 8px;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      background-color: #444;
    }
    50% {
      background-color: #555;
    }
    100% {
      background-color: #444;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Placeholder = styled.div`
  text-align: center;
  font-size: 26px;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  margin-top: 50px;
`;
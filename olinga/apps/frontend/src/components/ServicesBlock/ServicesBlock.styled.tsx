import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const LeftContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;
  max-width: 370px;
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
`;

export const RightContainer = styled.div`
  flex: 5;
`;

export const ServicesBlockHeader = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  width: 100%;

  h2 {
    font-size: 25px;
    line-height: 1.2;
    color: white;
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;
    border-bottom: 2px solid white;
  }

  p {
    text-transform: uppercase;
    font-size: 18px;
    color: white;
    margin: 0;
    padding: 0;
    padding-left: 2px;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 15px;
    }
  }
`;

export const LeftText = styled.p`
  font-size: 16px;
  color: white;
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const PromotionText = styled.p`
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  color: black;
  margin: 0;
  padding: 7px;
  background-color: #c6caa6;
  text-transform: uppercase;
  border-bottom: 4px solid #949874;
`;

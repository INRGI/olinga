import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
  background-color: #121212;
  min-height: 100vh;
  margin-top: 68px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    margin-top: 48px;
  }

  @media (max-width: 768px) {
    margin-top: 52px;
    padding: 20px;
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

export const Content = styled.p`
  font-size: 18px;
  padding: 0;
  margin: 0;
  color: white;
  margin: 0;
  text-align: justify;
  white-space: pre-line;
`;

export const BlockHeader = styled.div`
  h2 {
    font-size: 25px;
    line-height: 1.2;
    color: white;
    margin: 0;
    font-weight: 500;
    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;
  }

  @media (max-width: 425px) {
    h2 {
      font-size: 18px;
    }
  }
`;

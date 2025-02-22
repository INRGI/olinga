import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: #1e1e1e;
  border-top: 4px solid #fff2;
  border-bottom: 4px solid #fff2;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
     flex-direction: column;
    }
`;

export const LeftContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
`;

export const RightContainer = styled.div`
  flex: 3;
  display: flex;
  gap: 10px;

  @media (max-width: 1024px) {
      flex: 2;
    }

    @media (max-width: 430px) {
     flex-direction: column;
    }
`;

export const Item = styled.div`
display: flex;
gap: 20px;
align-items: center;

h3 {
    font-size: 22px;
    line-height: 1.2;
    color: #87bdd8;
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;
    padding-bottom: 6px;
  }

  p {
    font-size: 16px;
    color: white;
    margin: 0;
    padding: 0;
    padding-left: 2px;
  }

  @media (max-width: 1024px) {
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }

  @media (max-width: 320px) {
    h3 {
      font-size: 15px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const BenefitsHeader = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;

  h2 {
    font-size: 28px;
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
    font-size: 20px;
    color: white;
    margin: 0;
    padding: 0;
    padding-left: 2px;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 15px;
    }
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1e1e1e;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  &:nth-of-type(2) {
    @media (min-width: 769px) and (max-width: 1024px) {
      display: none;
    }
  }

  &:nth-of-type(2) {
    @media (max-width: 430px) {
      display: none;
    }
  }
`;
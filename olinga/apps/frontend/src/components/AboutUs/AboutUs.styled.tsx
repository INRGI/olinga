import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  padding-right: 0;
  background: #fff;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 430px) {
    padding-right: 20px;
  }
`;

export const LeftContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RightContainer = styled.div`
  flex: 3;
  display: flex;
  gap: 20px;
  background-color: #282828;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 500px) {
    flex-direction: column;
    border-radius: 0;
    border-radius: 8px;
    gap: 0px;
  }
`;

export const AbooutUsHeader = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;

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
`;

export const LeftText = styled.p`
  font-size: 16px;
  color: black;
  line-height: 1.5;
  padding: 0;
  margin: 0;
  white-space: pre-line;
`;

export const ImageContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1e1e1e;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  @media (max-width: 500px) {
    img {
      border-radius: 0;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
`;

export const TextContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  padding-left: 0px;
  align-content: space-between;
  justify-content: space-between;
  @media (max-width: 500px) {
    padding-left: 20px;
  }
`;

export const RightTitle = styled.p`
  font-size: 25px;
  line-height: 1.2;
  color: white;
  font-weight: bold;
  padding: 0;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const RightText = styled.p`
  font-size: 16px;
  color: white;
  line-height: 1.5;
  padding: 0;
  margin: 0;
`;

export const RightColoredText = styled.p`
  font-size: 16px;
  color: #87bdd8;
  line-height: 1.5;
  padding: 0;
  margin: 0;
`;

export const RightItem = styled.div`
  font-size: 16px;
  color: white;
  line-height: 1.5;
  padding-left: 10px;
  border-left: 2px solid white;
`;

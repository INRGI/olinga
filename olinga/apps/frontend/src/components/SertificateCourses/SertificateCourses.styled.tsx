import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 30px;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #1e1e1e;
  border-top: 4px solid #fff2;
  border-bottom: 4px solid #fff2;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 430px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  flex: 2;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;

  h2 {
    font-size: 26px;
    line-height: 1.2;
    color: #fff;
    margin: 0;
    font-weight: 300;
    padding-bottom: 10px;
    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;
    border-bottom: 2px solid #fff;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #fff;
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

  @media (max-width: 430px) {
    h2 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }
`;
export const SertificateButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 12px 45px;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: #e0e0e0;
  background-color: #282828;
  border: 2px solid #4a4a4a;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: 400px;

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

  @media (max-width: 430px) {
    width: 100%;
  }
`;
